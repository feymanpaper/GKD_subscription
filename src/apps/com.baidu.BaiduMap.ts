import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: 'in-app|IpF39fxK9MIfxJQQSmBZpRtfjgwOirt93CMJXN2Ov88=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"] > android.webkit.WebView > android.webkit.WebView[text="金币任务中心"] > android.view.View[clickable=true] > android.app.Dialog > android.view.View > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|InZxQFpKktvbVSqztZcrivGVi5gea_HzJxLFrIbeFJw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fullScreenCardContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/activityCard"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/push_activity_banner"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|d980fW2NRiMs380pHjZL2cMfyQsiTkLacQw72DKxEik=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.widget.TextView',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|6umQknx9tfUlHqvy3YV2B1pMUX7v06QSipfMevuL5SM=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"] > android.view.View[id="com.android.systemui:id/cutout_space_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|emJEdv-OqV2ZLAyV2Bh9LDxS-FEUtd8TlUjxSkxmU3c=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|h2kxJjGPEqqdIt90hEgZJSko0HAJIFxi3mTbYtd3wtw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|leLcQZdN9M8u-Ngidks41QYbDvOYqhUbo1FU_-KmhU8=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"] > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|lkR0umHx26CwM245IBapme99dm1mhPhIhCTutpCT3O4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.baidu.BaiduMap:id/dialog_content"] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/ll_dialog_btn"] > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_dialog_confirm"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'system|BWNhSSkqJ-XVXGiEb3gq1HpQAI-O6kjPbHYtc1vFELA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/persist_container"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/ufo_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/ufo_root"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|eAu9zJIj90FYpTyqNSZJJwibYjC6aGrQGaEfRygCeiE=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fullScreenCardContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/activityCard"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/push_activity_banner"] > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|qTNFQ_bo9T-bben1FyP4FMzS6GklndLXpsyeblgyE0U=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|C_ZwCiSDCJh2C21TIJ1xI2SOVBj3WPdAXwM7G5FgV_c=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/mapContainer"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/midBubble"] > android.widget.RelativeLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|8SXe9MPIew_r0uL0PkAVAansJeQ5MEbK8jxwocZzqq0=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|XMBGb-r8PdrzsOoOK3GzqvkLRn3g20XS5t89kHTZFAI=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"] > android.widget.FrameLayout > android.widget.RelativeLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/sort_grid_view"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|m7qpf6HjjwXfPrMr-yfPc7nJ8IVsiT0QMLVZyjOo-TY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[clickable=true] > android.widget.TextView[text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|kYuyYDCKaZLK0bcEfFhuaZerulpwvhAlD9564-2MXsc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fl_full_screen"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeList"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|T45gcbcbVupIexBsomritrSXBBeIePlVp_NLYxDJI9M=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/mapContainer"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/midBubble"] > android.widget.RelativeLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'system|UVSY-UM37hAqZnukcZ20oW6PqPQdFRelDj6QF7iT9yA=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.ImageView[id="com.lbe.security.miui:id/permission_group_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|7Q5Jg4a9Cf2ofHh46mFfbdKNLX5a71TzYEGv9r9OWbg=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[id="com.baidu.BaiduMap:id/round_layout"] > android.widget.TextView[id="com.baidu.BaiduMap:id/confirm_tv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|ky4AckER4-auEvTmJ-Wjf12VVJHSjsmncUMPSjWRANw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_root_layout"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_content_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|bB5svm3gnblkSplPEDqfqAZ-J9WSdP2owttwYbCyTNU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/containerLayout"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/tvCancelButton"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|bRxNfgnLGH14rSRP2pyCsqXYlihIG-AffX_YE7qj9as=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/subscribePanel"] > android.widget.LinearLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|j05_fDFO8x9SLyNDAHQuyVkQ4Pq9GDzN99eQTWOdpZU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|AcAvExfB9iTvg2uGF-bkOMa9MhJmBM4ZIgBgO6sE84Q=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|75CDZ6FUybjSknfOF1IM_rBu78G9IpUmX4_wXEWfQw4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"] > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|esy3Bka15dsBW7uK8pIpGRZuNLmsmZy40TTqdzkAB1g=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|xwNTTSzVU9Prjlk0vO-ss-IgubTaNd_CdOPfkQWNI-4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|pLP3-ET8BjPTyEQbmcF9PrF2AMWLN5yGhJAwIXzxzSY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"] > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|JKjJ36LkklKjzZ15mZ0UPM9vwhs83uMFuxPQoPKmlNU=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fl_full_screen"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="map.android.baidu.substitutedriving:id/tRootContainer"] > android.widget.FrameLayout[id="map.android.baidu.substitutedriving:id/tOutContent"] > android.view.ViewGroup[id="map.android.baidu.substitutedriving:id/tMainContainer"] > android.widget.LinearLayout[id="map.android.baidu.substitutedriving:id/tSlideContent"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.ScrollView',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|sgGe7MynmPT7la96H2EcDeiE9lgEdgEYKZc71p4jFi0=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"] > android.webkit.WebView > android.webkit.WebView[text="美食品牌"] > android.view.View[id="app"] > android.view.View > android.view.View',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|B8Tch-6iohXI8umQHEPTqgh43Jru11nYrfUMjpwYgB4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|cZS3ysMmkI55v1KSb6JUhCE05tHP3EoTs1WnT8nFbTw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_root"] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/searchbox_alert_dialog"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_customPanel"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_custom_content"] > android.widget.ScrollView > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.baidu.BaiduMap:id/auth_negative_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|_mkLKj05HGXYFD9z4cNZReKB_e7g3f6fZPzqNhnq1ck=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"] > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|5DMGy7InKfe7ltVrqu3IOEr-1aE_fH7W20RTk9O2BQw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[id="com.baidu.BaiduMap:id/menu_grid_layout"] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/menu_item_img"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
      name: 'in-app|OxFZgu6TqfxXJD_VxggW10RsV4hnTQpJ08ekK_Bslew=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="map.android.baidu.substitutedriving:id/abs_content_bk_fl"][clickable=true] > android.widget.RelativeLayout[id="map.android.baidu.substitutedriving:id/abs_content_container_rl"] > android.widget.RelativeLayout > android.widget.TextView[id="map.android.baidu.substitutedriving:id/iKnowBtn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'system|Iz42yXHVNj9HDj_0pIrkVhUXsg_WyvhtI0UBXZ5OQK4=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="map.android.baidu.mapbasear:id/ar_translate_buttons"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
      name: 'in-app|fYPloZhrSJoh1vpc0E9yKCJw8TjEeCWUcstez004CgQ=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"] > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
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
      key: 38,
      name: 'in-app|WZ6fu3cvpaZ6FtnsgndLWFVIjeTD8SyK1SxPwV9V5rs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"] > android.webkit.WebView > android.webkit.WebView[text="金币任务中心"] > android.view.View[id="app"] > android.view.View[id="root"] > android.view.View > android.view.View > android.app.Dialog > android.view.View > android.view.View > android.widget.TextView',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 39,
      name: 'in-app|KHF7kXYIsZvg1JbxLxZHiBWlrKjsX92X9nEKzlnn0P0=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.baidu.BaiduMap:id/dialog_content"] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/ll_dialog_btn"] > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_dialog_confirm"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
      name: 'in-app|RguzuGtLq3jQaOBP0ed54rfB6_KPHB4IX8o18m--Ocw=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_positive"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 41,
      name: 'in-app|dI7B7GOThEZ51lK7s3EPpNgXhnTOSUj4Zbolkra6aQQ=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/push_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|-_M5r55iZet_EM_wqsoGJqRtOUMh6NiM3Wo_9wJetHc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|duhfnNFctovg6agplPKroYazXdaOJ74ipZi7HBzHIrk=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/busline_subscribe_time_bottom_container"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/busline_subscribe_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
      name: 'in-app|o5VmCLfw-Q6hxRYq-hBbR0AKQsetNhqzVHG_3Fun_SY=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[id="com.baidu.BaiduMap:id/round_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/voice_privacy_cancel_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 45,
      name: 'in-app|3yTzBGPtmcyOkYixXVyZM3N38TL-1JrVbH33Y9KePOs=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/bus_line_focus_guide_pop_root_layout"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/bus_line_focus_guide_pop_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 46,
      name: 'in-app|t8uv2Lx3dKvdtH_AlH2Ar8c_BzwspVMWAZIRrOfQYSE=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.ImageView[id="com.baidu.BaiduMap:id/closeShareLocationDialog"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 47,
      name: 'in-app|G4SXi8oE9SJ2oisgcTfFZ8nwfWl50w46PeAk87ODcwc=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.TextView[id="com.baidu.BaiduMap:id/car_input_dialog_ok_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 48,
      name: 'system|zh7aLRuO_bOkZSLDc1lak67F7KbtjhwFaqCyYsFjnec=.png',
      actionDelay: 1000,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"] > android.view.ViewGroup > android.widget.ListView[id="com.baidu.BaiduMap:id/ListView_navsearch_hotkey"] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frame_container"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/container"] > android.widget.ImageView[id="com.baidu.BaiduMap:id/divide_bottom_line"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
