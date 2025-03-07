import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 0,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|IDXhw463e6OSopkQ-rE9H-2C9eb5T3SlIBBjjd1SWCA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_coordinator_layout"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_vp"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.babycloud.hanju:id/refresh_layout"] > androidx.recyclerview.widget.RecyclerView[id="com.babycloud.hanju:id/discuss_rv"] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/topic_ll"] > android.widget.RelativeLayout[id="com.babycloud.hanju:id/pics_rl"] > androidx.recyclerview.widget.RecyclerView[id="com.babycloud.hanju:id/nine_grid_photo_rv"] > android.widget.RelativeLayout > android.view.View[id="com.babycloud.hanju:id/top_blank"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|41tjLNH8y4DQj1hy9UIFXKnD7VwGplXcBKrfGP8-6jU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HanjuSeriesActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.babycloud.hanju:id/star_rating_dialog_dialog_close_rl"][clickable=true] > android.widget.ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|VGe5fDZbrXAky4bpM0tOjscnahijt3IiZRZvYrKI6Gk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.MySettingActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|majp8AmeDgExio8m83FKkAABFNREOyRhFZobGN9FIM8=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 5,
      name: 'in-app|QmDD-yGHJxtTVK9SjvEEoYAu8I3kl_DLZod7FwO8lQ4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    {
      key: 6,
      name: 'in-app|sMKE30OXClJDPlSHxuZUhwd7R4Ao0NJyhaAnpJ4ERJc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      name: 'in-app|opG_qL_38M3S6ET4enkPLPv_87u26fQU6uqt93XaEIc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.TextView[id="android:id/title"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|eT3DvJXM1SEBlRkDOWp_nOzM8kc1IqA9QBxYbe64cug=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.TextView[id="com.babycloud.hanju:id/know_tv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|rloYkV0Jk6NnPlcA2uZjaCnhXynmKQhLAKMwFUumtMI=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.babycloud.hanju:id/close_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|J1gQ8LbrNVyOzkYZatY2RzQ40D5Rs6AKdbiBk_6lhgw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|fVy94kYypn3Oeajuq_BqIGFcgzz4WQ-huZdSRMkPddE=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.StarDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_coordinator_layout"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_vp"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.babycloud.hanju:id/refresh_layout"] > androidx.recyclerview.widget.RecyclerView[id="com.babycloud.hanju:id/discuss_rv"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
