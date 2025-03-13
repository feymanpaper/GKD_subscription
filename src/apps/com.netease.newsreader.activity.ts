import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.newsreader.activity',
  name: '网易新闻',
  groups: [
    {
      key: 0,
      name: 'in-app|7p-x8FORbxUHezHr9IjWy2iATxjpibBFkotwKyyjqzI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ImageView[id="com.netease.newsreader.activity:id/dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|c8wCDgQsxulRqAjAyii-r97tTC-cUL1Bzf5lkX5e2ak=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ImageView[id="com.netease.newsreader.activity:id/dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|F-ZQvnza_6NclLxI4Yi9xfBEsoA02ExmOn3oKsKdrhc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/webview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/root"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/webview_layout"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/webview_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/web_container"] > android.webkit.WebView > android.webkit.WebView[text="任务中心"] > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|Ir4rpf5siYJ1hLceWIt9lwx5KN50a9xZkNjsMniLsFE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/container"] > android.view.ViewGroup[id="com.netease.newsreader.activity:id/coordinator"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/design_bottom_sheet"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/full_login_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[id="com.netease.newsreader.activity:id/full_login_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|MGfNEUVOaQzrHX7WtFRwr76qZbs3qk8v9RAQVv4z9Ug=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/container"] > android.widget.RelativeLayout > android.widget.Button[id="com.netease.newsreader.activity:id/positive_btn"][text="同意并继续"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|QCXqi7BEOeQOjvZIDTTgHqXwGlgsiCfclsWvN1FzOP4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/webview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/root"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/webview_layout"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/webview_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/web_container"] > android.webkit.WebView > android.webkit.WebView[text="金币商城"] > android.view.View[id="root"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|R2x8F9xmcix1GSEI4vtgQuT8xNu4iiNQ_Z3jcYIqwcw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/root_layout"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/real_content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.FrameLayout > androidx.viewpager.widget.ViewPager[id="com.netease.newsreader.activity:id/pager"] > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/tabs"] > android.widget.HorizontalScrollView[id="com.netease.newsreader.activity:id/real_tabs"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout[desc="娱乐栏目，按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|rDXSQVL7sPRuUs2jhLrptuwloT-pfOPLM_lvVhM0s0I=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/privacy_dialog_step1"] > android.widget.RelativeLayout > android.widget.Button[id="com.netease.newsreader.activity:id/positive_btn"][text="同意并继续"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|SWydODmHG5PkLclmGbvyyUcsuN_RIPzek-5EeTpP0SA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/dialog_root"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/dialog_container"] > android.widget.RelativeLayout > android.widget.Button[id="com.netease.newsreader.activity:id/ok"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|t2q9Jw1hJ7y9jZoCDjJLqk-BaEefWki1wVl8zVlvdII=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.netease.newsreader.activity:id/vip_coupon_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|TxOCbYKydL3dqDc0JEMUckOhLdK0XIOY_o3Yv3MEG8c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/dialog_container"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/ureward_corner_dialog_footer"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/ureward_corner_dialog_positive_btn_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'system|UvmVj6chYmV_cUKYUomjLU8IVpGaErC-iyh0fRj_3Pk=.png',
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
      key: 12,
      name: 'in-app|xYTs3gNqUZChVpq7Ywj4wt3QsCdM3GIzWPwThcgL75s=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/dialog_container"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_dialog_footer"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.netease.newsreader.activity:id/nr_dialog_footer_content"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.netease.newsreader.activity:id/nr_dialog_footer"] > android.widget.Button[id="com.netease.newsreader.activity:id/nr_dialog_footer_negative"][text="稍后再说"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|y3J1uWQPHCgJlH7ImvgSGns4lWLpH7_fqX_U-x0VKa8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/container"] > android.view.ViewGroup[id="com.netease.newsreader.activity:id/coordinator"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/design_bottom_sheet"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/full_login_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[id="com.netease.newsreader.activity:id/full_login_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|yiLAobwOyZnAYVzv4umJTWDBZHvkFrtLD1nzHELSnNs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/webview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/root"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/webview_layout"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/webview_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/web_container"] > android.webkit.WebView > android.webkit.WebView[text="影响力"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|YUVg8wdZOG-Kq_-SxEK1hpwkkQTpGm0ZQHCRrqFtRDw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/container"] > android.view.ViewGroup[id="com.netease.newsreader.activity:id/coordinator"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/design_bottom_sheet"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/list_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/news_vip_user_titlebar"] > android.widget.ImageView[id="com.netease.newsreader.activity:id/news_vip_user_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
