import json


def build_matches(node_dict):
    res = ""
    res += node_dict.get("path", "")
    desc = node_dict.get("content_desc")
    if desc:
        res += f'[desc="{desc}"]'
    resource_id = node_dict.get("resource_id")
    if resource_id:
        res += f'[id="{resource_id}"]'
    text = node_dict.get("text")
    if not resource_id and text:
        res += f'[text="{text}"]'
    if node_dict.get("clickable") == "true":
        res += f'[clickable=true]'
    return res


def gene_ts_dict(matches):
    config_dict = {}
    config_dict["id"] = matches[0]["pkg_name"]
    config_dict["name"] = matches[0]["app_name"]
    cnt = 0
    group_list = []
    for mat in matches:
        rule_list = []
        rule_item = {
            "action": "clickCenter",
            "activityIds": mat["activityIds"],  # 默认的activity id
            "matches": mat["matches"],
            "snapshotUrls": "https://i.gkd.li/i/13183946",
        }
        rule_list.append(rule_item)
        group_item = {
            "key": cnt,
            "name": mat["name"],
            'actionDelay': 3000,
            # "matchTime": 10000,
            "actionMaximum": 3,
            "resetMatch": "app",
            "priorityTime": 10000,
             "matchRoot": True,
            "rules": rule_list,
        }
        group_list.append(group_item)
        cnt += 1

    config_dict["groups"] = group_list

    return config_dict


# def generate_ts_code(config_dict):
#     """
#     通过 Python 字典生成 TypeScript 配置代码。

#     :param config_dict: 包含配置信息的字典
#     :return: 生成的 TypeScript 代码字符串
#     """
#     # 使用 json.dumps() 来格式化字典为字符串
#     # indent=2 参数可以确保缩进方式使代码更加可读
#     ts_code = json.dumps(config_dict, ensure_ascii=False, indent=2)

#     # 生成 TypeScript 文件的最终代码
#     ts_code = f"""import {{ defineGkdApp }} from '@gkd-kit/define';

# export default defineGkdApp({ts_code});
# """

#     return ts_code

def generate_ts_code(config_dict):
    """
    通过 Python 字典生成 TypeScript 配置代码。

    :param config_dict: 包含配置信息的字典
    :return: 生成的 TypeScript 代码字符串
    """

    def convert_to_ts_format(d, level=1):
        ts_lines = []
        indent = '  ' * level  # 每一层递归增加两个空格的缩进

        for key, value in d.items():
            # 如果是字典或列表，需要递归转换
            if isinstance(value, dict):
                ts_lines.append(f"{indent}{key}: {{\n{convert_to_ts_format(value, level + 1)}\n{indent}}},")
            elif isinstance(value, list):
                list_lines = []
                for item in value:
                    if isinstance(item, dict):
                        list_lines.append(f"{indent}  {{\n{convert_to_ts_format(item, level + 2)}\n{indent}  }},")
                    else:
                        list_lines.append(f"{indent}  {str(item)},")
                ts_lines.append(f"{indent}{key}: [")
                ts_lines.append('\n'.join(list_lines))
                ts_lines.append(f"\n{indent}],")
            else:
                # 对于字符串类型的值，使用单引号包裹
                if isinstance(value, str):
                    ts_lines.append(f"{indent}{key}: '{value}',")
                elif value is True:
                    ts_lines.append(f"{indent}{key}: true,")
                elif value is False:
                    ts_lines.append(f"{indent}{key}: false,")
                else:
                    ts_lines.append(f"{indent}{key}: {value},")

        return '\n'.join(ts_lines)

    # 使用转换函数生成 TypeScript 格式代码
    ts_code = convert_to_ts_format(config_dict)

    # 包装成 TypeScript 代码格式
    ts_code = f"""import {{ defineGkdApp }} from '@gkd-kit/define';

export default defineGkdApp({{
{ts_code}
}});
"""

    return ts_code


def write_ts_file(file_path, ts_code):
    """
    将生成的 TypeScript 代码写入文件。

    :param file_path: 文件路径
    :param ts_code: 生成的 TypeScript 代码
    """
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(ts_code)
    print(f"TypeScript file has been saved to: {file_path}")


if __name__ == "__main__":
    matches = "[text*='跳过'][text.length<10][visibleToUser=true]"
    id = "com.tencent.qt.qtl.sample"
    activityIds = "com.tencent.qt.module_appupdate.sampleupdate"
    config_dict = gene_ts_dict(matches=matches, id=id, activityIds=activityIds)
    # 生成 TypeScript 代码
    ts_code = generate_ts_code(config_dict)

    # 将生成的 TypeScript 代码写入文件
    ts_file_path = "generated_app_config.ts"
    write_ts_file(ts_file_path, ts_code)
