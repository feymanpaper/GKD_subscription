import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 0,
      name: 'in-app|XUpKUDpVMGBn5m5wMEda5Xz1JLcAekttdrW2pqvcC_4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="新游首页弹窗关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|djO5hk-CPHoWHwNf8eOo0Zuv6LiLnyPYiEjT-wrkbCc=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/test_content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/home_page"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/root_view"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/pages_container"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/hot_live_rootview"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"] > android.view.ViewGroup > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_live_root_view"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/container_view"] > android.view.ViewGroup > com.huya.huyaui.widget.HuyaViewPager[id="com.duowan.kiwi:id/view_pager"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/list_root_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.duowan.kiwi:id/huya_smart_refresh"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_view"] > androidx.recyclerview.widget.RecyclerView[id="com.duowan.kiwi:id/content_view"] > android.widget.LinearLayout[id="com.duowan.kiwi:id/live_line_container"] > android.view.ViewGroup[id="com.duowan.kiwi:id/live_content"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|0nZidzWIPoz1aL6bPSU7mEnmdcXIsn3jQDvOod2Xx2E=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
      key: 3,
      name: 'in-app|lTiyNxeBNSZGboHLS1JpLPL9Rb1Jnl12AIu94Cutq3M=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|4YHJ2d24mr8xKz6OimF-7tgpaBh0abR0hzXdRKsWdu0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_dialog_btn"] > android.widget.TextView[id="com.duowan.kiwi:id/hyui_dialog_button_positive"][text="打开应用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|ULkb7xTugCW1dKUC5pn7cvKVkHqriLHYOy3wpEZu8s4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|Ame3Kp9yIN8he_mCARd8zm-cW1b-0ZbiJoe9wG_WHuU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.widget.ImageView[id="com.duowan.kiwi:id/hyui_dialog_iv_close_inside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|kw7o_RYqfQogqmm4CNi_BMe0iOjJCqc2D7RCUjW9TNg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
      key: 8,
      name: 'in-app|2bJLJM9jbZKezju3pe0Ma0qejeh-7Y9lpS6JCoImRlM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/qq_wechat_content_area"] > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.widget.ImageView[id="com.duowan.kiwi:id/hyui_dialog_iv_close_inside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|DtQ3KrQZnSsaGZhJlFN89HzNhOc6KYTqqUGJsW9rs7E=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.webview.KiwiOakWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.RelativeLayout[id="com.duowan.kiwi:id/hy_web_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/container_web_view"] > android.webkit.WebView > android.webkit.WebView[text="任务中心"] > android.view.View > android.view.View[id="huya-react-app"] > android.view.View > android.view.View > android.view.View > android.widget.TabWidget > android.view.View[text="合作任务"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|QJ4g-vcaf7QOl07TIWjy_RpKtuDSw3Ki1yQOlYI1FgY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|TAQjMQF5YApGGCyYLbnu0-xjEiD-mszdAk5BlsKx7S8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="新游首页弹窗关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|1lQKw8Ah_XFMAAZAZMv4Z6FEhpqRedeKGZBiMWmpqT4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/content_view"][clickable=true] > android.widget.FrameLayout > android.widget.ImageView[id="com.duowan.kiwi:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|PBndIqlVVsvtwtskWHGtkKyJ3SuM1OrGGp4Vd2AyjG4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_root"] > android.view.ViewGroup[id="com.duowan.kiwi:id/hyui_dialog_content_container"] > android.widget.ImageView[id="com.duowan.kiwi:id/hyui_dialog_iv_close_inside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|n9upHYRpHkE6EW6MSxKN5oFf9zEwUvA3NRzSZi6ntuY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
      key: 16,
      name: 'in-app|5dA4tBd0Y0-3JFaBj4QKcThR-ICUAgrqBbtep5xj8ZQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.hybrid.activity.KiwiCrossPlatformActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duowan.kiwi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_root"] > android.widget.FrameLayout[id="com.duowan.kiwi:id/kiwi_cross_platform_fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
