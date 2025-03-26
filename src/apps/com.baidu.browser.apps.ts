import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.browser.apps',
  name: '百度浏览器',
  groups: [
    {
      key: 0,
      name: 'in-app|LSSd2L_c4uXjO1kBQZvKfJdVMChi6e1ZfzJNJm541As=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="android:id/tabcontent"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.baidu.zeus.webviewpager2.ViewPager > android.widget.FrameLayout > com.baidu.webkit.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|7y0S_Y6nb2nCqgqDLkYVsAL9WWcsydjSk0pvOn3TVKU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.ImageView[id="com.baidu.browser.apps:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > com.baidu.searchbox.widget.SlidingPaneLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.baidu.zeus.webviewpager2.ViewPager > android.widget.FrameLayout > com.baidu.webkit.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|HVBbl_OZIQdDGfN2B-bPyfhE6S6phRos0bjfByJsLa8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.baidu.searchbox.lightbrowser.ImmerseBrowserActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|Qphpi8ei2SxBKvs9EAdPc63MYZAkMAn5HHOALj2MjV8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.view.ViewGroup > android.view.ViewGroup[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[id="com.baidu.browser.apps:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|WQJaEq_CpXr2LHAyiyE0USg4pa2UqbNDFYL5Cw-Y5sY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.voicesearch.voicesearchpluginlite:id/fragment_container"] > android.widget.RelativeLayout[id="com.baidu.voicesearch.voicesearchpluginlite:id/upscreen_top_mask"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.voicesearch.voicesearchpluginlite:id/upscreen_top_mask"] > android.widget.RelativeLayout[id="com.baidu.voicesearch.voicesearchpluginlite:id/upscreen_content_view"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.voicesearch.voicesearchpluginlite:id/upscreen_rl_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|Wjbf2R6bmmSywGO4ysXHnX-ZQfdlk3UmyZAcZfUBgY0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.ImageView[id="com.baidu.browser.apps:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|FxeqzIwk8Ab31n6rCyYMSTbfG1s-4BKJLqJ8x82Ge9I=.png',
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
            'android.widget.FrameLayout > android.widget.RelativeLayout[id="com.baidu.browser.apps:id/obfuscated"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.LinearLayout[id="com.baidu.browser.apps:id/obfuscated"][clickable=true] > android.widget.LinearLayout[id="com.baidu.browser.apps:id/obfuscated"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.browser.apps:id/obfuscated"] > android.widget.ImageView[id="com.baidu.browser.apps:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_onetime_button"][text="本次运行允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
