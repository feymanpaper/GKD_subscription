import cv2
import os
import json
import shutil

# draw画框
def draw_box(image_path, bound_list, output_path="output.png"):
    """
    在图片上画框，并保存结果。

    参数:
    - image_path: str, 输入图像的路径
    - bounds: list or tuple, 框的坐标 (x1, y1, x2, y2)
    - output_path: str, 输出图像的路径，默认保存为 "output.png"
    """
    image = cv2.imread(image_path)

    # 定义一些常见颜色
    colors = [
        (0, 0, 255),  # Red
        (0, 255, 0),  # Green
        (255, 0, 0),  # Blue
        (0, 255, 255),  # Yellow
        (255, 0, 255),  # Magenta
        (255, 255, 0)  # Cyan
    ]

    # 遍历每个框
    for i, bound in enumerate(bound_list):
        # 选择颜色
        color = colors[i % len(colors)]  # 使用循环颜色
        x1, y1, x2, y2 = bound["bounds"]
        text = bound["text"]

        # 画框
        thickness = 10  # 矩形框的线条粗细
        cv2.rectangle(image, (x1, y1), (x2, y2), color, thickness)

        # 设置文本参数
        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 2
        font_color = color
        font_thickness = 3

        # 计算文本位置，通常文本放在框的上方
        text_size = cv2.getTextSize(text, font, font_scale, font_thickness)[0]
        text_x = x1
        text_y = y1 - 10 if y1 - 10 > 10 else y1 + 20  # 防止文本超出图像边界

        # 添加文本
        cv2.putText(image, text, (text_x, text_y), font, font_scale, font_color, font_thickness)

    # 保存结果
    cv2.imwrite(output_path, image)


def process_files(directory):
    for file in os.listdir(directory):
        if not file.endswith('.png'):
            continue

        png_path = os.path.join(directory, file)
        json_path = png_path + ".json"

        # 读取 JSON 文件中的 cross bounds
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            pow_ele = data.get("pow_ele", [])
            bound_list = []
            for element in pow_ele:
                if element.get("class") == "cross":
                    cross_bounds = element.get("bounds")
                    bound_item = {
                        "bounds":tuple(cross_bounds),
                        "text":"cross",
                    }
                    bound_list.append(bound_item)
                elif element.get("class") == "skip":
                    cross_bounds = element.get("bounds")
                    bound_item = {
                        "bounds": tuple(cross_bounds),
                        "text": "skip",
                    }
                    bound_list.append(bound_item)
                elif element.get("class") == "open":
                    cross_bounds = element.get("bounds")
                    bound_item = {
                        "bounds": tuple(cross_bounds),
                        "text": "open",
                    }
                    bound_list.append(bound_item)

            if not bound_list:
                print(f"No cross element found in {json_path}.")
                xml_name = file+".xml"
                json_name = file+".json"
                xml_path = os.path.join(directory, xml_name)
                json_path = os.path.join(directory, json_name)
                path_parts = directory.split(os.sep)
                non_exist_xml_path =  os.path.join(path_parts[0], "non_exist", path_parts[2], xml_name)
                non_exist_json_path =  os.path.join(path_parts[0], "non_exist", path_parts[2], json_name)
                non_exist_png_pagh = os.path.join(path_parts[0], "non_exist", path_parts[2], file)
                os.makedirs(os.path.dirname(non_exist_xml_path), exist_ok=True)
                shutil.copy(xml_path, non_exist_xml_path)
                shutil.copy(json_path, non_exist_json_path)
                shutil.copy(png_path, non_exist_png_pagh)
                continue

        input_image_path = png_path

        path_parts = directory.split(os.sep)
        output_image_path = os.path.join(path_parts[0], 'tmp', path_parts[2], file)
        os.makedirs(os.path.dirname(output_image_path), exist_ok=True)

        draw_box(input_image_path, bound_list, output_image_path)

def process_draw_box_dirs(base_dir):
    # 遍历 base_dir 目录下的所有子目录
    for subdir in os.listdir(base_dir):
        subdir_path = os.path.join(base_dir, subdir)
        powup_dir = os.path.join(subdir_path, 'PopupImg')
        # 如果是子目录且其中包含powup目录
        if os.path.isdir(subdir_path) and os.path.isdir(powup_dir):
            # 遍历powup目录中的每个文件
            process_files(powup_dir)

if __name__ == "__main__":
    # Example usage
    target_directory = "./collectData"
    process_draw_box_dirs(target_directory)


