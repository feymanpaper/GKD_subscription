import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 0,
      name: 'in-app|440p2VFC0SuMLaTXAWsb-wMnHPmA2chP0C0dcP1WHQs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.youku.unic.container.UnicContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.youku.phone:id/unic_container_content"][clickable=true] > android.widget.RelativeLayout[id="com.youku.phone:id/unicontainer_responsive_holder"][clickable=true] > android.widget.RelativeLayout[id="com.youku.phone:id/unicontainer_fragment"] > android.widget.RelativeLayout[id="com.youku.phone:id/unic_container_layout"] > android.widget.RelativeLayout[id="com.youku.phone:id/unicontainer_host"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.youku.phone:id/tab_page_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.youku.phone:id/pha_page_container"] > android.widget.FrameLayout[id="com.youku.phone:id/pha_view_pager_root_view"] > android.view.ViewGroup > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="会员聚划算"] > android.view.View > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true] > android.view.View[id="mainView"] > android.view.View > android.view.View > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|7ZwgYCFd7Z9z7pICSaaRRMrx_YajptVybwoKkwfrkO8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.youku.weex.WXPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.youku.phone:id/rootView"] > android.widget.FrameLayout[id="com.youku.phone:id/weex_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|bKM0-LhT2-lABgyCe8lbsSMmelJH3_HGqWPMS81i74I=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.youku.phone:id/yk_dialog_root"] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/yk_dialog_confirm"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|JcziNs4IVV9OoXNC2c85TRJmbRcWjtG-YQ47VXDFbFs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.youku.android.paysdk.cashier.VipPaymentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.youku.phone:id/payment_root"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.youku.phone:id/vip_weex_render_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|LkOJZXcbYdMHPQ-v1haHOpSm_8OCzYLcYFiU1Rk_-iU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/dialog_ok_button"][text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|wq7a_wuoCe9ntdPSeMqTi7n2gu8CxSEhKk-WPtN_070=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.youku.phone:id/planet_half_weex_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.youku.phone:id/success_view"] > android.widget.FrameLayout[id="android:id/empty"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
