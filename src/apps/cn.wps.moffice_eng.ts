import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 0,
      name: 'in-app|oaTRgaIdhpWaLAP7KaKAWGXLBvmymHnYbdLD3C9hKH4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/custom_dialog_cardcontent"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_bottom_layout"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_button_positive_layout"] > android.widget.Button[id="cn.wps.moffice_eng:id/dialog_button_positive"][text="去授权"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|I7iiQIAX8z3ce0-e7nrYQHCMoA_ZKwoc3ZP1zHkpM7c=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'cn.wps.moffice.main.push.explore.PushTipsWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="cn.wps.moffice_eng:id/phone_title_view_root"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/content_lay"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/push_tips_ptr_super_webview"] > android.view.ViewGroup > android.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|O9P5vPLSSAjYpSaC-w65MmdV25T53IP5vINv3gGk4Yg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.ImageView[id="cn.wps.moffice.plugin.cloudPage:id/cloud_popup_close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|WdZSyu4w-zSgiA-CnZrMtiTEJF4I1pSM1eTGp42eMvQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > androidx.drawerlayout.widget.DrawerLayout[id="cn.wps.moffice_eng:id/phone_home_root"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/phone_home_root_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/push_tips_ptr_super_webview"] > android.view.ViewGroup > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|hfwBFUEYYzZYcFUi__ISN7Kgev7QtsTSaCGZlYlTRjM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'cn.wps.moffice.main.push.explore.PushTipsWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="cn.wps.moffice_eng:id/phone_title_view_root"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/content_lay"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/push_tips_ptr_super_webview"] > android.view.ViewGroup > android.webkit.WebView > android.webkit.WebView[text="中国移动 × WPS首月1元"] > android.view.View[id="app"] > android.view.View[id="page-content"] > android.view.View[clickable=true] > android.widget.Button[text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|KNnQedDC6UoojKHXC_3haRHCUVk_EbApZOfbJzFbPck=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/custom_dialog_cardcontent"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_bottom_layout"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/inner_bottom_layout"] > android.widget.Button[id="cn.wps.moffice_eng:id/dialog_button_positive"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|bZTJ8eev5ifuinpWM_TAMLxT3dPpV7VpX_s0MHpJ72g=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="cn.wps.moffice_eng:id/phone_title_view_root"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/view_title_lay"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/titlebar"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/phone_titlebar"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/abs_title_bar"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/normal_mode_title"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/titlebar_backbtn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|ryC7pxNQqgCU9Q51F77x2AVNPsKzUMt-M7erf2ptidE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/custom_dialog_cardcontent"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/customPanel"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/custom"] > android.view.ViewGroup > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/layout_close"] > android.widget.ImageView[id="cn.wps.moffice_eng:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|R3aAeJo3Eu72GaP7iDJZLteG4u36GkBcTpVNg2AyEqc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/custom_dialog_cardcontent"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_bottom_layout"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/inner_bottom_layout"] > android.widget.Button[id="cn.wps.moffice_eng:id/dialog_button_negative"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|RbCDrhaeznWX7bZIx187Qh1vqlytN2zwOmxMq1Wy8bg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/detail_layout"] > android.widget.ImageView[id="cn.wps.moffice_eng:id/close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|sru9NZGHNb9VrCJlYuBNsYbUlU0ZezJRQvj9V7qyZyc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.RelativeLayout[id="cn.wps.moffice_eng:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|NAciHk3y60D7h2fYs4oBytkpgIqZCAkXIvxcC4iVQUI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_background"] > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_cardview"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/custom_dialog_cardcontent"] > android.widget.LinearLayout[id="cn.wps.moffice_eng:id/dialog_bottom_layout"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="cn.wps.moffice_eng:id/dialog_button_positive_layout"] > android.widget.Button[id="cn.wps.moffice_eng:id/dialog_button_positive"][text="再次许可授权"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
