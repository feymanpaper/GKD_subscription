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
        if "$" in component_info["path"]:
            continue
        distance = calculate_distance(cross_bounds, component_info["bounds"])
        if distance < min_distance:
            min_distance = distance
            nearest = component_info
    return nearest


def process_files(directory):
    # 跳过不需要生成的ts
    if is_white_list_app(directory):
        return

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
                pow_bounds = data.get("pow_bounds", [])
                cross_bounds = None
                pkg_name = data.get("pkg_name", "")
                app_name = data.get("app_name", "")
                activity_name = data.get("activity_name", "")
                # img_name = data.get("img_name", "")
                img_name = file
                type_name = data.get("type", "")

                # 优先级: cross > skip > open
                status = ""
                for element in pow_ele:
                    # if not is_inbox(pow_bounds, element.get("bounds")):
                    #     continue
                    if element.get("class") == "cross":
                        # 优先考虑下面的cross
                        if status == "cross":
                            iy1, iy2 = cross_bounds[1], cross_bounds[3]
                            jy1, jy2 = element.get("bounds")[1], element.get("bounds")[3]
                            iy = (iy1 + iy2) / 2
                            jy = (jy1 + jy2) / 2
                            if jy > iy:
                                cross_bounds = element.get("bounds")
                        else:
                            cross_bounds = element.get("bounds")
                        status = "cross"
                    elif element.get("class") == "skip" and (status == "" or status == "open"):
                        cross_bounds = element.get("bounds")
                        status = "skip"
                    elif element.get("class") == "open" and status == "":
                        cross_bounds = element.get("bounds")
                        status = "open"

                if status == "":
                    print(f"No cross element found in {json_path}.")
                    continue

            # # 处理 XML 文件
            # components = filter_deepest_clickable_nodes(xml_path)
            # # print(f"Components from XML: {components}")
            #
            # # 找到最近的组件
            # nearest_component = find_nearest_component(cross_bounds, components)
            # print(f"Nearest component to cross bounds: {nearest_component}")
            # print("*" * 100)


            if is_sp_app(pkg_name, img_name):
                nearest_component = get_maxIOU_node(xml_path, cross_bounds)
            else:
                nearest_component = get_mindis_node(xml_path, cross_bounds)

            if nearest_component is None:
                print("no nearest comp")
                continue

            matches = nearest_component["path"]

            mat_item = {}
            if not nearest_component.get("resource_id"):
                mat_item["activityIds"] = activity_name
            else:
                mat_item["activityIds"] = ""
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

def is_white_list_app(dir):
#     white_list = ["com.jifen.qukan"]
    white_list = []
    res =  any(ele in dir for ele in white_list)
    return res
def is_sp_app(pkg_name, img_name):
    mp = {
        "com.shuqi.controller":[
            "47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png",
        ]
    }
    img_list = mp.get(pkg_name)
    if not img_list:  # 包名不存在或对应列表为空
        return False

    return img_name in img_list  # 检查图片是否在列表中


def is_inbox(pow_bounds, ele_bounds):
    px1 = pow_bounds[0]
    py1 = pow_bounds[1]
    px2 = pow_bounds[2]
    py2 = pow_bounds[3]

    ex = (ele_bounds[0] + ele_bounds[2]) / 2
    ey = (ele_bounds[1] + ele_bounds[3]) / 2

    if ex > px1 and ey > py1 and ex < px2 and ey < py2:
        return True
    return False


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
