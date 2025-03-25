import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.lifeinsurance',
  name: '平安金管家',
  groups: [
    {
      key: 0,
      name: 'in-app|4HYqhtg7eQPahI-Kso3NrmT-3plipz3D83usqV5KIHA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            '.paaccountsystem.account.loginv3.activity.LoginV3Activity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.pingan.lifeinsurance:id/fks"] > android.widget.LinearLayout > android.widget.TextView[text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|52TrQYkf_lMSF5d7h6GuDXc3q7kF5WF9ydvLzA9Qjac=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.pingan.lifeinsurance:id/fkl"] > android.widget.FrameLayout[id="com.pingan.lifeinsurance:id/b7f"] > android.widget.ImageView[id="com.pingan.lifeinsurance:id/bt0"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|myYg2ortk8rUfsnRgB7KUGTHLEUxUVKD6uPZONdanMA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.framework.reactnative.activity.ParsReactActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.pingan.lifeinsurance:id/al4"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.pingan.lifeinsurance:id/f17"] > android.view.ViewGroup[id="com.pingan.lifeinsurance:id/enz"] > android.widget.FrameLayout[id="com.pingan.lifeinsurance:id/aef"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|sQo55XqKAFaUuc0JtfeN1q27BiLUAb-v1O3uNY95wtc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.pingan.lifeinsurance:id/fkp"] > android.widget.TextView[id="com.pingan.lifeinsurance:id/gv0"][text="注销旧账户"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
