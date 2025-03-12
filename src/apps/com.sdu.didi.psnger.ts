import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 0,
      name: 'in-app|723jd0lqa1-bPW_0uqXwAg4coMn_6bPv223KjJxbWq4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.sdu.didi.psnger:id/ll_btn_area_horizontal"] > android.widget.LinearLayout[id="com.sdu.didi.psnger:id/ll_btn_area_horizontal_2"] > android.widget.Button[id="com.sdu.didi.psnger:id/button_right"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|Aso1qZv_WMrgbMUQqaAartTGSExVsX5Z3TUyeEvLuCg=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
      key: 2,
      name: 'in-app|drpbdwGNvcLof_2mFXy2CWpc_WLn_Vu_rwn0H1IrFmE=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sdk.address.address.view.PoiSelectActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ListView[id="com.sdu.didi.psnger:id/reason_list"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|jyFRnZxHpbLByZiBbuTg_JS-aVdonNeoZqAmXxWmWBs=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
      actionMaximum: 5,
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
      name: 'in-app|olXxGkmWvUoxCI9-7SMrw8RQp-r29-KZ_TW_CCyjPSQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
      key: 6,
      name: 'in-app|ppSQ_bRdNoejVD0xRyYjEzGIPDD_1UtiUG4rEzEFkBk=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
      key: 7,
      name: 'in-app|Q-MPi6Tq_Em67tynRpQVgIS06C_Dcwg83GkC8WywucA=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.Button[id="com.sdu.didi.psnger:id/positive_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|xZmM-xVAUVJSIvFykhhgt9tfBitrZGjz2Vdz7Yzxq4I=.png',
      actionDelay: 3000,
      actionMaximum: 5,
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
