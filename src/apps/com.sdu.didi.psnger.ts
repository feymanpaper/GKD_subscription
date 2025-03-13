import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 0,
      name: 'in-app|723jd0lqa1-bPW_0uqXwAg4coMn_6bPv223KjJxbWq4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/ll_btn_area_horizontal"] > android.widget.LinearLayout[id="com.sdu.didi.psnger:id/ll_btn_area_horizontal_2"] > android.widget.Button[id="com.sdu.didi.psnger:id/button_right"][text="确认关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|9qKt2P0RiZGseGGeJzkhTfflQpHPQWdh8FHsy5fJaws=.png',
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
      key: 2,
      name: 'in-app|Aso1qZv_WMrgbMUQqaAartTGSExVsX5Z3TUyeEvLuCg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sdk.address.waypointV6.WayPointActivityV6',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|jyFRnZxHpbLByZiBbuTg_JS-aVdonNeoZqAmXxWmWBs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sdk.address.waypointV6.WayPointActivityV6',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|kh3DNwx0Fxmo2s8YSJOvLw2n2NX_tgOYAAfqbzlImXs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/frame_layout_content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/home_entrance_view"] > android.view.ViewGroup > android.view.ViewGroup[id="com.sdu.didi.psnger:id/v6x_home_bottom"] > android.widget.RelativeLayout[id="com.sdu.didi.psnger:id/v6x_home_bottom_nav"] > android.widget.LinearLayout > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|M8ts9Kwp7TfM6wZjjWM9lodYn79Jb3qQziOQUNUq_bw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.sdu.didi.psnger:id/agree_btn"][text="同意并开始使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|olXxGkmWvUoxCI9-7SMrw8RQp-r29-KZ_TW_CCyjPSQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/frame_layout_content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/home_map_fragment"] > android.widget.RelativeLayout[id="com.sdu.didi.psnger:id/map"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|ppSQ_bRdNoejVD0xRyYjEzGIPDD_1UtiUG4rEzEFkBk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/frame_layout_content"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/container"] > android.widget.RelativeLayout[id="com.sdu.didi.psnger:id/ddrive_root_fragment"] > android.view.ViewGroup[id="com.sdu.didi.psnger:id/hummer_layout_root_view"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[id="com.sdu.didi.psnger:id/la_stage_base_panel"] > android.widget.RelativeLayout[id="com.sdu.didi.psnger:id/la_stage_content_container"] > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|Q-MPi6Tq_Em67tynRpQVgIS06C_Dcwg83GkC8WywucA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.Button[id="com.sdu.didi.psnger:id/positive_button"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'system|UvmVj6chYmV_cUKYUomjLU8IVpGaErC-iyh0fRj_3Pk=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|xUPo-WgIh-zDyGZXuCTyEGFmKxJ8Eu2Q_3m-nPEWflg=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.sdu.didi.psnger:id/half_dialog_root"] > android.widget.ImageView[id="com.sdu.didi.psnger:id/half_dialog_image_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|xZmM-xVAUVJSIvFykhhgt9tfBitrZGjz2Vdz7Yzxq4I=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.sdu.didi.psnger:id/ll_title_content_area"] > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/fl_custom_root"] > android.view.ViewGroup > android.view.ViewGroup[id="com.sdu.didi.psnger:id/cl_all_content"] > android.widget.ImageView[id="com.sdu.didi.psnger:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
