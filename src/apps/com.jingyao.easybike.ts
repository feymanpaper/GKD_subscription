import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 0,
      name: 'in-app|2VOp1QmHf8goEiBLetzq4Qe4etXuD6fZE68ozk5YHNM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.hellobike.hitch.business.home.HitchMainActivityNew',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.jingyao.easybike:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.jingyao.easybike:id/creativeContainer"] > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|E_yCPO-22Bf29kgsBfrjknp95cVfQtavgDvt3fEdMMM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_fragment"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_web_content"] > android.widget.FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"] > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView[text="福利中心"] > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[text="好的"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|gPB3y9rj42S45euJJ4UuOu3BlZ_Z9Wkorrm-_eCTIyE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ImageView[id="com.jingyao.easybike:id/dialogCloseView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|guj-3nydXyQtFTvFhAqlrfWecYfC7qTWei1WnRHo0dk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_fragment"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_web_content"] > android.widget.FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"] > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView[text="臻有钱"] > android.view.View > android.view.View > android.widget.Image[text="gENrrooPRRSKS2nmR644j"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'system|OG3-m0skPG4b-Uf96clX8FA_IoGkx3v3RTaBkKAyOdQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|rlK8lK7qNHYfwcJbhenQkW1GGsFAWHfnKI5a042DaYw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_fragment"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_web_content"] > android.widget.FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"] > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView[text="哈啰充电"] > android.view.View > android.view.View > android.widget.Image[text="gENrrooPRRSKS2nmR644j"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|y8NdSevjD2URY8PHsJ-zyq_1x5iSpg2ZR8OI6y2Kbe4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_fragment"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.jingyao.easybike:id/h5_web_content"] > android.widget.FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"] > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView[text="哈啰充电"] > android.view.View[id="app"] > android.view.View > android.view.View[id="market_tianjiang_dialog"] > android.widget.Image[text="MWhg2_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
