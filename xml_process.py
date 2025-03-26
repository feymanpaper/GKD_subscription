import xml.etree.ElementTree as ET
from dataclasses import dataclass
from typing import List, Tuple
import math


@dataclass
class Node:
    level: int
    index: str
    text: str
    resource_id: str
    content_desc: str
    bounds: str
    path: List[Tuple[int, str]]  # List of (level, index) tuples representing the path
    clzz: str
    clickable: bool
    package: str
    agg_text: str
    agg_desc: str


def calculate_distance(bounds1, bounds2):
    # 矩形中心点
    x1, y1 = (bounds1[0] + bounds1[2]) / 2, (bounds1[1] + bounds1[3]) / 2
    x2, y2 = (bounds2[0] + bounds2[2]) / 2, (bounds2[1] + bounds2[3]) / 2
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


def calculate_iou(bounds1, bounds2):
    """
    计算两个矩形的交并比 (IoU)
    参数:
        bounds1, bounds2: [x1, y1, x2, y2] (左上角x,y + 右下角x,y)
    返回:
        IoU 值 (范围 [0, 1])
    """
    # 解包坐标
    a_x1, a_y1, a_x2, a_y2 = bounds1[0], bounds1[1], bounds1[2], bounds1[3]
    b_x1, b_y1, b_x2, b_y2 = bounds2[0], bounds2[1], bounds2[2], bounds2[3]

    # 计算交集区域坐标
    inter_x1 = max(a_x1, b_x1)
    inter_y1 = max(a_y1, b_y1)
    inter_x2 = min(a_x2, b_x2)
    inter_y2 = min(a_y2, b_y2)

    # 计算交集面积（处理无交集情况）
    inter_width = max(0, inter_x2 - inter_x1)
    inter_height = max(0, inter_y2 - inter_y1)
    inter_area = inter_width * inter_height

    # 计算各自面积
    area_a = (a_x2 - a_x1) * (a_y2 - a_y1)
    area_b = (b_x2 - b_x1) * (b_y2 - b_y1)

    # 计算并集面积
    union_area = area_a + area_b - inter_area

    # 避免除零错误（无重叠时返回0）
    iou = inter_area / union_area if union_area > 0 else 0.0
    return iou


def build_path(node):
    res = node.attrib.get("class", "")
    resource_id = node.attrib.get("resource-id", "")
    if resource_id:
        res += f'[id="{resource_id}"]'
    desc = node.attrib.get("content-desc", "")
    if desc:
        res += f'[desc="{desc}"]'
    text = node.attrib.get("text", "")
    if text:
        res += f'[text="{text}"]'
    if node.attrib.get("clickable") == "true":
        res += f'[clickable=true]'
    return res


# 根据遍历的组件中心点到目标组件bounds的中心点欧式距离来得到最小值
def get_mindis_node(xml_path, target_bounds):
    tree = ET.parse(xml_path)
    root = tree.getroot()

    closest_node = None
    min_distance = float('inf')  # 初始设为无穷大
    closest_node_path = []
    closest_node_level = 0

    # 先序遍历过程
    def pre_order_traversal(node, level=0, parent_path=[]):
        nonlocal closest_node, min_distance, closest_node_path, closest_node_level

        # 构建当前节点的路径
        current_path = parent_path + [build_path(node)]
        # 获取当前节点的bounds
        current_bounds = node.attrib.get("bounds", "")
        if current_bounds:
            bds = parse_bounds(current_bounds)
            # 计算当前节点和目标bounds的最短距离
            distance = calculate_distance(target_bounds, bds)

            # 如果当前节点距离更近，则更新最短距离和最接近的节点
            if distance < min_distance and node.attrib.get("clickable") == "true":
                min_distance = distance
                closest_node = node
                closest_node_path = current_path
                closest_node_level = level

        # 遍历子节点
        for child in node:
            pre_order_traversal(child, level + 1, current_path)

    # 从根节点开始先序遍历
    pre_order_traversal(root)

    # 返回最近的节点信息
    if closest_node is not None:
        print(closest_node_path)
        path_str = " > ".join([f"{cls}" for cls in closest_node_path if cls])
        node_info = {
            "level": closest_node_level,
            "index": closest_node.attrib.get("index", ""),
            "text": closest_node.attrib.get("text", ""),
            "resource_id": closest_node.attrib.get("resource-id", ""),
            "content_desc": closest_node.attrib.get("content-desc", ""),
            "bounds": closest_node.attrib.get("bounds", ""),
            "path": path_str,
            "clzz": closest_node.attrib.get("class", ""),
            "clickable": closest_node.attrib.get("clickable"),
            "package": closest_node.attrib.get("package"),
            "agg_text": "",
            "agg_desc": "",
        }
        return node_info
    else:
        return None


