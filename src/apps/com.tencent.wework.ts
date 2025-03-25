import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      key: 0,
      name: 'system|7BFQv8zXks6QEA20cEHkEJF2AhwKf_m41V9Fl3lMurI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_one_time_button"][text="允许本次使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|c5WDAY3FcEhtYNOudDd4qKuLl5LboXg_SfmaBS2fxPg=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.wework:id/d2c"] > android.widget.RelativeLayout[id="com.tencent.wework:id/d23"] > android.widget.TextView[id="com.tencent.wework:id/d2j"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|SAYNTY8JrV-akTrEX1hIb5CUYhUbOnx-fH05IWNrRGE=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.tencent.wework:id/d2c"] > android.widget.RelativeLayout[id="com.tencent.wework:id/d23"] > android.widget.TextView[id="com.tencent.wework:id/d2m"][text="去填写"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|uWvuaR2PSZG_Xj-zv3q5ZitZ8ua3exg_TIUNttsF22U=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.common.web.JsWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout[id="com.tencent.wework:id/koy"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.wework:id/b0l"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
