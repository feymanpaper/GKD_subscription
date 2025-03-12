import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.appsearch',
  name: '百度手机助手',
  groups: [
    {
      key: 0,
      name: 'in-app|3SqgvkISMFhuG0q0JmUbB-xdK6ubvbrA6Nysd8YaqeY=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.appsearch:id/libui_parentPanel"] > android.widget.FrameLayout[id="com.baidu.appsearch:id/libui_customPanel"] > android.widget.FrameLayout[id="com.baidu.appsearch:id/libui_custom"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.appsearch:id/request_permission_dialog_buttons"] > android.widget.TextView[id="com.baidu.appsearch:id/usage_submit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|TJehRS7X-f9Bdl-YG9f8km8XjSooUDdZQNwRoMZEjMo=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
  ],
});
