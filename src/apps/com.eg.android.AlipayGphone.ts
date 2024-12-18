import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: 'in-app|3xWwJ0Krv2MQHPIIHzAzw7dowTPST50WiitC_eQduus=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.AlipayLogin',
          matches: 'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="android:id/button1"][text="DISAGREE"][clickable="true"]',
          snapshotUrls: '',
        },

      ],
    },

  ],
});
