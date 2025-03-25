import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.map',
  name: '腾讯地图',
  groups: [
    {
      key: 0,
      name: 'in-app|-p0aEQ_8WdazS_IlbozRCb-l904rg1mGJVb-E2kg9-Y=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup > android.widget.ImageView[id="com.tencent.map:id/cancel_image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|7t89lq4CgubVU-XTkU0rjDKm4a-w0lFRJtjth0vdD70=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.tencent.map:id/img_close"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|9R3sqzNJf-2sYw_qfY85b7HMJRZ1RaIWtdv5ybSZU9A=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.map:id/drawer_layout"] > android.widget.FrameLayout[id="com.tencent.map:id/content_root"] > android.widget.FrameLayout[id="com.tencent.map:id/main_content"] > android.widget.FrameLayout[id="com.tencent.map:id/fragment_container"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/ll_poi_fav"] > androidx.viewpager.widget.ViewPager[id="com.tencent.map:id/view_pager"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="com.tencent.map:id/real_container"][clickable=true] > android.widget.FrameLayout[id="com.tencent.map:id/header_view_container"] > android.view.ViewGroup > android.widget.ImageView[id="com.tencent.map:id/img_close"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|cu4My2lBiuLPBiKlwhdJaf1W2tWW8FdfbIQxc5YTNXM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.tencent.map:id/btn_ok"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|gnw-yVapUxAlZAil0xZ-lESRlCTONPH5jMN_kQAuPfc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WelcomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.map:id/drawer_layout"] > android.widget.FrameLayout[id="com.tencent.map:id/content_root"] > android.widget.FrameLayout[id="com.tencent.map:id/main_content"] > android.widget.FrameLayout[id="com.tencent.map:id/fragment_container"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.tencent.map:id/tab_page_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.tencent.map:id/bus_hippy_view_container"] > android.widget.FrameLayout[id="com.tencent.map:id/root_layout"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|MxJm9SkgCRdYxrU-HWxmypstHBUUUx0LW37Q5x2S-iU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WelcomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.map:id/drawer_layout"] > android.widget.FrameLayout[id="com.tencent.map:id/content_root"] > android.widget.FrameLayout[id="com.tencent.map:id/mapview_holder"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|tDr05HRBMM5OBh7pbL5frSqPTCz9ZBYQRWzf12YhBnU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.android.packageinstaller:id/base_view_layout"] > android.widget.LinearLayout[id="com.android.packageinstaller:id/buttons_panel"] > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|z1Y2-Ia9FQD_nhmwCfSwoMom49qjpBRlcOkAUQE8rb0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.tencent.map:id/btn_cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|zE2ny6SoZ303B5Zg4500XyaOe-EKKUzD7Xzq449SLM0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.map:id/drawer_layout"] > android.widget.FrameLayout[id="com.tencent.map:id/content_root"] > android.widget.FrameLayout[id="com.tencent.map:id/main_content"] > android.widget.FrameLayout[id="com.tencent.map:id/fragment_container"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.map:id/ll_poi_fav"] > androidx.viewpager.widget.ViewPager[id="com.tencent.map:id/view_pager"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="com.tencent.map:id/real_container"][clickable=true] > android.widget.FrameLayout[id="com.tencent.map:id/header_view_container"] > android.view.ViewGroup > android.widget.ImageView[id="com.tencent.map:id/img_close"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
