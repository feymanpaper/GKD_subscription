import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: 'in-app|qYbxIz5VNdDlAyFbhy17YG7osLh9CPuyqIgxVHvsZw8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|mhp35S2N8LFukrEH_YoZzH1ULGtWQPMAIrkYCt8YnSo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/penetrableLinearLayout_container"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/relativeLayout_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/frameLayout_rightButton1"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[desc="Add to Home"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[text="大盘晴雨表"][clickable=true] > android.view.View[clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="更多指数"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|yk05ACr6j9jFXaAVXxS01SWAxv9Uv0ywnc44dwwIlBk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_detail_rlt"][clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/stock_detail_container"][clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/pullrefreshview"][clickable=true] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.stock:id/recycler_view"][clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/root_view"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RadioGroup[id="com.antfortune.wealth.stock:id/switch_tab_container"][clickable=true] > android.widget.RadioButton[text="趋势图"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|i8ym_syND9IkI3U3Q94QLDag4-gy7rEok4IM0-Oh_fs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|BqYAMtg6HiqA-FfSP2da1OPyxj6wLkjctJWKq8ccFs4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[id="home-wrap"][clickable=true] > android.view.View[id="-s"][clickable=true] > android.view.View[id="-AH"][clickable=true] > android.view.View[id="-AI"][clickable=true] > android.view.View[id="appx_coverView_1"][clickable=true] > android.view.View[id="wrap-slider"][clickable=true] > android.view.View[id="scrollView"][clickable=true] > android.view.View[id="scrollViewId"][clickable=true] > android.view.View[id="scrollViewBody"][clickable=true] > android.view.View[id="-AU"][clickable=true] > android.view.View[id="-AZ"][clickable=true] > android.view.View[id="-Aa"][clickable=true] > android.view.View[id="-Ac"][clickable=true] > android.view.View[id="-IP"][clickable=true] > android.view.View[id="-Ii"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|lYRWE9FZ2vpd9gmMqcHwwKyxa4iNbTXJac-Jk_kVnrs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.beephoto:id/rl_content"][clickable=true] > android.widget.GridView[id="com.alipay.mobile.beephoto:id/gv_photo"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|7leTEY5aKZPr3H9pnq7gKeWjYbBDjFAjRDprXQdm9gk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[text="申请资料填写"][clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[id="base-info-container"][clickable=true] > android.view.View[clickable=true] > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|o-ZfD3mmV6qERuMc8casoCM7gEg-a8LFnw269r_WmEY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[text="申请资料填写"][clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[id="base-info-container"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|tDEhlT9dwz8_32G8T3OWDoDIcSc4BHsONo7vTpq8axs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|FeIvs8S9a2pURgT6qRnib2L4fABgzCPNJYh4KHWALuY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/buttomButtonView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|a4lpGSRttAz4nqVXWA90xgC1T5_iKY6eRgbhXv3Hs7s=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_panel_outside"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/root"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_dynamic"][clickable=true] > android.support.v7.widget.RecyclerView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_right_container"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.beehive:id/right_arrow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|168TOPhZVhugkfept7zWMf1tzSMnSR-zaj3ppXDfTVY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Replace"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|XO52MhkPYtlJtgehR6hSxpEAaKMIMLrXC2BVcRidnqk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_progress_rl"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[text="大盘晴雨表"][clickable=true] > android.view.View[clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="更多指数"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|B-HdI6hOwZ_AJ_Duwwzd3DIab2m_lAlGdWXxjUhoQK8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.antfortune.wealth.stock.StockMainActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_main_rlt"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/portfolio_main_pullrefreshview"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/parent_scroll_view"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/child"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/portfolio_layout"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.support.v4.view.ViewPager[id="com.antfortune.wealth.portfolio:id/stock_portfolio_viewpager"][clickable=true] > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/portfolio_fragment_item_container"][clickable=true] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.portfolio:id/stock_portfolio_list_view"][clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|QS1o0EeKH9xRjmZj99LDVyldiEqM0s494alNs5liguY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|QjhbYO160dnrmG-Q3jNqYXu9a6R4m8_ONjbZBLiBcIU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[id="undefined"][clickable=true] > android.view.View[id="undefined"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|Ac9jXDPVcRgUCqM1Okycv5eV0dhMMB8MNBKBD9GSfAE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'system|KvNlyOnE4Crxnvlemdh3Ug0ecefkrveN26-FkUMND4E=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.securitybiz:id/lay_item_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|Q3FVs1cyN3zxntormYHcG908Yz0FdAMv3Q_P0YAf5XY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_modal_dialog_layout"][clickable=true] > android.support.v7.widget.RecyclerView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_menu_top"][clickable=true] > android.widget.RelativeLayout[desc="Add to Home screen"][id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_layout"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_icon_container"][clickable=true] > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_iconfont"][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|0v7Jy1VJS7vAVFT4vBNQN7XyleWLbyDWXkO1ZCX7Dvk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/root_view"][clickable=true] > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/activity_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/display_fragment"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.HorizontalScrollView[id="com.alipay.android.phone.businesscommon.globalsearch:id/search_tab_container"][clickable=true] > android.widget.LinearLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/search_tab_container_inner"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/tab_item_container"][clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|gwAfwfxOdGAS5fJe1NeLv4juy4WFusWs9Oeq8Rei47w=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|doCl1DEhk7i0ZYPcDCK0IrAEgSquAdl_IuPerIAFoew=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Allow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|-TjZGai3KWLM9Tedw_lIptMHslzclsp5j8iClbPiDig=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Allow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|SGjxGNf7lKXffRd3aLxoXj60pyXCu5d3ybxBtsiBgVw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[text="申请资料填写"][clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[id="base-info-container"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|pTgMq9--xBE5ot3PUorH9znE_xW4IYWWlIRlXi0yw6s=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|y12A9ZSr-PO03GVnwBt198WfE6NHE-LfDglcOjiPsGk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|d9V6Xg7T7wQUNj2AIXJSAYbGi0GbWBSdjRUgg90vgxc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|g54yKABcZ1O2RYkWRhiPPpYH6CKrynd6EG48t2V_W4o=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|8NWeZ3MiV21Lh4Ei9FmSV4ZQRYQrOmEbR-KGo5-xJeA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/penetrableLinearLayout_container"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/relativeLayout_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/frameLayout_rightButton1"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[desc="Add to Home"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.android.phone.home.market.AddToHomeActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'in-app|ddLqJ4Tqczh5sKdxi3Kksufqd_onEvns0cpWDE2nF7k=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.scan:id/title_bar_album"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
      name: 'in-app|j4z2GRSkJAmf-y3za4BIDRfou5aBMK8ho60sj4in31c=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.about.ui.AboutAlipayActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[desc="取消"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'in-app|mcfz0Jn8azQWLw1ceu9JJgoJjXRLjvubS6qiVupsLgs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"][clickable=true] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][text="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 38,
      name: 'in-app|J_qsNshus0mRB7W5imYKOQrhZQU_t_rSEDMUvo6iHXY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 39,
      name: 'in-app|w3VpZUvHZ_mebxQjH24BYaN8lA9rS9lugQN02H2KC9s=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="."][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
      name: 'in-app|T9tH7oL7lOskvYU0P8rWYKkedJ81PelK35kCK4vJ9fQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 41,
      name: 'in-app|lF87M-MAjGCUkIKG_iKWAbPCGvVTQ2lfNq-apE6690w=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/tip_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|OgtTK9Y8_mnJcPl7C3oxB3iFQXlg95PyIGMwN0Li3CY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_root"][clickable=true] > android.widget.Button[id="com.alipay.mobile.beehive:id/btn_i_know"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|rHUCIRZPNeN-XZTP_ZSKeSVVncijgObNGkTz6ddfAH0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.onsitepay.merge.OnsitepayActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.onsitepay:id/title_bar"][clickable=true] > android.widget.FrameLayout[desc="Return Button"][id="com.alipay.mobile.onsitepay:id/title_bar_back_button"][clickable=true] > android.widget.TextView[desc=" "][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
      name: 'in-app|SjLIEyIzAn_dYjyYNn8PjNkvwXzJBTLVaexFFJfKIeo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/buttomButtonView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 45,
      name: 'in-app|KHbmXuVYYTgLJ_bgGRblgLsMaZjrtFuyQ9CsHHG-mUA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.beehive.cityselect.ui.CeilingHomeCitySelectActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 46,
      name: 'in-app|EyRAQ8R5lKNZnlqwEd8o-Zq924r6Wv6OuHpBPuzeZ1M=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.alipay.mobile.common.floating:id/float_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 47,
      name: 'in-app|JMt2AJ5ebWrLf8WKvSPkhamk6gIOPTkk7bSNuFf8RuA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ImageView[desc="back"][id="com.alipay.mobile.scan:id/title_bar_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 48,
      name: 'in-app|eqBGeOgiF9BhdKB6F7Et47xQSTcDzqNWvJsRWWE-YVU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 49,
      name: 'in-app|1U66qDAiAEzw3PE8hRc1NA1eQt4w62k7duEP_06BBTw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[id="__react-content"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="同意,继续使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 50,
      name: 'in-app|rQYt8xuz_1A1T9vb3sE-oY9rvt11dKTCKZJ6CA7QJFs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.beehive.cityselect.ui.SelectAreaActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 51,
      name: 'in-app|FuqWaIsFF6obNNBODOOpgZ89KqTSia5Q_eeazNPF6Fk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_web_content"][clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_trans_progress_rl"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.alipay.mywebview.sdk.WebView[clickable=true] > android.webkit.WebView[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 52,
      name: 'in-app|s77lZ8gi6YuAya7ZBcwPTCo8txyp0P1WdCHXl7H6U8E=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"][clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.alipay.mobile.antui:id/info_head"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 53,
      name: 'in-app|vGoMR74SW2trrui3yvChzH2e91Tj6f4YJhdmYXoO99Y=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_main_rlt"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/portfolio_main_pullrefreshview"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/parent_scroll_view"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/child"][clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/portfolio_layout"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.support.v4.view.ViewPager[id="com.antfortune.wealth.portfolio:id/stock_portfolio_viewpager"][clickable=true] > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/portfolio_fragment_item_container"][clickable=true] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.portfolio:id/stock_portfolio_list_view"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/add_footer_container"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/empty_card"][clickable=true] > android.widget.Button[id="com.antfortune.wealth.portfolio:id/add_stock"][text="添加股票"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 54,
      name: 'system|AbZPYWiv4uTG-Dla0cq2v2IDz1rZ5Rgl1VzY-dB0Mus=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
