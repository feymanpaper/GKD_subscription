import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: 'system|MyNQhnaLmekZhUhxyI5KB-wHUW9xE6nY1SgpiBLTjNU=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > com.tencent.qqlive.ona.sidebar.container.CustomDrawerLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > androidx.viewpager.widget.ViewPager[id="com.tencent.qqlive:id/arg"] > android.widget.RelativeLayout > android.widget.ScrollView[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.view.ViewGroup[id="com.tencent.qqlive:id/arg"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
