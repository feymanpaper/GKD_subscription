import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: 'in-app|QhAYcH5cye_1XwtoI8YrLiqqE74t4M9KTr8Ct-KrSWs=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="ctrip.android.view:id/a"] > android.widget.ScrollView[id="ctrip.android.view:id/a"] > android.widget.LinearLayout > android.widget.FrameLayout[id="ctrip.android.view:id/a"] > android.widget.FrameLayout[id="ctrip.android.view:id/a"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
