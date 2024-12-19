import os
import json
from xml_process import *
import math
from gene_ts import *


# 计算两个矩形区域的距离
def calculate_distance(bounds1, bounds2):
    # 矩形中心点
    x1, y1 = (bounds1[0] + bounds1[2]) / 2, (bounds1[1] + bounds1[3]) / 2
    x2, y2 = (bounds2[0] + bounds2[2]) / 2, (bounds2[1] + bounds2[3]) / 2
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


# 找到最近的组件
def find_nearest_component(cross_bounds, components):
    nearest = None
    min_distance = float('inf')
    for component_info in components:
        distance = calculate_distance(cross_bounds, component_info["bounds"])
        if distance < min_distance:
            min_distance = distance
            nearest = component_info
    return nearest


def process_files(directory):
    mat = []
    for file in os.listdir(directory):
        if file.endswith('.png'):
            png_path = os.path.join(directory, file)
            json_path = png_path + ".json"
            xml_path = png_path + ".xml"

            # 检查对应的 PNG 和 XML 文件是否存在
            if not os.path.exists(png_path) or not \
                    os.path.exists(xml_path) or not \
                    os.path.exists(json_path):
                print(f"Skipping {file} due to missing")
                continue

            print(f"Processing: {file}")

            # 读取 JSON 文件中的 cross bounds
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                pow_ele = data.get("pow_ele", [])
                cross_bounds = None
                pkg_name = data.get("pkg_name")
                app_name = data.get("app_name")
                activity_name = data.get("activity_name")
                img_name = data.get("img_name")
                type_name = data.get("type")

                for element in pow_ele:
                    if element.get("class") == "cross":
                        cross_bounds = element.get("bounds")
                        print(f"Found cross bounds in {json_path}: {cross_bounds}")
                        break
                    if element.get("class") == "skip":
                        cross_bounds = element.get("bounds")
                        print(f"Found skip bounds in {json_path}: {cross_bounds}")
                        break
                    if element.get("class") == "open":
                        cross_bounds = element.get("bounds")
                        print(f"Found open bounds in {json_path}: {cross_bounds}")
                        break

                if not cross_bounds:
                    print(f"No cross element found in {json_path}.")
                    continue

            # # 处理 XML 文件
            components = filter_deepest_clickable_nodes(xml_path)
            # print(f"Components from XML: {components}")

            # 找到最近的组件
            nearest_component = find_nearest_component(cross_bounds, components)
            print(f"Nearest component to cross bounds: {nearest_component}")
            print("*" * 100)
            if nearest_component is None:
                continue

            matches = "[text*='跳过'][text.length<10][visibleToUser=true]"
            matches = build_matches(nearest_component)

            mat_item = {}
            mat_item["activityIds"] = activity_name
            mat_item["matches"] = matches
            mat_item["pkg_name"] = pkg_name
            mat_item["app_name"] = app_name
            mat_item["name"] = type_name + "|" + img_name

            mat.append(mat_item)

    config_dict = gene_ts_dict(mat)
    # 生成 TypeScript 代码
    ts_code = generate_ts_code(config_dict)

    # 将生成的 TypeScript 代码写入文件
    ts_file_dir = "./src/apps"
    ts_file_name = pkg_name + ".ts"
    ts_file_path = os.path.join(ts_file_dir, ts_file_name)
    write_ts_file(ts_file_path, ts_code)

def process_dirs(base_dir):
    # 遍历 base_dir 目录下的所有子目录
    for subdir in os.listdir(base_dir):
        subdir_path = os.path.join(base_dir, subdir)
        powup_dir = os.path.join(subdir_path, 'PopupImg')
        # 如果是子目录且其中包含powup目录
        if os.path.isdir(subdir_path) and os.path.isdir(powup_dir):
            # 遍历powup目录中的每个文件
            process_files(powup_dir)

if __name__ == "__main__":
    # 替换为目标目录路径
    target_directory = "./collectData"
    # process_files(target_directory)
    process_dirs(target_directory)