import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: 'in-app|1PpcMTmvWFHBBNN_Eyp1Z0f-NQ_bhW9AigvZdMCrDb4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.view.ViewGroup > android.view.ViewGroup[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.RelativeLayout[id="com.tencent.qqlive:id/arg"] > android.widget.RelativeLayout[id="com.tencent.qqlive:id/arg"] > androidx.viewpager.widget.ViewPager[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.tencent.qqlive:id/arg"] > android.widget.LinearLayout[id="com.tencent.qqlive:id/arg"][clickable=true] > android.widget.FrameLayout > android.widget.TextView[id="com.tencent.qqlive:id/arg"][text="立即免费解锁"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|4Fuvcktltvj0rjg4Wt3L5lpzrma5VEGmE9RiCsAm9Jc=.png',
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
            'android.widget.FrameLayout > com.tencent.qqlive.ona.sidebar.container.CustomDrawerLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.tencent.qqlive:id/arg"] > android.widget.ScrollView[id="com.tencent.qqlive:id/arg"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.tencent.qqlive:id/arg"] > android.widget.LinearLayout[id="com.tencent.qqlive:id/arg"] > androidx.viewpager.widget.ViewPager[id="com.tencent.qqlive:id/arg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|5p02SXiEScNO1rNa56f4PjVaLPblpFup0DaNXFpmNsE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            '.universal.usercenter.missioncenter.activity.UserMissionCenterActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.qqlive:id/arg"] > com.tencent.qqlive.ona.base.adapt.DetachableComposeView[id="com.tencent.qqlive:id/arg"] > android.view.View > android.view.View[clickable=true] > android.widget.ImageView[desc="bonus_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|MyNQhnaLmekZhUhxyI5KB-wHUW9xE6nY1SgpiBLTjNU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
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
    {
      key: 4,
      name: 'in-app|Sh9NwpsmhHhNVtic91Rz5qA7dp0N8qcFRD-ZLkYRESI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ona.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
