import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 0,
      name: 'in-app|LkOJZXcbYdMHPQ-v1haHOpSm_8OCzYLcYFiU1Rk_-iU=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/dialog_ok_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
