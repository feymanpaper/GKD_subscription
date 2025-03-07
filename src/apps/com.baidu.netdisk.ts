import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: 'in-app|LTOR9_2Ro7YoxXNhZ-30nHSaHhuoGaIEqZv1-c-DNhI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_confirm"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 1,
      name: 'in-app|7DRbTxZNkfqNxiSPnOV4A9xiU99R30TLkjsv8LblCX4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_confirm"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 2,
      name: 'in-app|J9MDnTESjykTgUVrVu9vepyVF80F9fg1UUVi5NUVdAE=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.netdisk:id/dialog_root_view"] > android.widget.RelativeLayout[id="com.baidu.netdisk:id/dialog_footer"] > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_ok"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 3,
      name: 'in-app|xb3SQ03zy-_-Hb1750Gx2rtE1rml5fTazBEBWoGo7zc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.update.UpdateDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 4,
      name: 'in-app|ZoRPymyYWazYDvi5_tJyH7Xt1W_3VB--TH-0-hPJblo=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.netdisk:id/dialog_footer_one_button"] > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_one"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 5,
      name: 'in-app|_ileVgQ_IS9MHcTN_uDoWtiVWBeC-9Puvm4mMKic7Ig=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.netdisk:id/yike_guide_exit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
    {
      key: 6,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: 'true',
    },
  ],
});
