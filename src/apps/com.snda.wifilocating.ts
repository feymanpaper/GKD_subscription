import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 0,
      name: 'in-app|-nBmX3G5ocDIWvLnnT8D87Pv-z3Wt7gIiyn5LhEooAM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.snda.wifilocating:id/container"] > android.view.ViewGroup[id="com.snda.wifilocating:id/coordinator"] > android.widget.FrameLayout[id="com.snda.wifilocating:id/design_bottom_sheet"] > android.view.ViewGroup > android.widget.ImageView[id="com.snda.wifilocating:id/dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|1360BOssd15OyDdcXKlRTj8kQS6Q53gPBaixoptyh5c=.png',
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
            'android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="miui.systemui.plugin:id/detail_panel"][clickable=true] > android.widget.LinearLayout[id="miui.systemui.plugin:id/detail_container"][clickable=true] > android.widget.TextView[id="miui.systemui.plugin:id/more_button"][text="更多设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|18fTzx7HO9u2AFsG83_ek2F050eTgorDRBrpSmTPkM4=.png',
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
            'android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="miui.systemui.plugin:id/detail_panel"][clickable=true] > android.widget.LinearLayout[id="miui.systemui.plugin:id/detail_container"][clickable=true] > android.widget.TextView[id="miui.systemui.plugin:id/more_button"][text="更多设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|wmA_kM5WskpOPMfVBOm-33VsbrVTNJg6lHNFCrtoXn0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|wMbgtavPjmsB2XvMXm6DgwYD7gtfjYyxpcjiETkjMQw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.snda.wifilocating:id/container"] > android.view.ViewGroup[id="com.snda.wifilocating:id/coordinator"] > android.widget.FrameLayout[id="com.snda.wifilocating:id/design_bottom_sheet"] > android.widget.LinearLayout > android.widget.TextView[id="com.snda.wifilocating:id/cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
