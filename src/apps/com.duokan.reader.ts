import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 0,
      name: 'in-app|13wQIIMD4oCIPUhpCHdQNfM43c4Hiz9Bb3eCYo2a4pg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.DkMainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duokan.reader:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duokan.reader:id/dk_decor_view"] > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duokan.reader:id/general__web_core_view__root"] > android.widget.FrameLayout[id="com.duokan.reader:id/general__web_core_view__content"] > android.view.ViewGroup[id="com.duokan.reader:id/general__web_core_view__swipe_refresh_layout"] > android.view.ViewGroup[id="com.duokan.reader:id/general__web_core_view__web"] > android.webkit.WebView > android.webkit.WebView[text="多看 - 书籍详情"] > android.view.View[id="root"][clickable=true] > android.view.View > android.widget.TextView[text="免费试读"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|pcQMPbkDuT5ApwQ6kmwEPQCQ5VMEtdAjpdEEPejsK0E=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.DkMainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.duokan.reader:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.duokan.reader:id/dk_decor_view"] > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.duokan.reader:id/general__web_core_view__root"] > android.widget.FrameLayout[id="com.duokan.reader:id/general__web_core_view__content"] > android.view.ViewGroup[id="com.duokan.reader:id/general__web_core_view__swipe_refresh_layout"] > android.view.ViewGroup[id="com.duokan.reader:id/general__web_core_view__web"] > android.webkit.WebView > android.webkit.WebView[text="多看 - 书籍详情"] > android.view.View[id="root"][clickable=true] > android.view.View > android.widget.TextView[text="免费试读"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|vZYjBguGLE-PymptBCvlNw2Mw8-BEb0f1C2YBAZ8FXk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout > android.widget.LinearLayout[id="com.duokan.reader:id/button_group"] > android.widget.Button[id="com.duokan.reader:id/negative"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|X7-heVPSitsYVDybMEoGzfioU2dD6GBQJrSnRYXo8KA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ScrollView > android.view.ViewGroup > android.widget.TextView[id="com.duokan.reader:id/elegant__personal_login__dialog_mi_login"][text="小米账号一键登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
