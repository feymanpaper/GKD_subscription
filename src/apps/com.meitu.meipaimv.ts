import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.meitu.meipaimv',
  name: '美拍',
  groups: [
    {
      key: 0,
      name: 'in-app|jI6pJumEL0UESv1r5IVrWQW66XhF5b-Dcv_4yuPX0zI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.meitu.meipaimv:id/gu"] > android.widget.TextView[id="com.meitu.meipaimv:id/Er"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|LfvkBl5kLH5LPLWssiMcIVE3-GenWf3gi9aJa4QWEhY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.meitu.meipaimv:id/I`"] > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[id="com.meitu.meipaimv:id/Xw"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