# 根据遍历的组件与目标组件的IOU来得到最相近
def get_maxIOU_node(xml_path, target_bounds):
    tree = ET.parse(xml_path)
    root = tree.getroot()

    closest_node = None
    max_iou = -float('inf')  # 初始设为无穷大
    closest_node_path = []
    closest_node_level = 0

    # 先序遍历过程
    def pre_order_traversal(node, level=0, parent_path=[]):
        nonlocal closest_node, max_iou, closest_node_path, closest_node_level

        # 构建当前节点的路径
        current_path = parent_path + [build_path(node)]
        # 获取当前节点的bounds
        current_bounds = node.attrib.get("bounds", "")
        if current_bounds:
            bds = parse_bounds(current_bounds)
            # 计算当前节点和目标bounds的最短距离
            iou = calculate_iou(target_bounds, bds)

            # 如果当前节点距离更近，则更新最短距离和最接近的节点
            if iou > max_iou:
                max_iou = iou
                closest_node = node
                closest_node_path = current_path
                closest_node_level = level

        # 遍历子节点
        for child in node:
            pre_order_traversal(child, level + 1, current_path)

    # 从根节点开始先序遍历
    pre_order_traversal(root)

    # 返回最近的节点信息
    if closest_node is not None:
        print(closest_node_path)
        path_str = " > ".join([f"{cls}" for cls in closest_node_path if cls])
        node_info = {
            "level": closest_node_level,
            "index": closest_node.attrib.get("index", ""),
            "text": closest_node.attrib.get("text", ""),
            "resource_id": closest_node.attrib.get("resource-id", ""),
            "content_desc": closest_node.attrib.get("content-desc", ""),
            "bounds": closest_node.attrib.get("bounds", ""),
            "path": path_str,
            "clzz": closest_node.attrib.get("class", ""),
            "clickable": closest_node.attrib.get("clickable"),
            "package": closest_node.attrib.get("package"),
            "agg_text": "",
            "agg_desc": "",
        }
        return node_info
    else:
        return None


def filter_deepest_clickable_nodes(xml_path):
    tree = ET.parse(xml_path)
    root = tree.getroot()

    def find_deepest_clickable(node, level=0, parent_path=None):
        # Initialize list to collect deepest clickable nodes at this level
        deepest_clickables = []
        all_child_text = []
        all_child_content_desc = []

        # Traverse all children first to accumulate all child texts and content-descs
        current_path = (parent_path or []) + [(node.attrib.get("class", ""), level, node.attrib.get("index", ""))]
        for child in node:
            # Get the deepest clickable nodes and accumulate text/content-desc from children
            child_nodes = find_deepest_clickable(child, level + 1, current_path)
            deepest_clickables.extend(child_nodes)
            # Collect text and content-desc from the recursive results
            for child_node in child_nodes:
                all_child_text.append(child_node.text)
                all_child_content_desc.append(child_node.content_desc)

        # Concatenate accumulated text and content-desc for all children
        aggregated_text = " ".join(filter(None, all_child_text)).strip()
        aggregated_content_desc = " ".join(filter(None, all_child_content_desc)).strip()

        # Use aggregated values for the current node if its own values are empty
        node_text = node.attrib.get("text", "") or aggregated_text
        node_content_desc = node.attrib.get("content-desc", "") or aggregated_content_desc

        # If node is clickable, create a Node instance
        if node.attrib.get('clickable') == 'true':
            node_info = Node(
                level=level,
                index=node.attrib.get("index", ""),
                text=node.attrib.get("text", ""),
                resource_id=node.attrib.get("resource-id", ""),
                content_desc=node.attrib.get("content-desc", ""),
                bounds=node.attrib.get("bounds", ""),
                path=current_path,
                clzz=node.attrib.get("class", ""),
                clickable=node.attrib.get("clickable"),
                package=node.attrib.get("package"),
                agg_text=node_text,
                agg_desc=node_content_desc,
            )
            return [node_info]

        return deepest_clickables

    # Start from root and collect all deepest clickable nodes as Node instances
    deepest_clickable_nodes = find_deepest_clickable(root)
    # Return the formatted string instead of printing
    return generate_clickable_structure(deepest_clickable_nodes)


