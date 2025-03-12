import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: 'com.baidu.searchbox',
  groups: [
    {
      key: 0,
      name: 'in-app|aPieJVWnanG5AJe2EBxw8dYOMR59PR2kTSNLPQlpaLg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            '.newreader.discovery.novel.DiscoveryNovelSecondActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > com.baidu.searchbox.widget.SlidingPaneLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.RelativeLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.LinearLayout > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[desc="返回"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|xb3SQ03zy-_-Hb1750Gx2rtE1rml5fTazBEBWoGo7zc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.update.UpdateDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|K3AlzqBZOjoY73aUF-mjZcrg2iqOqdlpZYw9FycDbM8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.RelativeLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.LinearLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.TextView[id="com.baidu.searchbox:id/obfuscated"][text="去设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
