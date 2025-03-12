import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pplive.androidphone',
  name: 'PP视频',
  groups: [
    {
      key: 0,
      name: 'in-app|bbBQ60-19_9XHi3J_vpgeQ4JNmO_uHx1E04iQIWzKEg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.pplive.androidphone:id/account_upgrade_layout"] > android.view.View[id="com.pplive.androidphone:id/upgrade_info_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|bzO9nP3ndIAf_XXauRAmjs9vogcIpUcoT6tLHZ-R4wU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.pplive.androidphone:id/root_view"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.pplive.androidphone:id/root_agreement"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.pplive.androidphone:id/registration_agreement_close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|mTqnnYZimuCCi55mhs216ROuXP7-JVpPlwGuMUINhLY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.pplive.androidphone:id/select"] > android.widget.TextView[id="com.pplive.androidphone:id/cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
