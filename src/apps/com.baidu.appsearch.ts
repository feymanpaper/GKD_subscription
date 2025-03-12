import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.appsearch',
  name: '百度手机助手',
  groups: [
    {
      key: 0,
      name: 'in-app|3SqgvkISMFhuG0q0JmUbB-xdK6ubvbrA6Nysd8YaqeY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.appsearch:id/libui_parentPanel"] > android.widget.FrameLayout[id="com.baidu.appsearch:id/libui_customPanel"] > android.widget.FrameLayout[id="com.baidu.appsearch:id/libui_custom"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.appsearch:id/request_permission_dialog_buttons"] > android.widget.TextView[id="com.baidu.appsearch:id/usage_submit"][text="免流量安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|h8kChjBzH6MK1qqti8xomD7qiV7uIEeVT-sCS508n4k=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.ScrollView[id="android:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|OG3-m0skPG4b-Uf96clX8FA_IoGkx3v3RTaBkKAyOdQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="始终允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|TJehRS7X-f9Bdl-YG9f8km8XjSooUDdZQNwRoMZEjMo=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.appsearch:id/main_activity_content_id"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ScrollView > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.appsearch:id/core_function_layout"] > android.widget.LinearLayout[id="com.baidu.appsearch:id/core_function_item_clean"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'system|y74hjO3FjySx5PIJJ5hcdNSZOmnLJ-naqBQXQss34j8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.ScrollView[id="android:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
