import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wuba',
  name: '58同城',
  groups: [
    {
      key: 0,
      name: 'system|DkVate9IugWpT7BKjAHUWrjMqXQW6CXlx7MqPQytXa4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|EgExot4SxWkY-J-P1ibPIo3JSwgo2mP6WAaQM6qWPTg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.CommonWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/fragment_container"] > android.widget.LinearLayout[id="com.wuba:id/all_content_layout"] > android.widget.RelativeLayout[id="com.wuba:id/webview_container"] > android.widget.RelativeLayout[id="com.wuba:id/titlebar_content"] > android.view.ViewGroup[id="com.wuba:id/content_webview"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="简历发布"] > android.view.View[id="app"] > android.view.View[clickable=true] > android.view.View > android.widget.TextView[text="坚持退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|mVTFi4rDDBrHFQ4Kfui2Kp6PAiSmtYLH6_OCK4q1ZmA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.wuba:id/close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|PDyZTe-pfbR6EI7zu1w7SdtlapSqBEUMzfIgF-DwdyM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.wuba:id/sys_dalg_button"] > android.widget.LinearLayout > android.widget.Button[id="com.wuba:id/sys_dalg_button_cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|QPBpTwXUKPyKy4hApzpivyNqFrgXhcJ7rGVxlzUBLP8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.CommonWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/fragment_container"] > android.widget.LinearLayout[id="com.wuba:id/all_content_layout"] > android.widget.RelativeLayout[id="com.wuba:id/webview_container"] > android.widget.RelativeLayout[id="com.wuba:id/titlebar_content"] > android.view.ViewGroup[id="com.wuba:id/content_webview"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="事事可成"] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|Sh9NwpsmhHhNVtic91Rz5qA7dp0N8qcFRD-ZLkYRESI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|tBpNMonvYilxVKYH665IuMEH6ba23Bfz3B-Yj6f0g0M=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.CommonWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/fragment_container"] > android.widget.LinearLayout[id="com.wuba:id/all_content_layout"] > android.widget.RelativeLayout[id="com.wuba:id/webview_container"] > android.widget.RelativeLayout[id="com.wuba:id/titlebar_content"] > android.view.ViewGroup[id="com.wuba:id/content_webview"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="简历发布"] > android.view.View[id="app"] > android.view.View[clickable=true] > android.view.View > android.widget.TextView[text="坚持退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|txmsi29ji4kx84Hb9hSA8z_7qQAvNNa6Nol2olOJoOM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/changecitybg"] > android.widget.RelativeLayout[id="com.wuba:id/dialog_layout"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.wuba:id/buttonPanel"] > android.widget.TextView[id="com.wuba:id/city_change_cancel"][text="暂不切换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|UH7Lfe1lNkGEXWOCshQC9ptsWe59mBKCjkzl9tMKv8k=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.wuba:id/close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|uus6eJAbuQR_xUB2ojQvVSGyOGg_1_N9PQ0qn4vD7O4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.CommonWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/fragment_container"] > android.widget.LinearLayout[id="com.wuba:id/all_content_layout"] > android.widget.RelativeLayout[id="com.wuba:id/webview_container"] > android.widget.RelativeLayout[id="com.wuba:id/titlebar_content"] > android.view.ViewGroup[id="com.wuba:id/content_webview"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="事事可成"] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|VV6WUYEaOQD8htMr-XkjjiCYiihLPq-Wmr35ieW40Pk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.CommonWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.wuba:id/fragment_container"] > android.widget.LinearLayout[id="com.wuba:id/all_content_layout"] > android.widget.RelativeLayout[id="com.wuba:id/webview_container"] > android.widget.RelativeLayout[id="com.wuba:id/titlebar_content"] > android.view.ViewGroup[id="com.wuba:id/content_webview"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="积分中心"] > android.view.View > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
