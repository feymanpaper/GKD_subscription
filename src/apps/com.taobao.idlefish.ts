import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
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
      key: 1,
      name: 'in-app|czUxGZK6Vg7HmFSNLqIPLutvGEmS1K0Z93xW_iC0UxY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.webview.WebHybridActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.taobao.idlefish:id/web_root"] > android.widget.FrameLayout[id="com.taobao.idlefish:id/fish_web_root_layout"] > android.widget.FrameLayout[id="com.taobao.idlefish:id/webview_layout"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="闲鱼币首页"] > android.view.View[clickable=true] > android.view.View > android.view.View[id="contentWrap"] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|m2dAmp0bry5DFmjXz5d0kEVmawYHlFW1wzBPLljCJlQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.ImageView[desc="加入黑名单，他不能再给你发留言或消息，他的商品也不会再进入你的搜索和推荐结果，并且他不能拍下你的商品"][clickable=true] > android.widget.Button[desc="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
