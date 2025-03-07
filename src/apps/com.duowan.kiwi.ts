import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 0,
      name: 'in-app|XUpKUDpVMGBn5m5wMEda5Xz1JLcAekttdrW2pqvcC_4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|djO5hk-CPHoWHwNf8eOo0Zuv6LiLnyPYiEjT-wrkbCc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/hot_live_rootview"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"] > android.view.ViewGroup > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"] > android.view.ViewGroup > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_root_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.duowan.kiwi:id/huya_smart_refresh"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_view"] > androidx.recyclerview.widget.RecyclerView[id="com.duowan.kiwi:id/content_view"] > android.widget.LinearLayout[id="com.duowan.kiwi:id/live_line_container"] > android.view.ViewGroup[id="com.duowan.kiwi:id/live_content"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/huyaui_list_card_top_container"] > android.view.ViewGroup[id="com.duowan.kiwi:id/huyaui_list_card_badge_bottom_right"] > android.widget.TextView[id="com.duowan.kiwi:id/huyaui_label_text"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|0nZidzWIPoz1aL6bPSU7mEnmdcXIsn3jQDvOod2Xx2E=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.Homepage',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_frame_layout"] > android.widget.LinearLayout[id="com.duowan.kiwi:id/dynamic_container_root"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.SeekBar[desc="Bottom Sheet"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|3inbG_73Jt8uryAGRSh-oZwG1BgqrNLUsiOEEoMp5dg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/recharge_container"] > android.widget.RelativeLayout > android.widget.TextView[id="com.duowan.kiwi:id/exchange"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|lTiyNxeBNSZGboHLS1JpLPL9Rb1Jnl12AIu94Cutq3M=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.webview.KiwiOakWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.TextView[text="预约成功"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|4YHJ2d24mr8xKz6OimF-7tgpaBh0abR0hzXdRKsWdu0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"] > android.widget.LinearLayout[id="com.android.systemui:id/statusIcons"] > android.widget.FrameLayout[id="com.android.systemui:id/wifi_combo"] > android.widget.FrameLayout[id="com.android.systemui:id/wifi_group"] > android.widget.TextView[id="com.android.systemui:id/wifi_standard"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|ULkb7xTugCW1dKUC5pn7cvKVkHqriLHYOy3wpEZu8s4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'system|db4qvabyqEFyKSRUXtmBU-XhExrzOALstGEkqBoPOKE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.TextView[id="com.lbe.security.miui:id/permission_group_title"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|KwcIuAE9dvT3NqHZ4HvUeRjVyx1uxk8ehtXlnXmzvtk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.Homepage',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/retry_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.widget.TextView[text="只看女生"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|Ame3Kp9yIN8he_mCARd8zm-cW1b-0ZbiJoe9wG_WHuU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_dialog_btn"] > android.widget.TextView[id="com.duowan.kiwi:id/hyui_dialog_button_positive"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|kw7o_RYqfQogqmm4CNi_BMe0iOjJCqc2D7RCUjW9TNg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.Homepage',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ad_aplash"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ad_container_layout"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ams_splash_ad_container"] > android.widget.FrameLayout > android.widget.TextView[text="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'system|HCtiiaroSkK4k5rfPbpuB3PBNDimQ7dUvF7DbUtn8QI=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.duowan.kiwi:id/root_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.duowan.kiwi:id/match_moment_tab_list_refresh_layout"] > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.duowan.kiwi:id/view_pager2"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/retry_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|2bJLJM9jbZKezju3pe0Ma0qejeh-7Y9lpS6JCoImRlM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.scan.impl.CaptureHwScanActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|iFt6mjQYrHB83p3Fivv5kQZur5BnFo76rfDck9F1oI8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup > android.widget.TextView[id="com.duowan.kiwi:id/btn_sure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|DtQ3KrQZnSsaGZhJlFN89HzNhOc6KYTqqUGJsW9rs7E=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.webview.KiwiOakWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/hy_web_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_web_view"] > android.webkit.WebView > android.webkit.WebView[text="任务中心"] > android.view.View > android.view.View[id="huya-react-app"] > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|QJ4g-vcaf7QOl07TIWjy_RpKtuDSw3Ki1yQOlYI1FgY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|TAQjMQF5YApGGCyYLbnu0-xjEiD-mszdAk5BlsKx7S8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.HorizontalScrollView > android.view.ViewGroup > android.view.ViewGroup > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.widget.TextView[text="好游新发现 近期人气好游推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|1lQKw8Ah_XFMAAZAZMv4Z6FEhpqRedeKGZBiMWmpqT4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|PBndIqlVVsvtwtskWHGtkKyJ3SuM1OrGGp4Vd2AyjG4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.widget.ImageView[id="com.duowan.kiwi:id/hyui_dialog_iv_close_inside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|n9upHYRpHkE6EW6MSxKN5oFf9zEwUvA3NRzSZi6ntuY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.Homepage',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_frame_layout"] > android.widget.LinearLayout[id="com.duowan.kiwi:id/dynamic_container_root"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
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
      key: 23,
      name: 'in-app|RCEb7q4rqg2iztzeQo7mUkEGlb92BpKILOQS8B9E7Qg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.liveroom.ChannelPage',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/fl_immerse_page_root_container"] > androidx.recyclerview.widget.RecyclerView[id="com.duowan.kiwi:id/recycler_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/fl_live_fragment_container"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/channel_page_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/channel_page_other_panel_container"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_layout"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/interaction_panel_area_container"] > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/channelpage_interaction_pager"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/react_interaction_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/mini_app_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duowan.kiwi:id/gestureContainer"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/extRootView"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/miniapp_content_container"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/hy_web_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_web_view"] > android.webkit.WebView > android.webkit.WebView[text="虎牙小程序"] > android.view.View[id="root"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'system|k3e9TgGhEOqdOVLlfydUCvfc1Qclnos0LoNzBUocG8A=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.TextView[id="com.lbe.security.miui:id/permission_group_title"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|5dA4tBd0Y0-3JFaBj4QKcThR-ICUAgrqBbtep5xj8ZQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.widget.TextView[text="0.0%"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|4qqAlf3JXyx0wIQlDZ7qKmvN5UB_kJ7pAPen1LxaHTs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"] > android.widget.LinearLayout[id="com.android.systemui:id/battery"] > android.widget.ImageView[id="com.android.systemui:id/battery_charge_out_image"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
