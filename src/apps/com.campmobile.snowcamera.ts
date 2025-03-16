import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.campmobile.snowcamera',
  name: 'B612咔叽',
  groups: [
    {
      key: 0,
      name: 'in-app|-Ula3prcyO9zYsY0ev66WOySVoOTEBI9Kq1SCkniGDk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.miui.systemAdSolution:id/view_main_container"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.miui.systemAdSolution:id/view_ad_view_container"][clickable=true] > android.widget.FrameLayout[id="com.miui.systemAdSolution:id/view_splashAdSloganFlagView"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.miui.systemAdSolution:id/view_ad_share_flag"] > android.widget.LinearLayout[id="com.miui.systemAdSolution:id/view_skip_button_nearby_top_right"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|NxXCIZ04cQtE611fNkxtthkthgeoZ8v6uTX0xKWhosg=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.miui.systemAdSolution:id/view_main_container"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.miui.systemAdSolution:id/view_ad_view_container"][clickable=true] > android.widget.FrameLayout[id="com.miui.systemAdSolution:id/view_splashAdSloganFlagView"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.miui.systemAdSolution:id/view_ad_share_flag"] > android.widget.LinearLayout[id="com.miui.systemAdSolution:id/view_skip_button_nearby_top_right"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
