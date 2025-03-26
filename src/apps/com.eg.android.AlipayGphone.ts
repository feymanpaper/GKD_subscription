import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: 'com.eg.android.AlipayGphone',
  groups: [
    {
      key: 0,
      name: 'in-app|YXfZI22wzt6E6FuSmL3YjtXRO7jNvSyHeTDV7Z5Mafo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="蚂蚁森林"] > android.view.View[clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[id="J_app_outter"] > android.view.View[id="J_appFlow"] > android.view.View > android.view.View[clickable=true] > android.app.Dialog > android.widget.Button[id="cdpBottomPopup-close"][text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|qYbxIz5VNdDlAyFbhy17YG7osLh9CPuyqIgxVHvsZw8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|0s2E74UjNWxpy-JscmxqsR_GYlw6tatBShgfihk-WzY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="大盘晴雨表"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="更多指数"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|i8ym_syND9IkI3U3Q94QLDag4-gy7rEok4IM0-Oh_fs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[text="Go to Verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|BqYAMtg6HiqA-FfSP2da1OPyxj6wLkjctJWKq8ccFs4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/penetrableLinearLayout_container"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/relativeLayout_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/frameLayout_rightButton1"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="More"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|7leTEY5aKZPr3H9pnq7gKeWjYbBDjFAjRDprXQdm9gk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|o-ZfD3mmV6qERuMc8casoCM7gEg-a8LFnw269r_WmEY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|FeIvs8S9a2pURgT6qRnib2L4fABgzCPNJYh4KHWALuY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|C5qt2kV5s0lT0Scygj2oOnW5qfqCddPLwxoi2sIgYxM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|3JOtsTlHFGY-C8RMiAHKboknCLwd8p9DzeQytU9NDfw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="大盘晴雨表"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.widget.TextView[text="更多指数"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|QS1o0EeKH9xRjmZj99LDVyldiEqM0s494alNs5liguY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|QjhbYO160dnrmG-Q3jNqYXu9a6R4m8_ONjbZBLiBcIU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.support.v4.view.ViewPager > android.widget.ImageView[desc="推荐广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|Ac9jXDPVcRgUCqM1Okycv5eV0dhMMB8MNBKBD9GSfAE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="app"][clickable=true] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|gwAfwfxOdGAS5fJe1NeLv4juy4WFusWs9Oeq8Rei47w=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][desc="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|doCl1DEhk7i0ZYPcDCK0IrAEgSquAdl_IuPerIAFoew=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Allow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|-TjZGai3KWLM9Tedw_lIptMHslzclsp5j8iClbPiDig=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Allow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|SGjxGNf7lKXffRd3aLxoXj60pyXCu5d3ybxBtsiBgVw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|y12A9ZSr-PO03GVnwBt198WfE6NHE-LfDglcOjiPsGk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|d9V6Xg7T7wQUNj2AIXJSAYbGi0GbWBSdjRUgg90vgxc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|g54yKABcZ1O2RYkWRhiPPpYH6CKrynd6EG48t2V_W4o=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|j4z2GRSkJAmf-y3za4BIDRfou5aBMK8ho60sj4in31c=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][desc="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|OgtTK9Y8_mnJcPl7C3oxB3iFQXlg95PyIGMwN0Li3CY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_root"] > android.widget.Button[id="com.alipay.mobile.beehive:id/btn_i_know"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|SjLIEyIzAn_dYjyYNn8PjNkvwXzJBTLVaexFFJfKIeo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][desc="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|KHbmXuVYYTgLJ_bgGRblgLsMaZjrtFuyQ9CsHHG-mUA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][desc="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|EyRAQ8R5lKNZnlqwEd8o-Zq924r6Wv6OuHpBPuzeZ1M=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/photo_browse_view"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/v_pull_back"] > android.support.v4.view.ViewPager[id="com.alipay.mobile.beephoto:id/vp_base_app"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/photoZone"] > android.widget.ImageView[id="com.alipay.mobile.beephoto:id/iv_content"][desc="Photo"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|1U66qDAiAEzw3PE8hRc1NA1eQt4w62k7duEP_06BBTw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|rQYt8xuz_1A1T9vb3sE-oY9rvt11dKTCKZJ6CA7QJFs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][desc="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|5i7DQylm9AD2hG0HSNs6oljA5UpZcbiQRvhtKzqZyA8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View[id="p-2021002190662542-lottie-light-bc"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
