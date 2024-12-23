import os
import shutil

if __name__ == "__main__":
    # 当前路径下的collectData目录路径
    collect_data_dir = "./collectData"

    # 检查collectData目录是否存在
    if os.path.exists(collect_data_dir) and os.path.isdir(collect_data_dir):
        # 遍历collectData目录下的所有子目录
        for sub_dir in os.listdir(collect_data_dir):
            sub_dir_path = os.path.join(collect_data_dir, sub_dir)

            # 确保是子目录
            if os.path.isdir(sub_dir_path):
                screenshot_dir = os.path.join(sub_dir_path, "Screenshot")

                # 如果子目录下存在Screenshot子目录，则删除
                if os.path.exists(screenshot_dir) and os.path.isdir(screenshot_dir):
                    shutil.rmtree(screenshot_dir)
                    print(f"已删除目录: {screenshot_dir}")
                else:
                    print(f"目录 {screenshot_dir} 不存在")
    else:
        print(f"目录 {collect_data_dir} 不存在")
