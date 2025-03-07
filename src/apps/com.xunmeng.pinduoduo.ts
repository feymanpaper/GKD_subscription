import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: false,
      name: 'in-app|BFRb9cR9H03LFlDsy9c9h02NJto8W-6AVXHtPfSrTFA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: true,
      name: 'in-app|NEwQRKMh8ONxCku5KxacxxxAHOF5UZ2zUdPOOwYDA_E=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.TextView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 2,
      name: 'in-app|KS0nNhYAACdgvzJh5I5x-wFgy36jX5TqkUJR8DkiROc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 3,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 4,
      name: 'in-app|LjFYPG6pLSZEkqOrSWDI3exq8OaZ3hSoHwvMOMItvHw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 5,
      name: 'in-app|6DPu6xuX1DcaWBUohVeXVIDOSCY2T5jzkK9EgT2ze7Q=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 6,
      name: 'in-app|0qd_s5xPJyAEetrHM_jYk3P0HhSH7HiekktSQuUVNDU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 7,
      name: 'in-app|EMkSYsrLJk6IGChaGwAZeBdhD3iR-bVD5ZG0UQyAbx0=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 8,
      name: 'in-app|M29QX7DjMpfXE4yFuqeGewbWpiUntyuQ4BjTezbdOys=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 9,
      name: 'in-app|v85AG9b9-Bly0iNzRE9_WxRpbcf2KCJpa0sNJcQjXvw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 10,
      name: 'in-app|dYgOdvPN1jsk7Jx4udyGdLpRP3_hPrxXEQEyhU67gM4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 11,
      name: 'in-app|iHTYJykVoT3y-9e9skUsmDa6399ve2dIRAOfLZ6FKi8=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 12,
      name: 'in-app|HMfSC9xEFI5hX2wtDdI6WV3lbld3-nvIBjEKw5Sm7zg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 13,
      name: 'in-app|ZQz_h-ZXYx3oma-Jal81vHlx7X9sEaLNVlm6XIMSDQI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 14,
      name: 'in-app|JybNTnRCVVu1Mp4csgAUHbKiYgnxWnxG5UGklJwLxgw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.support.v4.view.ViewPager[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 15,
      name: 'in-app|JAs24MrLLn4RWBdLaaVaCRWW5EJ9KVbcA0CnuHmsJ-I=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.support.v4.view.ViewPager[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 16,
      name: 'in-app|acqW7DeFnSusOsdY0Yu3KGDHEfwvvRhsX-FOpzNcg_8=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 17,
      name: 'in-app|pwEf4A49xcupAExGyy3yKmMgA-EEOoJ6arf8_Xl6wNU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 18,
      name: 'in-app|ly-mRRAO99vMJB2olOGgTDmCyauxr1cwNClQlRQSy7M=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 19,
      name: 'in-app|FJibc8L0stat6lq6XFpK644nqiodcduo_JdVLFDMpN0=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[desc="菜单按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 20,
      name: 'in-app|lSXvusyhYzlu0KCOZJwFamfLoiGT86rJUnnsQlKM9tk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.support.v4.view.ViewPager > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 21,
      name: 'in-app|I_BW7vOEcnAwd31jhaclpfKVqUV63W9wKfrZX32o6uI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 22,
      name: 'in-app|6EtP8vCo6Da5ZSg8JWG7nYx-XeiDSp5-LCfR9Mx8JHc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 23,
      name: 'in-app|VGbr7Kl2_njdXhpcEopGBlQgraNz58jhNEDOC5jG49g=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 24,
      name: 'in-app|VWwXPfgA4su9OyRxh7FV5f-g67ykB0QUbizRQip6Nco=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.app_address_lego.CreateLegoAddressActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 25,
      name: 'in-app|0xWFgy8SSJCBeJGpycw1YtPE7me9VUwXgC-3bwFQIlE=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 26,
      name: 'in-app|W4Zr944p5S99kTf2YsqLXr7AjrVz0LVKry-IZdbXOhU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 27,
      name: 'in-app|j-g1wWWmnwNm0F4FLcm6mX7n9JbZZnUxdPysLHtwtzs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 28,
      name: 'in-app|g74sXAAVKl1NzrFPhfKM92hNbskenXTModVDNZla6YM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 29,
      name: 'in-app|X2j2L9S287p2h2zSvASY05nWaFWmS51CeR5hwCmp4IU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 30,
      name: 'in-app|zpQq7al3wPI5HU5LN91G445eHyCEXcNZG8XmsYODr2M=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/category_list"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 31,
      name: 'in-app|4dSWX842l33PA-QHia0fgtcv3FzVJ2aCxBXl6izKQmc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 32,
      name: 'in-app|N-3jsS1NdpE2mLrqe8aGHXAIoQkiyS6ZsNZqbv-adaw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 33,
      name: 'in-app|JO65f6GryRYpJNKyEGdjMTczsjyng-Es6xtScLxE3as=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 34,
      name: 'in-app|1-yivG4zMujTGoquYyHAlHzLMOI1P4DzxrxnMhsfYKM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ImageView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 35,
      name: 'in-app|WnYG5dPmQo6dfvMT0yRZQMQWbYQfxF8_rk6rhjKmHdo=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.TextView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 36,
      name: 'in-app|V2azD9a-VDyHq47uYlHDjPMSAOX_fhdjvXVhjrIA9ZA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 37,
      name: 'in-app|7-1HZjD7tuFAHOt2MZELbN4EEuxRBbzmRZuwH2NgxfI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout[desc="返回"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 38,
      name: 'in-app|tpJMIQjiULnA_A8sNlOcDwZySx2yVWQ_SmySqkOM_k0=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="充值中心"] > android.view.View[id="main"] > android.view.View > android.widget.EditText[id="cic-box-input"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 39,
      name: 'in-app|_oGncyG1wydCmahIqy5XIpubfqgJuPhdxPfQ6D59voo=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 40,
      name: 'in-app|8vpUj-_sGvugPWotvbGBZ5POGS33C9r_CVQO_u8Q5WQ=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 41,
      name: 'in-app|UfUnTM_H5WFd5zDs9l0ac5GSmpaP0tU147vQkV9hnGQ=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 42,
      name: 'in-app|2vEG6xVOTzbdC07yy5IG7DUgBUqCgkY7BVpnXEffqfU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 43,
      name: 'in-app|ErenEFlXvk6ShxaC4CbajXQhShTPWnTVdmMDuXIXq4Y=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 44,
      name: 'in-app|6di1d5MEAx3f7jzUnmPTs2A4mmMRLCvmnEBtIQE1Qpg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 45,
      name: 'in-app|6Mb-flvz4rEUCAA0DWFYeGlugdO6sqvZK4i4_bheqdI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout[desc="返回"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/tv_title"] > android.widget.TextView[text="预售"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 46,
      name: 'in-app|dsafjosSrZGiryvTku1NjyjKs_ez_zFMi_EfJQnE-aA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 47,
      name: 'in-app|DwEN8JmaxlfBeAaN2sevPuqo8DaTpYpsuCYDvKWW-bE=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 48,
      name: 'in-app|k__VrupWAIQKLa2J3dOoWbSr-UcysnevDhqcxpissDc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 49,
      name: 'in-app|9og0IyKkSmIGYqKvHz3FpHS4ZLWrmryFfA_offs1fSs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 50,
      name: 'in-app|JUipU9RZLsAt4lag2qq6OinR-AvA10IJs4k6Q-HK8yg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 51,
      name: 'in-app|AwDhuy_pQJ4_juqB5KPZIw4UfcjwWaijaarwLQhPsjw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.ScrollView[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 52,
      name: 'in-app|uozPLUIHk9ieqz5s0Y-mXeSrgzHqABt8DljKooszed4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
  ],
});
