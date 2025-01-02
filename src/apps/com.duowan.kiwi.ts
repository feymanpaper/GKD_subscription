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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/hot_live_rootview"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"][clickable=true] > android.view.ViewGroup[clickable=true] > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"][clickable=true] > android.view.ViewGroup[clickable=true] > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_root_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/huya_smart_refresh"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_view"][clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/live_line_container"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/live_content"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/huyaui_list_card_top_container"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/huyaui_list_card_badge_bottom_right"][clickable=true] > android.widget.TextView[id="com.duowan.kiwi:id/huyaui_label_text"][text="4.6万"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_frame_layout"][clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/dynamic_container_root"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.SeekBar[desc="Bottom Sheet"][clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/recharge_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.TextView[id="com.duowan.kiwi:id/exchange"][text="立即充值 10元"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"][clickable=true] > android.widget.TextView[text="预约成功"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/statusIcons"][clickable=true] > android.widget.FrameLayout[desc="WLAN 信号强度为三格。"][id="com.android.systemui:id/wifi_combo"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/wifi_group"][clickable=true] > android.widget.TextView[id="com.android.systemui:id/wifi_standard"][text="6"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"][clickable=true] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"][clickable=true] > android.widget.FrameLayout[id="android:id/custom"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="com.lbe.security.miui:id/permission_group_title"][text="是否允许“虎牙直播”拍摄照片或录制视频"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/retry_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[text="只看女生"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_dialog_btn"][clickable=true] > android.widget.TextView[id="com.duowan.kiwi:id/hyui_dialog_button_positive"][text="允许"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ad_aplash"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ad_container_layout"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/ams_splash_ad_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.TextView[text="跳过"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/root_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/match_moment_tab_list_refresh_layout"][clickable=true] > android.view.ViewGroup[clickable=true] > androidx.viewpager.widget.ViewPager[id="com.duowan.kiwi:id/view_pager2"][clickable=true] > androidx.recyclerview.widget.RecyclerView[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/retry_view"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"][clickable=true] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
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
          matches: 'android.widget.FrameLayout[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[id="com.duowan.kiwi:id/btn_sure"][text="确认"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"][clickable=true] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/hy_web_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_web_view"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="任务中心"][clickable=true] > android.view.View[clickable=true] > android.view.View[id="huya-react-app"][clickable=true] > android.view.View[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.HorizontalScrollView[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[text="好游新发现 近期人气好游推荐"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"][clickable=true] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"][clickable=true] > android.widget.ImageView[id="com.duowan.kiwi:id/hyui_dialog_iv_close_inside"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_frame_layout"][clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/dynamic_container_root"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/dynamic_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"][clickable=true] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/fl_immerse_page_root_container"][clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.duowan.kiwi:id/recycler_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/fl_live_fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/channel_page_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/channel_page_other_panel_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/draggable_layout"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/interaction_panel_area_container"][clickable=true] > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/channelpage_interaction_pager"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/react_interaction_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/mini_app_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/gestureContainer"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/extRootView"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/miniapp_content_container"][clickable=true] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/hy_web_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_web_view"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="虎牙小程序"][clickable=true] > android.view.View[id="root"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"][clickable=true] > android.widget.FrameLayout[id="android:id/custom"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="com.lbe.security.miui:id/permission_group_title"][text="是否允许“虎牙直播”访问设备上的照片、视频、音频"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"][clickable=true] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[text="0.0%"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"][clickable=true] > android.widget.LinearLayout[desc="正在充电，已完成 100%。"][id="com.android.systemui:id/battery"][clickable=true] > android.widget.ImageView[id="com.android.systemui:id/battery_charge_out_image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
