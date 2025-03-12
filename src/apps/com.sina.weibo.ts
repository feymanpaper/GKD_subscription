import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: 'in-app|1q7o7jXKcyuMYGIUwUm_efXb5A2ZipDWpANr9WshE-c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > androidx.viewpager.widget.ViewPager[id="com.sina.weibo:id/main_tab_view_pager"] > android.widget.TabHost[id="com.sina.weibo:id/tabhost_right"] > android.widget.FrameLayout[id="com.sina.weibo:id/floating_window"] > android.widget.RelativeLayout[id="com.sina.weibo:id/root_rl"][clickable=true] > android.widget.ImageView[id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
