import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dewmobile.kuaiya',
  name: '快牙',
  groups: [
    {
      key: 0,
      name: 'in-app|Smty9vlswvYpZmGAVyN42FX5wFc2w8b6EwjkXnIymbE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dewmobile.kuaiya:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.dewmobile.kuaiya:id/ll_btn_container"] > android.widget.TextView[id="com.dewmobile.kuaiya:id/next_btn"][text="继续"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
