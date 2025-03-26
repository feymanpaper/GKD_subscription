import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '农行掌上银行',
  groups: [
    {
      key: 0,
      name: 'in-app|njhpg8KmSTXq2PCUM9-CuDWmkRGiD78f3JdU3VRBtW4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.android.bankabc:id/tv_cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|UM9MtJhlcokVRfcvTP9tGjbrPU5cPs4ZkJpHs2J0Erw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.ScrollView[id="android:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button1"][text="退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|sgIZ_WeY9x58lr11_neBzHyBNvGrQ8iR-F244h9GwVQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_fragment"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.android.bankabc:id/titlebar"] > android.widget.RelativeLayout[id="com.android.bankabc:id/il_layout"] > android.view.View[id="com.android.bankabc:id/back_click_area"][desc="返回 按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|HG-dUm-TFDP99uxfKlGrNVY8wOGXw0wGI7PaaCFKJl8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.android.bankabc:id/tv_cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|Klcd-flg1xMQUzQR67zRgraqx3xwPSuMZUdO722m3CI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.android.bankabc:id/checkbox_rl"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'system|bfmfpUOj8TaJUFVsz37BbqohkbAtqK9CFYPZjvcKREo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_foreground_only_button"][text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|a1dWyroqg02yaJh_EiHOlpS6-gT-XQrghRsDJdyqvqU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_deny_button"][text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
