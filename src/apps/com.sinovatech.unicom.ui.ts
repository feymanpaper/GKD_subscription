import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 0,
      name: 'in-app|-g-oyOHBA-zEYZp8gJeKE5hNwMlXl1OMdmd8pRUJTlE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="办理副卡"] > android.view.View > android.view.View[id="app"] > android.view.View[id="logBox"] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|-GWuFlKxXXV4ybCNUdigIF7fFAJCqfOWWSC8qr3jZyE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="联通王卡（新）"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="立即领取"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|429DW9_FWGjt5hEGaT1p1Gk08EFigCmz4Q3o64aplR8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="宽带新装"] > android.view.View[id="app"] > android.view.View[id="templateLandingPage"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[desc="javascript:;"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|6LrSRLYwwC4JQbV5cnSaV2lEORJx6bHJ7Yzbssfzssk=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_title_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_normal_layout"] > android.widget.LinearLayout > android.widget.ImageView[id="com.sinovatech.unicom.ui:id/web_close"][desc="退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|8m24OHkZqSzgilFzqmP1Fk3k4psaE9de4VnO8RJ-8qc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="套餐专区"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|DOFxOGP7bVRuznDnBeUUvFTujhmIUkakSo97uozdjdI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="宽带新装"] > android.view.View > android.view.View[id="app"] > android.view.View[id="templateLandingPage"] > android.view.View > android.view.View[id="protocolPopup"] > android.view.View[id="success-popup"] > android.view.View > android.view.View[desc="javascript:;"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|DtSzgJqAvGlD2NakOf-0HZBVzms8-Pp2vO2N2oMXZos=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="宽带新装"] > android.view.View[id="app"] > android.view.View[id="templateLandingPage"] > android.view.View > android.view.View[id="protocolPopup"] > android.view.View[id="success-popup"] > android.view.View > android.view.View[desc="javascript:;"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|HjfKfPxPCB-c4gLhe46jpNUivmMu-X8KNQ6k04yHdTg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ListView[id="com.sinovatech.unicom.ui:id/webdetail_more_listview"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|TT8z-98DlIv0xC095tAYv2fg-Mr3AB7cGY4rg_28RVY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="宽带新装"] > android.view.View[id="app"] > android.view.View[id="templateLandingPage"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[desc="javascript:;"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|Z7Q4bZ0y8-gkXpnWmC648I8vyWLSNcHftKHWeHJR5IM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sinovatech.unicom.ui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/web_liner_layout"] > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/root_layout"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.sinovatech.unicom.ui:id/webdetail_contentroot_layout"] > android.widget.RelativeLayout > android.webkit.WebView > android.webkit.WebView[text="亲子卡（基础版）"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="等待业务专家为您选套餐"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
