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
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout[desc="Add to Home"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RadioGroup > android.widget.RadioButton[text="趋势图"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[text="Go to Verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|BqYAMtg6HiqA-FfSP2da1OPyxj6wLkjctJWKq8ccFs4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="More"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|lYRWE9FZ2vpd9gmMqcHwwKyxa4iNbTXJac-Jk_kVnrs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.beehive.photo.ui.PhotoSelectActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.GridView > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|o-ZfD3mmV6qERuMc8casoCM7gEg-a8LFnw269r_WmEY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|a4lpGSRttAz4nqVXWA90xgC1T5_iKY6eRgbhXv3Hs7s=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.alipay.mobile.beehive:id/rl_panel_outside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|168TOPhZVhugkfept7zWMf1tzSMnSR-zaj3ppXDfTVY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.android.phone.home.market.AddToHomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|yBx5G6TLzsKT3m5sc3JshykVMz9eQYfexwHqat0eDmM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.antcardsdk.cardapp.CSPresentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.support.v4.view.ViewPager > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.Button[id="com.antfortune.wealth.portfolio:id/add_stock"][text="添加股票"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|QS1o0EeKH9xRjmZj99LDVyldiEqM0s494alNs5liguY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|QjhbYO160dnrmG-Q3jNqYXu9a6R4m8_ONjbZBLiBcIU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.support.v4.view.ViewPager > android.widget.ImageView[desc="推荐广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|Q3FVs1cyN3zxntormYHcG908Yz0FdAMv3Q_P0YAf5XY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_enter_title_icon"][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.HorizontalScrollView > android.widget.LinearLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|gwAfwfxOdGAS5fJe1NeLv4juy4WFusWs9Oeq8Rei47w=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|doCl1DEhk7i0ZYPcDCK0IrAEgSquAdl_IuPerIAFoew=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|-TjZGai3KWLM9Tedw_lIptMHslzclsp5j8iClbPiDig=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|SGjxGNf7lKXffRd3aLxoXj60pyXCu5d3ybxBtsiBgVw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[id="wtk-standardcard-baseInfoCommit"][text="同意合约条款并提交申请"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
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
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
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
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|g54yKABcZ1O2RYkWRhiPPpYH6CKrynd6EG48t2V_W4o=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.beehive.photo.ui.PhotoSelectActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.alipay.mobile.antui:id/ensure"][text="Enable"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout[desc="Add to Home"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|ddLqJ4Tqczh5sKdxi3Kksufqd_onEvns0cpWDE2nF7k=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.alipay.mobile.scan:id/title_bar_album"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|mcfz0Jn8azQWLw1ceu9JJgoJjXRLjvubS6qiVupsLgs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.socialtimelinesdk.ui.ShareFeedActivity_',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.alipay.mobile.antui:id/cancel"][text="Cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|lF87M-MAjGCUkIKG_iKWAbPCGvVTQ2lfNq-apE6690w=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.alipay.mobile.nebulax.integration:id/tiny_app_enter_title_icon"][text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|OgtTK9Y8_mnJcPl7C3oxB3iFQXlg95PyIGMwN0Li3CY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.Button[id="com.alipay.mobile.beehive:id/btn_i_know"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Return Button"][id="com.alipay.mobile.onsitepay:id/title_bar_back_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'in-app|SjLIEyIzAn_dYjyYNn8PjNkvwXzJBTLVaexFFJfKIeo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.AlipayLogin',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.Button[id="com.alipay.mobile.antui:id/buttomButtonView"][text="Next"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'in-app|EyRAQ8R5lKNZnlqwEd8o-Zq924r6Wv6OuHpBPuzeZ1M=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.beehive.photo.ui.PhotoPreviewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.support.v4.view.ViewPager > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[desc="Photo"][id="com.alipay.mobile.beephoto:id/iv_content"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 38,
      name: 'in-app|JMt2AJ5ebWrLf8WKvSPkhamk6gIOPTkk7bSNuFf8RuA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[desc="back"][id="com.alipay.mobile.scan:id/title_bar_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 39,
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
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.alipay.mywebview.sdk.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 41,
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|s77lZ8gi6YuAya7ZBcwPTCo8txyp0P1WdCHXl7H6U8E=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ScrollView > android.widget.RelativeLayout > android.widget.FrameLayout[desc="Cancel"][id="com.alipay.mobile.antui:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|vGoMR74SW2trrui3yvChzH2e91Tj6f4YJhdmYXoO99Y=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.antfortune.wealth.stock.StockMainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.support.v4.view.ViewPager > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.Button[id="com.antfortune.wealth.portfolio:id/add_stock"][text="添加股票"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
