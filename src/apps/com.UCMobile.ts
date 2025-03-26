import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: 0,
      name: 'in-app|HWAKBLn1iV3BjPzjuyRbxAOby6oJ4C-od9Md14f1u2I=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.TextView[text="不保存"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|e1IPyzJ7cz_v6Fc0CbxzylWMNnen0-mvTHFfRmKBPaU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|KUd3i4HvsT-i35F4xRswXQSbXZTPn6kMw_OxhGZ84aQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|tYX3nHzrdPXuUUU5a8kf3xbrb1h_y_gF_vC9OPjyDGc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.TextView[text="去添加"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|28igF_3WBxrZ4LINyYJ7KSav-UaKEHEqgp7Tf6WlTAs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|oHjDYpBeMwlCeN6g6gAUcviWFvESVxrTFsbSf_tfmh4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.UCMobile:id/permission_setting"][text="前往设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|_6YnwXm6nIquFcb_Eewj8hGeRT-F7F8ZeeNFfzInf0w=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[id="com.UCMobile:id/close_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|2zHdHvxAjxh0KD0KnkS6Wb77MBBVlRxx1j8pI01RqSI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.TextView[text="退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|3NyE-tWYOd7Gtvgg9GC_jmkULMzsluk7KojsV5_tyI0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|SPybh0gfFmmUX5YN4gTe7wzK6ZpR42w5rAtN6UTbK8g=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
