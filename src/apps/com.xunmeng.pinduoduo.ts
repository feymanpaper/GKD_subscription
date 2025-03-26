import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 0,
      name: 'in-app|BFRb9cR9H03LFlDsy9c9h02NJto8W-6AVXHtPfSrTFA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|NEwQRKMh8ONxCku5KxacxxxAHOF5UZ2zUdPOOwYDA_E=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|Y0yQ_Yck5X4ZxhuJLL2GLqw4UKnfHd-yvRDTpVc4MjM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|KS0nNhYAACdgvzJh5I5x-wFgy36jX5TqkUJR8DkiROc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|pUw_NSb1jEsCNmhZySwpbNsV2lk4xdTpWow-nybxPDY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.View[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|LjFYPG6pLSZEkqOrSWDI3exq8OaZ3hSoHwvMOMItvHw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|6DPu6xuX1DcaWBUohVeXVIDOSCY2T5jzkK9EgT2ze7Q=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|0qd_s5xPJyAEetrHM_jYk3P0HhSH7HiekktSQuUVNDU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|EMkSYsrLJk6IGChaGwAZeBdhD3iR-bVD5ZG0UQyAbx0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|M29QX7DjMpfXE4yFuqeGewbWpiUntyuQ4BjTezbdOys=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|v85AG9b9-Bly0iNzRE9_WxRpbcf2KCJpa0sNJcQjXvw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|dYgOdvPN1jsk7Jx4udyGdLpRP3_hPrxXEQEyhU67gM4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|iHTYJykVoT3y-9e9skUsmDa6399ve2dIRAOfLZ6FKi8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|HMfSC9xEFI5hX2wtDdI6WV3lbld3-nvIBjEKw5Sm7zg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|ZQz_h-ZXYx3oma-Jal81vHlx7X9sEaLNVlm6XIMSDQI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|JAs24MrLLn4RWBdLaaVaCRWW5EJ9KVbcA0CnuHmsJ-I=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|acqW7DeFnSusOsdY0Yu3KGDHEfwvvRhsX-FOpzNcg_8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|pwEf4A49xcupAExGyy3yKmMgA-EEOoJ6arf8_Xl6wNU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|ly-mRRAO99vMJB2olOGgTDmCyauxr1cwNClQlRQSy7M=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|pDM4zocbuAzZPqyIWnKDKlLcEYhuuNneIfA2Yu3gEFU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.View[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|lSXvusyhYzlu0KCOZJwFamfLoiGT86rJUnnsQlKM9tk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|I_BW7vOEcnAwd31jhaclpfKVqUV63W9wKfrZX32o6uI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|6EtP8vCo6Da5ZSg8JWG7nYx-XeiDSp5-LCfR9Mx8JHc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|VGbr7Kl2_njdXhpcEopGBlQgraNz58jhNEDOC5jG49g=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|VWwXPfgA4su9OyRxh7FV5f-g67ykB0QUbizRQip6Nco=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.app_address_lego.CreateLegoAddressActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.widget.ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|0xWFgy8SSJCBeJGpycw1YtPE7me9VUwXgC-3bwFQIlE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|W4Zr944p5S99kTf2YsqLXr7AjrVz0LVKry-IZdbXOhU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|j-g1wWWmnwNm0F4FLcm6mX7n9JbZZnUxdPysLHtwtzs=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|g74sXAAVKl1NzrFPhfKM92hNbskenXTModVDNZla6YM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.support.v7.widget.RecyclerView[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|X2j2L9S287p2h2zSvASY05nWaFWmS51CeR5hwCmp4IU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|g6kxfY-6wsgTcplmubDwR3H-1hCi57QTzx2HZh0QZGg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|Nc_FTGT9oIKL8MRSTlosyaHle2EW4RvBrj8zjqXH44I=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|4dSWX842l33PA-QHia0fgtcv3FzVJ2aCxBXl6izKQmc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.View[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|N-3jsS1NdpE2mLrqe8aGHXAIoQkiyS6ZsNZqbv-adaw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
      name: 'in-app|JO65f6GryRYpJNKyEGdjMTczsjyng-Es6xtScLxE3as=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'in-app|WnYG5dPmQo6dfvMT0yRZQMQWbYQfxF8_rk6rhjKmHdo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.ImageButton[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
      name: 'in-app|V2azD9a-VDyHq47uYlHDjPMSAOX_fhdjvXVhjrIA9ZA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'in-app|ld2T2WV-mqyhJz_4ZjpFiDC6vbYnKvBjvYWmCYEEJsI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 38,
      name: 'in-app|tpJMIQjiULnA_A8sNlOcDwZySx2yVWQ_SmySqkOM_k0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="充值中心"] > android.view.View[id="main"] > android.view.View > android.widget.EditText[id="cic-box-input"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 39,
      name: 'in-app|8vpUj-_sGvugPWotvbGBZ5POGS33C9r_CVQO_u8Q5WQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
      name: 'in-app|UfUnTM_H5WFd5zDs9l0ac5GSmpaP0tU147vQkV9hnGQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 41,
      name: 'in-app|Ue1kH6MZK-JiEYilY3wlTo363i8nfcTyPpD0fIDRF8U=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView > android.webkit.WebView > android.view.View[id="main"] > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|ErenEFlXvk6ShxaC4CbajXQhShTPWnTVdmMDuXIXq4Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|6di1d5MEAx3f7jzUnmPTs2A4mmMRLCvmnEBtIQE1Qpg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
      name: 'in-app|1vEtug4G1LTU-BUXSXWQzj3xQF_32dYR3-kDGYPctXU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 45,
      name: 'in-app|F1TGlOxFyG_B5cJDk3LjxnxpbNjg6XTqzUccU_imuPw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 46,
      name: 'in-app|WOPmiYPSEJ4yOaJcJawUoAuHx20DqfiMVusMvWFGfJM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView > android.webkit.WebView > android.view.View[id="main"] > android.view.View[clickable=true] > android.view.View[id="pendant_container"][clickable=true] > android.view.View[id="rightPendantWrapper"] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 47,
      name: 'in-app|dsafjosSrZGiryvTku1NjyjKs_ez_zFMi_EfJQnE-aA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 48,
      name: 'in-app|DwEN8JmaxlfBeAaN2sevPuqo8DaTpYpsuCYDvKWW-bE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 49,
      name: 'in-app|k__VrupWAIQKLa2J3dOoWbSr-UcysnevDhqcxpissDc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 50,
      name: 'in-app|9og0IyKkSmIGYqKvHz3FpHS4ZLWrmryFfA_offs1fSs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 51,
      name: 'in-app|JUipU9RZLsAt4lag2qq6OinR-AvA10IJs4k6Q-HK8yg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 52,
      name: 'in-app|AwDhuy_pQJ4_juqB5KPZIw4UfcjwWaijaarwLQhPsjw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"][clickable=true] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.LinearLayout[id="com.xunmeng.pinduoduo:id/pdd"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 53,
      name: 'in-app|uozPLUIHk9ieqz5s0Y-mXeSrgzHqABt8DljKooszed4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.NewPageMaskActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 54,
      name: 'in-app|EgFZ3oENLidKexvZ9voOKJQqvxMCuhc2zEF-UmhKqF4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'android.widget.FrameLayout[desc="拍照搜索"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.view.ViewGroup[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout[id="com.xunmeng.pinduoduo:id/pdd"] > android.widget.FrameLayout > meco.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View[id="popupSlide"] > android.widget.Image[text="85df8e22-7fb3-436a-acdb-729122dc4789.png.slim"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
