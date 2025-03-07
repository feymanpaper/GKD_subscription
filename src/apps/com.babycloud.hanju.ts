import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 0,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
    {
      key: 2,
      name: 'in-app|41tjLNH8y4DQj1hy9UIFXKnD7VwGplXcBKrfGP8-6jU=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.babycloud.hanju:id/star_rating_dialog_dialog_close_rl"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|QmDD-yGHJxtTVK9SjvEEoYAu8I3kl_DLZod7FwO8lQ4=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.babycloud.hanju:id/dialog_close_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|sMKE30OXClJDPlSHxuZUhwd7R4Ao0NJyhaAnpJ4ERJc=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.babycloud.hanju:id/two_button_rl"] > android.widget.TextView[id="com.babycloud.hanju:id/notify_ok_tv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|opG_qL_38M3S6ET4enkPLPv_87u26fQU6uqt93XaEIc=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[desc="ad_content:FrameLayout:0"] > android.view.ViewGroup[desc="main_content:FlexLayout:0"] > android.widget.TextView[desc="continue_button:Text:1:continue_watch"][text="继续观看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|eT3DvJXM1SEBlRkDOWp_nOzM8kc1IqA9QBxYbe64cug=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
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
      key: 7,
      name: 'in-app|fVy94kYypn3Oeajuq_BqIGFcgzz4WQ-huZdSRMkPddE=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_coordinator_layout"] > android.view.ViewGroup[id="com.babycloud.hanju:id/star_detail_vp"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.babycloud.hanju:id/refresh_layout"] > androidx.recyclerview.widget.RecyclerView[id="com.babycloud.hanju:id/discuss_rv"] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/topic_ll"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.babycloud.hanju:id/topic_comment_ll"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
