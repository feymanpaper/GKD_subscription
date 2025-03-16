import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sohu.newsclient',
  name: '搜狐新闻',
  groups: [
    {
      key: 0,
      name: 'in-app|48LvYwUOGx1u11ZZRULjmPqGbFDb-SORae3ofSQ7YF0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/dialog_publish_root"] > android.widget.LinearLayout[id="com.sohu.newsclient:id/top_area_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/top_bar_view"] > android.widget.ImageView[id="com.sohu.newsclient:id/button_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|760GtgD04b0yLG-c9f2Z-TPUedjFX7isc_y5UM0hNWQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.sohu.newsclient:id/forward_layout"] > android.widget.LinearLayout[id="com.sohu.newsclient:id/top_area_layout"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.sohu.newsclient:id/button_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|b1eVRGmjKqtOj_KhQqCbK2jFgfJf_8QI85InEHkiOCw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.common.activity.SohuWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sohu.newsclient:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/webview_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/layoutWebView"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/wrap_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/content_layout"] > android.widget.FrameLayout[id="com.sohu.newsclient:id/webViewComponent"] > android.webkit.WebView > android.webkit.WebView[text="狐小新"] > android.view.View[id="root"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="×"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|bfmfpUOj8TaJUFVsz37BbqohkbAtqK9CFYPZjvcKREo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_foreground_only_button"][text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|MrTKx0IHo4l6HoXjDmSyqQsFFH_B4hd6V6xCUihco1M=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.sohu.newsclient:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.sohu.newsclient:id/ll_dialog_layout"] > android.widget.LinearLayout[id="com.sohu.newsclient:id/button_layout"] > android.widget.TextView[id="com.sohu.newsclient:id/tv_negative"][text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|swKoh5OrSkkvCQJXbmZS7cytPLdBk-QwlmH7IAFokKU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/dialog_publish_root"] > android.widget.LinearLayout[id="com.sohu.newsclient:id/top_area_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/top_bar_view"] > android.widget.ImageView[id="com.sohu.newsclient:id/button_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|Ua6fgkih5PxzYzW-e37-4NaKj8Xg-4vd8FlHfdMHC6Q=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.view.View[id="com.lbe.security.miui:id/dialog_dim_bg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|YTVcf7L_CCYubLn4yEdXmfNjaI6nw8HKj6GXc99hOFA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.common.activity.SohuWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sohu.newsclient:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/webview_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/layoutWebView"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/wrap_layout"] > android.widget.RelativeLayout[id="com.sohu.newsclient:id/content_layout"] > android.widget.FrameLayout[id="com.sohu.newsclient:id/webViewComponent"] > android.webkit.WebView > android.webkit.WebView[text="狐小新"] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|yweW5PY9Hs9Z_J5ghhWzp_tm5CdYOmpuYsvBQmcZ1LQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sohu.newsclient:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[id="com.sohu.newsclient:id/news_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
