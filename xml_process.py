import xml.etree.ElementTree as ET
from dataclasses import dataclass
from typing import List, Tuple


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
    result = filter_deepest_clickable_nodes("./powcontext/0Zq-T7bGlrworTuFiaCkKAZlsicY0gHC4TVJn9IIQho=.xml")
    pretty_print_clickable_structure(result)  # Here we can print or further process the result as needed

