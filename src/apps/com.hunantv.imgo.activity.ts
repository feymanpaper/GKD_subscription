import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 0,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|8gQviNYmc-9UgYmWWKZ9-j7EU0Pj9ohmq8cQk-spbN4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mgtv.ui.ad.MgtvLuckActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/llWebView"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/container"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="芒果福袋"] > android.view.View > android.view.View[id="app"] > android.view.View[clickable=true] > android.view.View[id="main"] > android.view.View > android.view.View > android.widget.ListView > android.view.View > android.view.View > android.view.View[clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|DYUTIyAu1gQPditfVPHPKO2NyJs_EYr6yEEtiGLo-bA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.hunantv.imgo.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.hunantv.imgo.activity:id/flWebviewContainer"] > android.widget.RelativeLayout[id="com.hunantv.imgo.activity:id/rlRoot"] > android.view.View[id="com.hunantv.imgo.activity:id/vPlaceHolder"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|jZmzDj9-8JQkqR48ScNebtdI9VlLk6qJy4T9hqLuRXU=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
  ],
});
