import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '天猫',
  groups: [
    {
      key: 0,
      name: 'in-app|3EFOb0JWjRXgpi3QKbc7zaAEZOXfG2navGFL3plccLM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天猫农场"] > android.view.View[clickable=true] > android.view.View[id="ice-container"][clickable=true] > android.view.View[id="app"] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|3ILxmRXB_f9S1xnPo7U6sOKsUSX6AQV94pAYxOIv2kY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View[id="com.tmall.wireless:id/navi_menu_bg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|6AzYIEVbvFBKlJDm3nvSg9PTva4BXD8DFJhNnDDDsT0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.share.activity.TMShareActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|ARz2OsyLwjWIuUXh-kMSTqg0wxUuCnSDlxuRzfLSO10=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天猫农场"] > android.view.View[clickable=true] > android.view.View[id="ice-container"][clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|E1B016xBR2ktE-8-3WSGHriRPlDJWlsBoj7V9nr5DV0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天猫农场"] > android.view.View[clickable=true] > android.view.View[id="ice-container"][clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View[id="faster-btn"] > android.widget.Button[text="1 累计能量 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|M1SC9eOz_ew-02ywRZD0rZixUYsXXWzLpQf6K-qGp_Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天猫APP多买多返"] > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|qRudBDhu3UlTjfshwPaBhae_cazgU8rQHEleRiV41B8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.view.View[id="com.tmall.wireless:id/uik_menu_panel_view"][desc="关闭浮层"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|rUEJeOsrJ0DxD1dCNieyVtFWJGms-DoU45y0ncXc56A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天猫农场"] > android.view.View[clickable=true] > android.view.View[id="ice-container"][clickable=true] > android.view.View[id="app"] > android.view.View > android.view.View[id="faster-btn"] > android.widget.Button[text="1 累计能量 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|_iTYCzmal0qthjRuNADiFO-Xzwxi5leSsT8lIBubrwI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.share.activity.TMShareActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
