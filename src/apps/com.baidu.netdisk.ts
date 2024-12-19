import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: 'in-app|LTOR9_2Ro7YoxXNhZ-30nHSaHhuoGaIEqZv1-c-DNhI=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.CorporateEntityTransferDialog',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_confirm"][text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|7DRbTxZNkfqNxiSPnOV4A9xiU99R30TLkjsv8LblCX4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.CorporateEntityTransferDialog',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_confirm"][text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|J9MDnTESjykTgUVrVu9vepyVF80F9fg1UUVi5NUVdAE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_ok"][text="立即更新"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
