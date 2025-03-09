import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
    {
      key: 0,
      name: 'in-app|TKwY_EzBY8I4PVu79cel-BPpmS3uOmT7B96IsfZ6fCY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.qiyi.video:id/layout"] > android.widget.LinearLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.Button[id="com.qiyi.video:id/cancel_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|Dckp69c8qTe0bz6HmdyxQT6C4vmgMighoQsFbWiJGBs=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.qiyi.video:id/phoneFootLayout"] > android.widget.RelativeLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.LinearLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|1MDHn-ITvblwGknNvPWo5Sgbvy5EUJx7Wg7OA8g11uk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.qiyi.video:id/layout"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.qiyi.video:id/unused_res_a"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|W7uEmgAJYuOcTKdn6vWcMB9_UGPbY8cW39mwjlq2GRY=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.iqiyi.reactnative.PGCBaseReactActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'system|cPNIAu30CZbu0dgc0i84OH5MtEiUS-vJmr4Gee5-8d0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.ScrollView[id="android:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|Bn-iyiepPPXX5kfYTUuLSYwXax8jTVL6MdKHTuobXn4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.FrameLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.FrameLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.FrameLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.RelativeLayout[id="com.qiyi.video:id/unused_res_a"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|R5EuOz0a186-7ArmXKw_weaSJ1zrx0TXmJEWG4knV4Y=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.qiyi.video:id/layout"] > android.widget.LinearLayout[id="com.qiyi.video:id/unused_res_a"] > android.widget.Button[id="com.qiyi.video:id/cancel_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|PqNZynmQZaCJrcDJXXXc6LpRFaTmCmVEtcV2la5w2v8=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WelcomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
