import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.haokan',
  name: '好看视频',
  groups: [
    {
      key: 0,
      name: 'in-app|b-p-PmzEQnNXkGXO0nMUwFzOY-5PerfwYd0Y3Ss3K44=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.haokan:id/obfuscated"][clickable=true] > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.haokan:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|TAk6lw3HV0UhS_YEqfZ0z9jqwQ9Aszfa-GhMgvRg-UQ=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.RelativeLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.TextView[id="com.baidu.haokan:id/obfuscated"][text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|YOmgeC6oq8HzN-A4DPeJdjuIMD28sse_68GDsHeNo4Y=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.haokan:id/obfuscated"] > android.widget.LinearLayout > android.widget.TextView[id="com.baidu.haokan:id/obfuscated"][text="不同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
