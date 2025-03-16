import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wjkj.loosrun',
  name: '电子红包',
  groups: [
    {
      key: 0,
      name: 'system|bfmfpUOj8TaJUFVsz37BbqohkbAtqK9CFYPZjvcKREo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_foreground_only_button"][text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|h_dVG2aZejG7sWe4O9VC4FsiKuunKDFPTOUWHgVwt_s=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.view.ViewGroup > android.widget.TextView[id="com.wjkj.loosrun:id/dialogPermissionsHintContentImNot"][text="不同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
