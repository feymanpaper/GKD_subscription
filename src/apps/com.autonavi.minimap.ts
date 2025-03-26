import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: 'in-app|dZEuYAdvANkB0l73uObdwJytXClnWP1FR7GvKEJO2fU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|_YyaanZnDkcnJcPFTe5XoHLALqFSHVLsoOhmC0GI8K4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|88b-rapLvZxpMkaeSNbRbHqhy0a0kyqWJ8O5MwneoAc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|9y1l3Vgvc3YzCcrg_SxXWKzrfhUDen4ub8o0WgTrr6o=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/webview_layout_container"] > android.widget.RelativeLayout[id="com.autonavi.minimap:id/load_webview_layout"] > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView[text="会员福利中心"] > android.view.View[id="app"] > android.view.View > android.view.View[id="wrapperRef"] > android.view.View > android.view.View > android.view.View[text="我再看看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|-zAZZ49pv00gM_5dzcaRVYd1QJ0NYFNZ8tWPPqqqHbM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|8-n6bE3Rfh9gWuVCsjonh56ROol7QjBr2ngNCdwKb4A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|4372pJYfQb3CTTxfwdeRUrCKM3RZIv9eCommDr4ygs8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.autonavi.minimap:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.autonavi.minimap:id/buttonPanel"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/button_container"] > android.widget.Button[id="com.autonavi.minimap:id/button3"][text="设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|iqDzhZc1LNwjzw1U_hdcmBl723dLxa9aaolrC338hTk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|6-TgyVYjSKYvOnHL909rBU9EUyaTxmwyWTAudzwFwvk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|48i0lCF2hUpI0K_D3utwn45sF-a3563NV2PtlX5Kbsg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > com.autonavi.minimap.ajx3.widget.view.SpringScrollView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|aAwrHcBRfwcZdI6KdAWlVCf6y710tn9QspXdjnWL-vI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|m9X4sk9ucctvEmyN2EGLfFzB0afFPWDzvxqdJQDQ_nA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/webview_layout_container"] > android.widget.RelativeLayout[id="com.autonavi.minimap:id/load_webview_layout"] > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView > android.view.View > android.view.View[id="app"] > android.view.View[id="app-index"] > android.view.View > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|nkUMEW2ZqE8seaJLW512RCUBEd6ritZsjHGucwCWkgQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.autonavi.minimap:id/parentPanel"][clickable=true] > android.widget.FrameLayout[id="com.autonavi.minimap:id/customPanel"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/custom"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.autonavi.minimap:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|3j4AoLdCy7zFeMM4MhzfaQSYcm4vG1tLAC6G_SPi56s=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|07xhHr8vxyCkxmHdEa-MjAF6Nz4QlQ__ChdQU63gl_A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|woTi_SlcOnyp504m3thDaFYq6I43phEzbVfyvHzmRj0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/webview_layout_container"] > android.widget.RelativeLayout[id="com.autonavi.minimap:id/load_webview_layout"] > android.widget.FrameLayout > com.uc.webview.export.WebView > com.uc.webkit.bc > android.webkit.WebView > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
