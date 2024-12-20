import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 0,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|IDXhw463e6OSopkQ-rE9H-2C9eb5T3SlIBBjjd1SWCA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.StarDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.RelativeLayout > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|41tjLNH8y4DQj1hy9UIFXKnD7VwGplXcBKrfGP8-6jU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HanjuSeriesActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.babycloud.hanju:id/star_rating_dialog_dialog_close_rl"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|VGe5fDZbrXAky4bpM0tOjscnahijt3IiZRZvYrKI6Gk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.MySettingActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.babycloud.hanju:id/btn_pos"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|majp8AmeDgExio8m83FKkAABFNREOyRhFZobGN9FIM8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HanjuSeriesActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.view.ViewGroup > android.widget.ImageView[id="com.babycloud.hanju:id/share_qq_zone_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|QmDD-yGHJxtTVK9SjvEEoYAu8I3kl_DLZod7FwO8lQ4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.VideoCacheMoreActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.babycloud.hanju:id/dialog_close_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|sMKE30OXClJDPlSHxuZUhwd7R4Ao0NJyhaAnpJ4ERJc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.PersonalHomePageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.TextView[id="com.babycloud.hanju:id/notify_ok_tv"][text="去看看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|opG_qL_38M3S6ET4enkPLPv_87u26fQU6uqt93XaEIc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[desc="continue_button:Text:1:continue_watch"][text="继续观看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|eT3DvJXM1SEBlRkDOWp_nOzM8kc1IqA9QBxYbe64cug=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HanjuHomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.TextView[id="com.babycloud.hanju:id/know_tv"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|rloYkV0Jk6NnPlcA2uZjaCnhXynmKQhLAKMwFUumtMI=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.VipPayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.ImageView[id="com.babycloud.hanju:id/close_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|J1gQ8LbrNVyOzkYZatY2RzQ40D5Rs6AKdbiBk_6lhgw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.homepage.PersonalHomePageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|fVy94kYypn3Oeajuq_BqIGFcgzz4WQ-huZdSRMkPddE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.StarDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.RelativeLayout > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
