import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: 'in-app|-jgAiHzhQRneHfiKSLYsQIMzK6ZAAATW5Bq8q2IWhus=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/h5x"] > android.view.ViewGroup[id="com.tencent.qqmusic:id/h5h"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|76r7o1gXPKsRCuqDMp0nk-xPIPLXOH8sZPPCav-eCbg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.AppStarterActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/h5x"] > android.view.ViewGroup[id="com.tencent.qqmusic:id/h5h"][clickable=true] > android.widget.RelativeLayout[id="com.tencent.qqmusic:id/h5d"] > androidx.viewpager.widget.ViewPager[id="com.tencent.qqmusic:id/main_desk_fragment_pager"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/gpi"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/i05"] > android.widget.LinearLayout[id="com.tencent.qqmusic:id/i0f"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/hi3"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.qqmusic:id/hi2"] > android.view.ViewGroup[desc="我喜欢音频. . 0首 来自花粥"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|bOmlHJ_lRJg2TQT2ucfRBPf_HH_q85r3dRdANBFxHpc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/du0"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|EfhElXeGIwU_dFJcdb6wFz4yNbG-Qv3u8Hyod70WBHA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.FrameLayout[id="android:id/customPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="android:id/log_access_dialog_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|OR0dD8P10M_PYhTz6sw_Wv0yLOlCImmvWcfExZ09Lk0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/du0"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[desc="关闭按钮"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|RxYBckyNL6opZvYZZ9Ky7Ih0xU77xxLAnlsjAgUYM9s=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.tencent.qqmusic:id/mq4"][text="继续观看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|Sh9NwpsmhHhNVtic91Rz5qA7dp0N8qcFRD-ZLkYRESI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/h5x"] > android.view.ViewGroup[id="com.tencent.qqmusic:id/h5h"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|xg5LEz1XdkN72qto8Hs2Ja0lJRBcWBuQsa84DOz4aoY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.AppStarterActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/h5x"] > android.view.ViewGroup[id="com.tencent.qqmusic:id/h5h"][clickable=true] > android.widget.RelativeLayout[id="com.tencent.qqmusic:id/h5d"] > androidx.viewpager.widget.ViewPager[id="com.tencent.qqmusic:id/main_desk_fragment_pager"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/gpi"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/i05"] > android.widget.LinearLayout[id="com.tencent.qqmusic:id/i0f"] > android.widget.FrameLayout[id="com.tencent.qqmusic:id/hi3"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.qqmusic:id/hi2"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.tencent.qqmusic:id/bb8"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
