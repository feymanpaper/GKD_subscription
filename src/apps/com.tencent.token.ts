import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.token',
  name: 'QQ安全中心',
  groups: [
    {
      key: 0,
      name: 'in-app|gMF2Gu6LHy025JGeiQHwU6cdjH12leY8Kte5BYy8c_c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.tencent.token:id/contentAndTitle"] > android.widget.RelativeLayout[id="com.tencent.token:id/content"] > android.widget.LinearLayout > android.widget.ListView[id="com.tencent.token:id/game_protect_list"] > android.widget.LinearLayout[id="com.tencent.token:id/utils_get_more"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|uH0CpEyY8wRw5nWys3zVI9t02aoCLdWaNtZ1u5DIo-c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.tencent.token:id/contentAndTitle"] > android.widget.RelativeLayout[id="com.tencent.token:id/title_bar"] > android.widget.RelativeLayout[id="com.tencent.token:id/bar_right_layout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|yA68JOjo4MXmYwQ18T0sPiP-wb1kGqsFPg3T9rfAgvM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.TextView[id="com.tencent.token:id/canclebt"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
