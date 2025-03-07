import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: 'in-app|qYbxIz5VNdDlAyFbhy17YG7osLh9CPuyqIgxVHvsZw8=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|mhp35S2N8LFukrEH_YoZzH1ULGtWQPMAIrkYCt8YnSo=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    },
    {
      key: 2,
      name: 'in-app|0s2E74UjNWxpy-JscmxqsR_GYlw6tatBShgfihk-WzY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      name: 'in-app|yk05ACr6j9jFXaAVXxS01SWAxv9Uv0ywnc44dwwIlBk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_detail_rlt"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/stock_detail_container"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/pullrefreshview"] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.stock:id/recycler_view"] > android.widget.FrameLayout[id="com.antfortune.wealth.stock:id/root_view"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RadioGroup[id="com.antfortune.wealth.stock:id/switch_tab_container"] > android.widget.RadioButton[text="趋势图"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|i8ym_syND9IkI3U3Q94QLDag4-gy7rEok4IM0-Oh_fs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|BqYAMtg6HiqA-FfSP2da1OPyxj6wLkjctJWKq8ccFs4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View[id="home-wrap"] > android.view.View[id="-s"] > android.view.View[id="-AH"] > android.view.View[id="-AI"] > android.view.View[id="appx_coverView_1"] > android.view.View[id="wrap-slider"] > android.view.View[id="scrollView"] > android.view.View[id="scrollViewId"] > android.view.View[id="scrollViewBody"] > android.view.View[id="-AU"] > android.view.View[id="-AZ"] > android.view.View[id="-Aa"] > android.view.View[id="-Ac"] > android.view.View[id="-IP"] > android.view.View[id="-Ii"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|lYRWE9FZ2vpd9gmMqcHwwKyxa4iNbTXJac-Jk_kVnrs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.alipay.mobile.beephoto:id/rl_content"] > android.widget.GridView[id="com.alipay.mobile.beephoto:id/gv_photo"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|7leTEY5aKZPr3H9pnq7gKeWjYbBDjFAjRDprXQdm9gk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 8,
      name: 'in-app|o-ZfD3mmV6qERuMc8casoCM7gEg-a8LFnw269r_WmEY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|tDEhlT9dwz8_32G8T3OWDoDIcSc4BHsONo7vTpq8axs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|FeIvs8S9a2pURgT6qRnib2L4fABgzCPNJYh4KHWALuY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 11,
      name: 'in-app|TbmnCcwgeiS8DEq8KQZLMIBDecguIbz3ESJdefGOLMk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/buttomButtonView"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|C5qt2kV5s0lT0Scygj2oOnW5qfqCddPLwxoi2sIgYxM=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|a4lpGSRttAz4nqVXWA90xgC1T5_iKY6eRgbhXv3Hs7s=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_panel_outside"][clickable=true] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/root"] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_dynamic"] > android.support.v7.widget.RecyclerView > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_right_container"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.alipay.mobile.beehive:id/right_arrow"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|168TOPhZVhugkfept7zWMf1tzSMnSR-zaj3ppXDfTVY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|XO52MhkPYtlJtgehR6hSxpEAaKMIMLrXC2BVcRidnqk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    },
    {
      key: 16,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|3JOtsTlHFGY-C8RMiAHKboknCLwd8p9DzeQytU9NDfw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 18,
      name: 'in-app|B-HdI6hOwZ_AJ_Duwwzd3DIab2m_lAlGdWXxjUhoQK8=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.antfortune.wealth.stock.StockMainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_main_rlt"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/portfolio_main_pullrefreshview"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/parent_scroll_view"] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/child"] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/portfolio_layout"] > android.widget.RelativeLayout > android.support.v4.view.ViewPager[id="com.antfortune.wealth.portfolio:id/stock_portfolio_viewpager"] > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/portfolio_fragment_item_container"] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.portfolio:id/stock_portfolio_list_view"] > android.widget.RelativeLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|QS1o0EeKH9xRjmZj99LDVyldiEqM0s494alNs5liguY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|QjhbYO160dnrmG-Q3jNqYXu9a6R4m8_ONjbZBLiBcIU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View[id="undefined"] > android.view.View[id="undefined"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|Ac9jXDPVcRgUCqM1Okycv5eV0dhMMB8MNBKBD9GSfAE=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 22,
      name: 'system|KvNlyOnE4Crxnvlemdh3Ug0ecefkrveN26-FkUMND4E=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.securitybiz:id/lay_item_container"] > android.widget.RelativeLayout[clickable=true] > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|Q3FVs1cyN3zxntormYHcG908Yz0FdAMv3Q_P0YAf5XY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_modal_dialog_layout"] > android.support.v7.widget.RecyclerView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_menu_top"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_layout"][clickable=true] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_icon_container"] > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_menu_item_iconfont"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|0v7Jy1VJS7vAVFT4vBNQN7XyleWLbyDWXkO1ZCX7Dvk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/root_view"] > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/activity_content"] > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/display_fragment"] > android.widget.RelativeLayout > android.widget.HorizontalScrollView[id="com.alipay.android.phone.businesscommon.globalsearch:id/search_tab_container"] > android.widget.LinearLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/search_tab_container_inner"] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.android.phone.businesscommon.globalsearch:id/tab_item_container"] > android.widget.ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|gwAfwfxOdGAS5fJe1NeLv4juy4WFusWs9Oeq8Rei47w=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|doCl1DEhk7i0ZYPcDCK0IrAEgSquAdl_IuPerIAFoew=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|-TjZGai3KWLM9Tedw_lIptMHslzclsp5j8iClbPiDig=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/dialogContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/dialogRealContainer"] > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonContainer"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|SGjxGNf7lKXffRd3aLxoXj60pyXCu5d3ybxBtsiBgVw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView[text="申请资料填写"] > android.view.View[id="app"] > android.view.View[id="base-info-container"] > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|pTgMq9--xBE5ot3PUorH9znE_xW4IYWWlIRlXi0yw6s=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|y12A9ZSr-PO03GVnwBt198WfE6NHE-LfDglcOjiPsGk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|d9V6Xg7T7wQUNj2AIXJSAYbGi0GbWBSdjRUgg90vgxc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|g54yKABcZ1O2RYkWRhiPPpYH6CKrynd6EG48t2V_W4o=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|8NWeZ3MiV21Lh4Ei9FmSV4ZQRYQrOmEbR-KGo5-xJeA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    },
    {
      key: 34,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.android.phone.home.market.AddToHomeActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'in-app|ddLqJ4Tqczh5sKdxi3Kksufqd_onEvns0cpWDE2nF7k=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.scan:id/title_bar_album"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
      name: 'in-app|j4z2GRSkJAmf-y3za4BIDRfou5aBMK8ho60sj4in31c=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.about.ui.AboutAlipayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'in-app|mcfz0Jn8azQWLw1ceu9JJgoJjXRLjvubS6qiVupsLgs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/buttonView"] > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 38,
      name: 'in-app|J_qsNshus0mRB7W5imYKOQrhZQU_t_rSEDMUvo6iHXY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 39,
      name: 'in-app|w3VpZUvHZ_mebxQjH24BYaN8lA9rS9lugQN02H2KC9s=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.widget.TextView[text="."]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
      name: 'in-app|T9tH7oL7lOskvYU0P8rWYKkedJ81PelK35kCK4vJ9fQ=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 41,
      name: 'in-app|lF87M-MAjGCUkIKG_iKWAbPCGvVTQ2lfNq-apE6690w=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/tip_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|OgtTK9Y8_mnJcPl7C3oxB3iFQXlg95PyIGMwN0Li3CY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.alipay.mobile.beehive:id/ll_root"] > android.widget.Button[id="com.alipay.mobile.beehive:id/btn_i_know"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|rHUCIRZPNeN-XZTP_ZSKeSVVncijgObNGkTz6ddfAH0=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.onsitepay.merge.OnsitepayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.alipay.mobile.onsitepay:id/title_bar"] > android.widget.FrameLayout[id="com.alipay.mobile.onsitepay:id/title_bar_back_button"][clickable=true] > android.widget.TextView[desc=" "][text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
      name: 'in-app|SjLIEyIzAn_dYjyYNn8PjNkvwXzJBTLVaexFFJfKIeo=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/buttomButtonView"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 45,
      name: 'in-app|KHbmXuVYYTgLJ_bgGRblgLsMaZjrtFuyQ9CsHHG-mUA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.beehive.cityselect.ui.CeilingHomeCitySelectActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 46,
      name: 'in-app|EyRAQ8R5lKNZnlqwEd8o-Zq924r6Wv6OuHpBPuzeZ1M=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ImageView[id="com.alipay.mobile.common.floating:id/float_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 47,
      name: 'in-app|JMt2AJ5ebWrLf8WKvSPkhamk6gIOPTkk7bSNuFf8RuA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.alipay.mobile.scan:id/title_bar_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 48,
      name: 'in-app|eqBGeOgiF9BhdKB6F7Et47xQSTcDzqNWvJsRWWE-YVU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 49,
      name: 'in-app|1U66qDAiAEzw3PE8hRc1NA1eQt4w62k7duEP_06BBTw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite5',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_root_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/nebulax_wrapper_view"] > android.widget.RelativeLayout[id="com.alipay.mobile.nebulax.integration:id/fragment_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.nebula:id/h5_web_content"] > android.widget.FrameLayout[id="com.alipay.mobile.nebula:id/h5_pc_container"] > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View[id="__react-content"] > android.view.View > android.view.View > android.widget.TextView[text="同意,继续使用"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 50,
      name: 'in-app|rQYt8xuz_1A1T9vb3sE-oY9rvt11dKTCKZJ6CA7QJFs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.beehive.cityselect.ui.SelectAreaActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.alipay.mobile.antui:id/btn_close"][clickable=true] > android.widget.TextView[desc=" "][text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 51,
      name: 'in-app|FuqWaIsFF6obNNBODOOpgZ89KqTSia5Q_eeazNPF6Fk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    },
    {
      key: 52,
      name: 'in-app|s77lZ8gi6YuAya7ZBcwPTCo8txyp0P1WdCHXl7H6U8E=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.alipay.mobile.antui:id/action_container"] > android.widget.ScrollView[id="com.alipay.mobile.antui:id/text_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.alipay.mobile.antui:id/info_head"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 53,
      name: 'in-app|vGoMR74SW2trrui3yvChzH2e91Tj6f4YJhdmYXoO99Y=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_main_rlt"] > android.widget.RelativeLayout[id="com.antfortune.wealth.stock:id/stock_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/portfolio_main_pullrefreshview"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.antfortune.wealth.portfolio:id/parent_scroll_view"] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/child"] > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/portfolio_layout"] > android.widget.RelativeLayout > android.support.v4.view.ViewPager[id="com.antfortune.wealth.portfolio:id/stock_portfolio_viewpager"] > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/portfolio_fragment_item_container"] > android.support.v7.widget.RecyclerView[id="com.antfortune.wealth.portfolio:id/stock_portfolio_list_view"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.antfortune.wealth.portfolio:id/add_footer_container"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.antfortune.wealth.portfolio:id/empty_card"] > android.widget.Button[id="com.antfortune.wealth.portfolio:id/add_stock"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 54,
      name: 'system|AbZPYWiv4uTG-Dla0cq2v2IDz1rZ5Rgl1VzY-dB0Mus=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
    },
  ],
});
