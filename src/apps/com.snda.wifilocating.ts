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
      name: 'in-app|93avcHybOOq94a8MUazruEI1QMjD5RGy_i9lRnMFsBQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/ad_layout"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.zm.wfsdk:id/wf_splash_root_rl"] > android.widget.TextView[id="com.zm.wfsdk:id/wf_splash_skip_tv"][text="跳过 4"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|dGLXAQoIYfbCo7rNi5KbADm9BXbE3k_7Ud8Oi-5_aH4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.snda.wifilocating:id/cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|KLb_8j7SVzvI9VeACCPQ3DvNUG4Az2r0HMsW9UGOEP8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.zm.wfsdk:id/wf_sdk_root_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.zm.wfsdk:id/wf_sdk_root_container"][clickable=true] > android.widget.FrameLayout[id="com.zm.wfsdk:id/wf_sdk_fl_top_action_view"] > android.widget.LinearLayout > android.widget.TextView[id="com.zm.wfsdk:id/wf_sdk_tv_skip"][text="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|pzovXJRSMSU9H14m74E1BpDPV1FzoVhEJpuHd7Yccd8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/ad_layout"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.zm.wfsdk:id/wf_splash_root_rl"] > android.widget.TextView[id="com.zm.wfsdk:id/wf_splash_skip_tv"][text="跳过 5"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|RPt8oOrj4c59u3Sbllo_Th8m-y5AH1roF7Ydso-HvgM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.snda.wifilocating:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.snda.wifilocating:id/tools_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
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
      key: 9,
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
