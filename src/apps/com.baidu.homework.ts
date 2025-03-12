import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 0,
      name: 'in-app|-vISwYgM5PnV3BN4RZ9cV64OTUcakJgleNbw-GwaAxY=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.web.ZybWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.homework:id/zyb"] > android.widget.LinearLayout[id="com.baidu.homework:id/zyb"] > android.widget.FrameLayout[id="com.baidu.homework:id/zyb"] > android.widget.RelativeLayout[id="com.baidu.homework:id/zyb"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="消息中心"] > android.view.View[clickable=true] > android.view.View > android.widget.Button[text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
