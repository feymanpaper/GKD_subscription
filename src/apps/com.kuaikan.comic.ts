import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaikan.comic',
  name: '快看漫画',
  groups: [
    {
      key: 0,
      name: 'in-app|3vxCCcZ63bNXjmXo2815iLc72ypSpTbPjCaPLTyOGOE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.kuaikan.main.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.kuaikan.comic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.kuaikan.comic:id/main_tab_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.kuaikan.comic:id/toolbar_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.kuaikan.comic:id/mix_toolbar"] > android.view.ViewGroup > android.widget.HorizontalScrollView[id="com.kuaikan.comic:id/tab_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
