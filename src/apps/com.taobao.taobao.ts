import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: 'in-app|qCK1EaLBlAwEEPXEdoMVc0ZF2l39P1OkQLLO_caEqY0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.taobao.taobao:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbFragment"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tb_main_fragment"][clickable=true] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbTabFragment"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="全局互动层"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[text="O1CN01gIWbLi1wv3Qj1yXLh_!!6000000006369-2-tps-108-108.png_110x110q75.jpg_"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|036KoFRv8WOFzxSdwGGowVhIpmEDyl-h-tyIcxXD45M=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|iHTYJykVoT3y-9e9skUsmDa6399ve2dIRAOfLZ6FKi8=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|5Ma-YP3zz6pLfCUgoq21wkdZKCldTrM-hiwgzh3YJ8w=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.taobao.taobao:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbFragment"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tb_main_fragment"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|mccZxI7fCPUlWhS7pyLWCLXeV18GKoy3-p9QXg6eBFo=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.taobao.taobao:id/layermanager_penetrate_webview_container_id"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/poplayer_inner_view"][clickable=true] > android.widget.FrameLayout[id="com.taobao.taobao:id/poplayer_native_state_center_layout_frame_id"] > android.widget.ImageView[desc="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|b_jPjbimdXvysBHjBWROjjV52T1ha_Lf6Cft7OliclI=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|XY7Vxzqq3H3RkUtWV7Edk1YSmXQRStZ0mq4Y6W5o0Yk=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.taolive.room.TaoLiveVideoActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.taobao.taobao:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.taobao.taobao:id/taolive_root_view"] > android.support.v7.widget.RecyclerView[id="com.taobao.taobao:id/taolive_recyclerview"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/taolive_room_layout"] > android.support.v4.view.ViewPager[id="com.taobao.taobao.liveroom_android_plugin_AType:id/taolive_viewpager"] > android.widget.RelativeLayout[id="com.taobao.taobao.liveroom_android_plugin_AType:id/taolive_fullscreen_front"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="tblive-room-next-index"] > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|dN61ncRtitsbYrhU4AfcURY9ER8j-EyQR4CTwT75rVo=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|wT1tU4tGkoqvMXKdEwnlG7WVGsDDGamYGYhnHKlaz1c=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.taobao.taobao:id/ll_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|RIjDJsik3YQeVeCDOQ9eSJWdD4SGOdzWbvCodnSB8N0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|5-W-62Se6Qo6fGWywc4MiFmcTjvCAW_mjpwXcz4atww=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|W320Vb8g1NRDXi_-skO1Ro2BKUDRzqaj8OxjSxA_SgI=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.taobao.taobao:id/ll_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|gM2iyoSJk9f-MCp7LhVtonnKQ6z4H1f-uwQV7X8mGkU=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.ScrollView[id="android:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|J63Jv1mIUiL5FfRfH4ElLn5lfO8IOCr-awZNV_u2aek=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.TBMainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.taobao.taobao:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbFragment"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tb_main_fragment"][clickable=true] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbTabFragment"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="全局互动层"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[text="O1CN01gIWbLi1wv3Qj1yXLh_!!6000000006369-2-tps-108-108.png_110x110q75.jpg_"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|9dGfgPAeHWkV-1axivb1yrvUI9tSDDLKJS7II2pkf9g=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/pagegroup"] > android.widget.FrameLayout[id="com.taobao.taobao:id/pagecontent"] > android.widget.ScrollView[id="com.taobao.taobao:id/aliDetailNestedScrollContainer"] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView[id="com.taobao.taobao:id/mainpage2"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.taobao.taobao:id/tt_detail_header_contaner_view_id"] > android.view.ViewGroup[id="com.taobao.taobao:id/cl_dimension_container"] > android.widget.LinearLayout[id="com.taobao.taobao:id/ll_index_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|4SiVK_Xzu0z5Y7AwKZgYG-sQQ1vIrmAtu2yZEhQBZTA=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.taobao.taobao:id/layermanager_penetrate_webview_container_id"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[id="com.taobao.taobao:id/poplayer_inner_view"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView > android.view.View[id="root"] > android.view.View > android.view.View > android.view.View > android.widget.Image[text="O1CN01db8geS1QXdLJRv2c3_!!6000000001986-2-tps-26-26"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|bIhJolgYXmNDPJzCryAOGj6JA1c15FirMJw9ss6CNW4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|fCvYFh5fDJmGU2WoVV6EXHvOJsbJkZNDxxdIj7YrQpE=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[text="送你一笔现金，直接提现"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|UBnYEyqfvJdpmB-15xAmMVFMEuJX05fJ9WKyHkDCg6o=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.widget.Button[text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|-KhifSDM0l4wdk0lCadhsGobpeeY7xGGadcCaVcB1Ig=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|7S-Hls10M2e2HNpyo8hd1wIFZrcqAXIrv_bVYm-LRlk=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.taobao.taobao:id/update_dialog_rootView_v2"] > android.widget.LinearLayout[id="com.taobao.taobao:id/update_contentDialog_v2"] > android.widget.ImageView[id="com.taobao.taobao:id/update_imageview_cancel_v2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|U55aZkChCEGB6fm5JGx-4lObg4J7uuizJR9AKAL_YnQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|v5mRlFtsdAQmvkduI9wWX649ZtdtefODju4ALzkh75U=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|BmU3rzeBn_EYO9R0fYiapPQUc_MTYACYYedHh7iT1zs=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.taobao.taobao:id/uik_mdRoot"] > android.widget.ImageView[id="com.taobao.taobao:id/uik_mdButtonClose"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|p86UzaddMhs52Dvk0o1_2R4815mBOg4c4zuB8U8MZgk=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.view.View[id="com.taobao.taobao:id/uik_menu_panel_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|5Ny15XrTL5pp0o0zPqbr5axmAWASGuNStyOk6c8iXZ0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[text="送你一笔现金，直接提现"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="本次运行允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|PawtBJjPAFp_3Of6pbcHfR5r4ExfkGsLg0cju3wZoaA=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[id="redBagMod"] > android.widget.Button[text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|mbHHShYelfVjMxI44PI-jZtRabLfoCzDd-XR-4q4yGQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|rks682NsimMvQCICPtCqrZwrKpfmpyHTb-Au03fXt68=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/pagegroup"] > android.widget.FrameLayout[id="com.taobao.taobao:id/pagecontent"] > android.widget.ScrollView[id="com.taobao.taobao:id/aliDetailNestedScrollContainer"] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView[id="com.taobao.taobao:id/mainpage2"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.taobao.taobao:id/tt_detail_header_contaner_view_id"] > android.view.ViewGroup[id="com.taobao.taobao:id/cl_dimension_container"] > android.widget.LinearLayout[id="com.taobao.taobao:id/ll_index_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|cTOYlNbPT7WCnSNt5hbQWUmmOEC5wGC7MrfAW_nAFxo=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[text="送你一笔现金，直接提现"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|q2jd4qHeKsukwunCguE6asKp97YMsKgnXoPcBem-7iQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.taobao.taobao:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbFragment"] > android.widget.FrameLayout[id="com.taobao.taobao:id/tb_main_fragment"][clickable=true] > android.widget.FrameLayout[id="com.taobao.taobao:id/tbTabFragment"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="全局互动层"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[text="O1CN01gIWbLi1wv3Qj1yXLh_!!6000000006369-2-tps-108-108.png_110x110q75.jpg_"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|-1ZSx7HCv9f0Fsn9zDQaKsddmOh6Oxcs0uVV9nWN4J4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.taobao.taobao:id/tms_fragment_container"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="天天领钱"] > android.view.View[id="ice-container"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'system|QJa6OzJHO47gtw8K2gtXqJv42G1ca3UPuz7c736svTY=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
      name: 'in-app|SEGS_X6urq_RM2U8ihZYpmkz6sboLXvUH7fNxxhEI8c=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.uc.webview.export.WebView[desc="WVUCWebView"] > com.uc.aosp.android.webkit.m0 > android.webkit.WebView[text="红包签到"] > android.view.View[id="ice-container"][clickable=true] > android.app.Dialog > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[text="送你一笔现金，直接提现"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
