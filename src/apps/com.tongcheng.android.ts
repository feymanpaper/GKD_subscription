import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同城旅行',
  groups: [
    {
      key: 0,
      name: 'in-app|1LmemqhU6GcMSFW1v_3xggaH2pYIuwUKPy9tmQsGWFA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView > android.view.View[id="app"] > android.widget.ToggleButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|5rrVBUkqiasPoiPam3lwiTbxZCxtnZQgT5Fb4SYHE_I=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="客服中心"] > android.view.View[clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|aUsX3cdlqZJG55_TTPK5Po3WjYOJhay0RElH_5ccUq8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="日本·樱花季"] > android.view.View > android.view.View[id="app"] > android.view.View[id="app"] > android.view.View > android.view.View[id="PageControlList"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="仅使用期间允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|CfzB-pcjNqq8jzHDCNeitdAF7uGlL84AkwozVjmDYFQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="智能客服"] > android.view.View[clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|clpPRgNPfblal2ktw4aLFbLokrHw9u0XfZ17yZ9ic1Q=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="客服中心"] > android.view.View[clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|EvPNh6X5-3gFDlRfsigGt1YX83duSqBUFrOEgBjqD-Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="客服中心"] > android.view.View[clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[text="六个月"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|GqqSiEfH6D5cxro99ieK7Lbx36oXmoq5f84NKi0w_zQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.elong.android.hotelcontainer.base.flutter.HotelFlutterBaseActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[desc="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|LXLd-KL-xzB0U7d11MGcmgl38VgIw1_eaX7FntaLO_M=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            '.module.ordercombination.lab.OrderCenterFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tongcheng.android:id/drag_root_view"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.tongcheng.android:id/dialog_content"] > androidx.appcompat.widget.LinearLayoutCompat > android.widget.ScrollView > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.GridView[id="com.tongcheng.android:id/gv_types"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|NgdwmGzkQgPbZoMuk21TddD-JvzMBepo3_46MCzfUSA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="智能客服"] > android.view.View[clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|NO-Dh4zpmWO6CuXaL7p2IJkzDtkes-yeMuv1F6wFgKs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.elong.android.hotelcontainer.base.flutter.HotelFlutterAnimateActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tongcheng.android:id/view_dialog_privacy_container"] > android.widget.LinearLayout[id="com.tongcheng.android:id/view_dialog_privacy_button_view"] > android.widget.TextView[text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|PnpWu9E8cMcITgZ78JdD-lAVZ00oAfDAJLB1zfP4qgw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="客服中心"] > android.view.View[clickable=true] > android.app.Dialog > android.view.View > android.widget.Button[text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|V3uruWTbXup5w7Q8EABGwbgek2QmuUPFRklxcsQ1KBs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.webapp.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tongcheng.android:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tongcheng.android:id/rl_container"] > android.widget.RelativeLayout[id="com.tongcheng.android:id/web_container"] > android.widget.FrameLayout[id="com.tongcheng.android:id/web"] > android.webkit.WebView > android.webkit.WebView[text="用户反馈"] > android.view.View > android.view.View[id="app"] > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="提交反馈"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|YelaUpSJ__J9DKJCzYRjl6SFjw0afs-mUKvsZJxlSIg=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.tongcheng.android:id/dialog_container"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.tongcheng.android:id/btn_dialog_left"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
