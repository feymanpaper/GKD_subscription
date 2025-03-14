import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: 'in-app|-XAZV9ugTZOWW2G-iutnj5ylqGvGnwTtleLK0Fr6Bho=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.browser.WeiboBrowser',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sina.weibo:id/ly_weibo_browser"] > android.widget.FrameLayout[id="com.sina.weibo:id/webview_container"] > android.webkit.WebView > android.webkit.WebView[text="用户任务中心"] > android.view.View[id="app"] > android.view.View[id="mainEl"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|1q7o7jXKcyuMYGIUwUm_efXb5A2ZipDWpANr9WshE-c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > androidx.viewpager.widget.ViewPager[id="com.sina.weibo:id/main_tab_view_pager"] > android.widget.TabHost[id="com.sina.weibo:id/tabhost_right"] > android.widget.FrameLayout[id="com.sina.weibo:id/floating_window"] > android.widget.RelativeLayout[id="com.sina.weibo:id/root_rl"][clickable=true] > android.widget.ImageView[id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|BBdUvvhDkTQwYWTUfRvEGbSNi9ItxVtAfA5OJE9Dp4E=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.MainTabActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > androidx.viewpager.widget.ViewPager[id="com.sina.weibo:id/main_tab_view_pager"] > android.widget.TabHost[id="com.sina.weibo:id/tabhost_right"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sina.weibo:id/main_radio"] > android.widget.FrameLayout > android.widget.FrameLayout[desc="发现"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|BcEOmkxijOwsHFePjsnzNMRNqoZRt0jtW-5JymWTFqM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            '.extlibui.appwidget.business.install.WidgetInstallDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sina.weibo:id/container"] > android.widget.RelativeLayout[id="com.sina.weibo:id/rootLayout"] > android.view.ViewGroup[id="com.sina.weibo:id/refreshLayout"] > android.view.ViewGroup[id="com.sina.weibo:id/coordinatorLayout"] > androidx.viewpager.widget.ViewPager[id="com.sina.weibo:id/viewpager"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|IczVp-Ble9C-ltVZ9wyu-uQ40HMnRUa3i_dIaI_oZSU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.browser.WeiboBrowser',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sina.weibo:id/ly_weibo_browser"] > android.widget.FrameLayout[id="com.sina.weibo:id/webview_container"] > android.webkit.WebView > android.webkit.WebView[text="用户任务中心"] > android.view.View[id="app"] > android.view.View[id="mainEl"] > android.view.View[id="layer"] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|IkInqinIX9KAqsd5EOJ2zuOKL2_I-P4kCf4M16GHDyc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.feed.MPDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.view.ViewGroup[id="com.sina.weibo:id/ptr_container"] > android.widget.FrameLayout[id="com.sina.weibo:id/container"] > android.webkit.WebView > android.webkit.WebView[text="Wbox"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|Jy_erbpebKaC11q-SXFcYsh68vT5vmZ0S7fR48J7pWg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.browser.WeiboBrowser',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sina.weibo:id/ly_weibo_browser"] > android.widget.FrameLayout[id="com.sina.weibo:id/webview_container"] > android.webkit.WebView > android.webkit.WebView[text="微博积分乐园"] > android.view.View > android.view.View[id="root"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="本次运行允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|S1XhJ6FR_cBJj7DhqJ-nTSlWEbfYPT4joeVKFGuq1Ss=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.feed.MPDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.view.ViewGroup[id="com.sina.weibo:id/ptr_container"] > android.widget.FrameLayout[id="com.sina.weibo:id/container"] > android.webkit.WebView > android.webkit.WebView[text="Wbox"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
