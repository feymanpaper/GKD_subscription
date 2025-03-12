import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weishi',
  name: '腾讯微视',
  groups: [
    {
      key: 0,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