# Generate tree structure of deepest clickable nodes as a string
def display_clickable_structure(nodes):
    output = []
    for node in nodes:
        # Format father_path as a string of level-index pairs
        # father_path_str = " > ".join([f" {cls} {lvl}, {idx})" for cls, lvl, idx in node.father_path if idx])
        father_path_str = " > ".join([f"{cls}" for cls, _, _ in node.father_path if cls])

        indent = "  " * node.level
        # Append the formatted node information to the output list
        output.append(f"{indent}- Level: {node.level}, index: {node.index}, text: {node.text}, "
                      f"resource-id: {node.resource_id}, content-desc: {node.content_desc}, "
                      f"bounds: {node.bounds}, father_path: {father_path_str}")
    return "\n".join(output)


def parse_bounds(bounds_str):
    # 将 "][" 替换为 ","，然后去掉剩余的 "[" 和 "]"
    bounds_str = bounds_str.replace("][", ",").replace("[", "").replace("]", "")
    # 按逗号分隔，并将结果转换为整数
    bounds_list = list(map(int, bounds_str.split(",")))
    return bounds_list


def generate_clickable_structure(nodes):
    output = []
    for node in nodes:
        # Format father_path as a list of class names
        path_str = " > ".join([f"{cls}" for cls, _, _ in node.path if cls])
        bds = parse_bounds(node.bounds)
        # Create a dictionary for the node
        node_dict = {
            "level": node.level,
            "index": node.index,
            "text": node.text,
            "resource_id": node.resource_id,
            "content_desc": node.content_desc,
            "bounds": bds,
            "path": path_str,
            "class": node.clzz,
            "clickable": node.clickable,
            "package": node.package,
            "agg_text": node.agg_text,
            "agg_desc": node.agg_desc,
        }

        # Append the dictionary to the output list
        output.append(node_dict)
    return output


def pretty_print_clickable_structure(nodes):
    for node in nodes:
        print("Node:")
        print(f"  Level: {node['level']}")
        print(f"  Index: {node['index']}")
        print(f"  Text: {node['text']}")
        print(f"  Resource ID: {node['resource_id']}")
        print(f"  Content Description: {node['content_desc']}")
        print(f"  Bounds: {node['bounds']}")
        print(f"  Father Path: {node['path']}")
        print("-" * 40)  # Separator for better readability


if __name__ == "__main__":
    # Example usage
    # result = filter_deepest_clickable_nodes("./powcontext/0Zq-T7bGlrworTuFiaCkKAZlsicY0gHC4TVJn9IIQho=.xml")
    # pretty_print_clickable_structure(result)  # Here we can print or further process the result as needed

    xml_path = "./collectData/me.ele-20241219-015008/PopupImg/oXVk70P2hdxjDR9-Rb3f9IiMhrjydTLV6hZb1Pa9LWI=.png.xml"
    test_bounds = [492, 1872, 587, 1957]
    ans = get_mindis_node(xml_path, test_bounds)
    print(ans)
