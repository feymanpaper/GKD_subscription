import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 0,
      name: 'in-app|pkj4brh2jeylBLHnjCalfSS-d0-Fpjwyw1wSf63UWeo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.input:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.input:id/imeAlertDialogContainer"] > android.widget.LinearLayout[id="com.baidu.input:id/parentPanel"] > android.widget.LinearLayout[id="com.baidu.input:id/buttonPanel"] > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|qlv5IpW7RimOV1MH0dp7faiah1PJBRSVLEf1QbQrZPc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.input:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.baidu.input:id/close"][text="放弃优惠"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|St8yuUnzDz2oJssgsBy-VMPg-sWkXfMKbB9qExlD0lA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.input:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.input:id/imeAlertDialogContainer"] > android.widget.LinearLayout[id="com.baidu.input:id/parentPanel"] > android.widget.LinearLayout[id="com.baidu.input:id/buttonPanel"] > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
