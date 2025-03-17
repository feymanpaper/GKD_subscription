import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 0,
      name: 'in-app|6tfad75Qy7Ok71wlrnoWs1OoNWgvS8UCi2GIHsUmfpc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.browser.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/flWebviewContainer"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlRoot"] > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/webViewLayout"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlWebContainer"] > android.webkit.WebView > android.webkit.WebView[text="芒果好玩在线抓娃娃"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TabWidget > android.view.View[text="毛绒公仔"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|7HhHQYr_sMk0lpR_AFAZSyvTNloBcoTFSxQS3XDi4eY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.view.View[id="com.hunantv.imgo.activity:id/btnClose"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
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
      key: 3,
      name: 'in-app|HhJAU6DrkHRUL15sdFN9sulvfw5uvdEDIr5XJMnicMA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.browser.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/flWebviewContainer"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlRoot"] > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/webViewLayout"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlWebContainer"] > android.webkit.WebView > android.webkit.WebView[text="开通会员"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|IoKQgoSOHeoOg64g_205XBweGbdPLC87d4EH4wlQttk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/bottom_layout"] > android.widget.Button[id="com.hunantv.imgo.activity:id/btnIknow"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|jZmzDj9-8JQkqR48ScNebtdI9VlLk6qJy4T9hqLuRXU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.ad.MgtvLuckActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/container"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="芒果福袋"] > android.view.View > android.view.View[id="app"] > android.view.View[clickable=true] > android.view.View[id="main"] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|L4C6OG-0lDxTPNC5gfQNf36b7CXyVMCObPnMnwxwvP8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.browser.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/flWebviewContainer"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlRoot"] > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/webViewLayout"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlWebContainer"] > android.webkit.WebView > android.webkit.WebView[text="芒果好玩在线抓娃娃"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|tk2A8tHN4Prro42iXs8SIrRob1lb03wguYGnAbBVG-Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.browser.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/flWebviewContainer"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlRoot"] > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/webViewLayout"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlWebContainer"] > android.webkit.WebView > android.webkit.WebView[text="开通会员"] > android.view.View > android.widget.Image[text="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
