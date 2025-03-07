import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: 'in-app|qYbxIz5VNdDlAyFbhy17YG7osLh9CPuyqIgxVHvsZw8=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 1,
      name: 'in-app|mhp35S2N8LFukrEH_YoZzH1ULGtWQPMAIrkYCt8YnSo=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/penetrableLinearLayout_container"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/relativeLayout_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/frameLayout_rightButton1"] > android.widget.LinearLayout > android.widget.RelativeLayout[desc="Add to Home"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 2,
      name: 'in-app|0s2E74UjNWxpy-JscmxqsR_GYlw6tatBShgfihk-WzY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 3,
      name: 'in-app|yk05ACr6j9jFXaAVXxS01SWAxv9Uv0ywnc44dwwIlBk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_detail_rlt"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/stock_detail_container"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/pullrefreshview"] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.stock:id/recycler_view"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/root_view"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RadioGroup[id="com.antfortune.wealth.stock:id/switch_tab_container"] > android.widget.RadioButton[text="趋势图"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 4,
      name: 'in-app|i8ym_syND9IkI3U3Q94QLDag4-gy7rEok4IM0-Oh_fs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 5,
      name: 'in-app|BqYAMtg6HiqA-FfSP2da1OPyxj6wLkjctJWKq8ccFs4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 6,
      name: 'in-app|lYRWE9FZ2vpd9gmMqcHwwKyxa4iNbTXJac-Jk_kVnrs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.beehive.photo.ui.PhotoSelectActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.alipay.mobile.beephoto:id/rl_content"] > android.widget.GridView[id="com.alipay.mobile.beephoto:id/gv_photo"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 7,
      name: 'in-app|7leTEY5aKZPr3H9pnq7gKeWjYbBDjFAjRDprXQdm9gk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 8,
      name: 'in-app|o-ZfD3mmV6qERuMc8casoCM7gEg-a8LFnw269r_WmEY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 9,
      name: 'in-app|tDEhlT9dwz8_32G8T3OWDoDIcSc4BHsONo7vTpq8axs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 10,
      name: 'in-app|FeIvs8S9a2pURgT6qRnib2L4fABgzCPNJYh4KHWALuY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 11,
      name: 'in-app|TbmnCcwgeiS8DEq8KQZLMIBDecguIbz3ESJdefGOLMk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 12,
      name: 'in-app|C5qt2kV5s0lT0Scygj2oOnW5qfqCddPLwxoi2sIgYxM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 13,
      name: 'in-app|a4lpGSRttAz4nqVXWA90xgC1T5_iKY6eRgbhXv3Hs7s=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_panel_outside"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/root"] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_dynamic"] > android.support.v7.widget.RecyclerView > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 14,
      name: 'in-app|168TOPhZVhugkfept7zWMf1tzSMnSR-zaj3ppXDfTVY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 15,
      name: 'in-app|XO52MhkPYtlJtgehR6hSxpEAaKMIMLrXC2BVcRidnqk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_progress_rl"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 16,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 17,
      name: 'in-app|3JOtsTlHFGY-C8RMiAHKboknCLwd8p9DzeQytU9NDfw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 18,
      name: 'in-app|QS1o0EeKH9xRjmZj99LDVyldiEqM0s494alNs5liguY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 19,
      name: 'in-app|QjhbYO160dnrmG-Q3jNqYXu9a6R4m8_ONjbZBLiBcIU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 20,
      name: 'in-app|Ac9jXDPVcRgUCqM1Okycv5eV0dhMMB8MNBKBD9GSfAE=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 21,
      name: 'system|KvNlyOnE4Crxnvlemdh3Ug0ecefkrveN26-FkUMND4E=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.securitybiz:id/lay_item_container"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 22,
      name: 'in-app|Q3FVs1cyN3zxntormYHcG908Yz0FdAMv3Q_P0YAf5XY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_modal_dialog_layout"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_app_header_layout"] > android.widget.LinearLayout > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_enter_title_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 23,
      name: 'in-app|gwAfwfxOdGAS5fJe1NeLv4juy4WFusWs9Oeq8Rei47w=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 24,
      name: 'in-app|doCl1DEhk7i0ZYPcDCK0IrAEgSquAdl_IuPerIAFoew=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 25,
      name: 'in-app|-TjZGai3KWLM9Tedw_lIptMHslzclsp5j8iClbPiDig=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 26,
      name: 'in-app|SGjxGNf7lKXffRd3aLxoXj60pyXCu5d3ybxBtsiBgVw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 27,
      name: 'in-app|pTgMq9--xBE5ot3PUorH9znE_xW4IYWWlIRlXi0yw6s=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 28,
      name: 'in-app|y12A9ZSr-PO03GVnwBt198WfE6NHE-LfDglcOjiPsGk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 29,
      name: 'in-app|d9V6Xg7T7wQUNj2AIXJSAYbGi0GbWBSdjRUgg90vgxc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 30,
      name: 'in-app|g54yKABcZ1O2RYkWRhiPPpYH6CKrynd6EG48t2V_W4o=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 31,
      name: 'in-app|8NWeZ3MiV21Lh4Ei9FmSV4ZQRYQrOmEbR-KGo5-xJeA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/tab_container"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebula_tabbar_layout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 32,
      name: 'in-app|ddLqJ4Tqczh5sKdxi3Kksufqd_onEvns0cpWDE2nF7k=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.scan:id/title_bar_album"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 33,
      name: 'in-app|j4z2GRSkJAmf-y3za4BIDRfou5aBMK8ho60sj4in31c=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 34,
      name: 'in-app|mcfz0Jn8azQWLw1ceu9JJgoJjXRLjvubS6qiVupsLgs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 35,
      name: 'in-app|J_qsNshus0mRB7W5imYKOQrhZQU_t_rSEDMUvo6iHXY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 36,
      name: 'in-app|w3VpZUvHZ_mebxQjH24BYaN8lA9rS9lugQN02H2KC9s=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 37,
      name: 'in-app|T9tH7oL7lOskvYU0P8rWYKkedJ81PelK35kCK4vJ9fQ=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 38,
      name: 'in-app|lF87M-MAjGCUkIKG_iKWAbPCGvVTQ2lfNq-apE6690w=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_modal_dialog_layout"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_app_header_layout"] > android.widget.LinearLayout > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_enter_title_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 39,
      name: 'in-app|OgtTK9Y8_mnJcPl7C3oxB3iFQXlg95PyIGMwN0Li3CY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_root"] > android.widget.Button[id="com.alipay.mobile.beehive:id/btn_i_know"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 40,
      name: 'in-app|rHUCIRZPNeN-XZTP_ZSKeSVVncijgObNGkTz6ddfAH0=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.onsitepay.merge.OnsitepayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ScrollView[id="com.alipay.mobile.onsitepay:id/code_scroll_view"] > android.widget.LinearLayout[id="com.alipay.mobile.onsitepay:id/code_scroll_content"] > android.widget.LinearLayout[id="com.alipay.mobile.onsitepay:id/drawers"] > android.widget.FrameLayout[desc="Transfer Button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 41,
      name: 'in-app|SjLIEyIzAn_dYjyYNn8PjNkvwXzJBTLVaexFFJfKIeo=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/buttomButtonView"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttomButtonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/buttomButtonView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 42,
      name: 'in-app|KHbmXuVYYTgLJ_bgGRblgLsMaZjrtFuyQ9CsHHG-mUA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 43,
      name: 'in-app|EyRAQ8R5lKNZnlqwEd8o-Zq924r6Wv6OuHpBPuzeZ1M=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/photo_browse_view"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/v_pull_back"] > android.support.v4.view.ViewPager[id="com.alipay.mobile.beephoto:id/vp_base_app"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.alipay.mobile.beephoto:id/photoZone"] > android.widget.ImageView[id="com.alipay.mobile.beephoto:id/iv_content"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 44,
      name: 'in-app|JMt2AJ5ebWrLf8WKvSPkhamk6gIOPTkk7bSNuFf8RuA=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.scan:id/title_bar_album"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 45,
      name: 'in-app|eqBGeOgiF9BhdKB6F7Et47xQSTcDzqNWvJsRWWE-YVU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 46,
      name: 'in-app|1U66qDAiAEzw3PE8hRc1NA1eQt4w62k7duEP_06BBTw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 47,
      name: 'in-app|rQYt8xuz_1A1T9vb3sE-oY9rvt11dKTCKZJ6CA7QJFs=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 48,
      name: 'in-app|FuqWaIsFF6obNNBODOOpgZ89KqTSia5Q_eeazNPF6Fk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_progress_rl"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 49,
      name: 'in-app|s77lZ8gi6YuAya7ZBcwPTCo8txyp0P1WdCHXl7H6U8E=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 50,
      name: 'system|AbZPYWiv4uTG-Dla0cq2v2IDz1rZ5Rgl1VzY-dB0Mus=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
  ],
});
