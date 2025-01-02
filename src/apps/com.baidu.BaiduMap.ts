import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: 'in-app|IpF39fxK9MIfxJQQSmBZpRtfjgwOirt93CMJXN2Ov88=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="金币任务中心"][clickable=true] > android.view.View[clickable=true] > android.app.Dialog[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|InZxQFpKktvbVSqztZcrivGVi5gea_HzJxLFrIbeFJw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fullScreenCardContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/activityCard"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/push_activity_banner"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ImageView[desc="关闭"][id="com.baidu.BaiduMap:id/operational_activities_content_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|d980fW2NRiMs380pHjZL2cMfyQsiTkLacQw72DKxEik=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|6umQknx9tfUlHqvy3YV2B1pMUX7v06QSipfMevuL5SM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.view.View[id="com.android.systemui:id/cutout_space_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|emJEdv-OqV2ZLAyV2Bh9LDxS-FEUtd8TlUjxSkxmU3c=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|h2kxJjGPEqqdIt90hEgZJSko0HAJIFxi3mTbYtd3wtw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|leLcQZdN9M8u-Ngidks41QYbDvOYqhUbo1FU_-KmhU8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|lkR0umHx26CwM245IBapme99dm1mhPhIhCTutpCT3O4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/dialog_content"][clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/ll_dialog_btn"][clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_dialog_confirm"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'system|BWNhSSkqJ-XVXGiEb3gq1HpQAI-O6kjPbHYtc1vFELA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/persist_container"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/ufo_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/ufo_root"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|eAu9zJIj90FYpTyqNSZJJwibYjC6aGrQGaEfRygCeiE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fullScreenCardContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/activityCard"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/push_activity_banner"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ImageView[desc="关闭"][id="com.baidu.BaiduMap:id/operational_activities_content_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|qTNFQ_bo9T-bben1FyP4FMzS6GklndLXpsyeblgyE0U=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > androidx.recyclerview.widget.RecyclerView[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|C_ZwCiSDCJh2C21TIJ1xI2SOVBj3WPdAXwM7G5FgV_c=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/mapContainer"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/midBubble"][clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|8SXe9MPIew_r0uL0PkAVAansJeQ5MEbK8jxwocZzqq0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|XMBGb-r8PdrzsOoOK3GzqvkLRn3g20XS5t89kHTZFAI=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/sort_grid_view"][clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|m7qpf6HjjwXfPrMr-yfPc7nJ8IVsiT0QMLVZyjOo-TY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.TextView[text="暂不开启"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|kYuyYDCKaZLK0bcEfFhuaZerulpwvhAlD9564-2MXsc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fl_full_screen"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeList"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|T45gcbcbVupIexBsomritrSXBBeIePlVp_NLYxDJI9M=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/mapContainer"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/midBubble"][clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'system|UVSY-UM37hAqZnukcZ20oW6PqPQdFRelDj6QF7iT9yA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"][clickable=true] > android.widget.FrameLayout[id="android:id/custom"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.lbe.security.miui:id/permission_group_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|7Q5Jg4a9Cf2ofHh46mFfbdKNLX5a71TzYEGv9r9OWbg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/round_layout"][clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/confirm_tv"][text="同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|ky4AckER4-auEvTmJ-Wjf12VVJHSjsmncUMPSjWRANw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_root_layout"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_content_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/busline_goto_station_detail_page_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|bB5svm3gnblkSplPEDqfqAZ-J9WSdP2owttwYbCyTNU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/containerLayout"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/tvCancelButton"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|bRxNfgnLGH14rSRP2pyCsqXYlihIG-AffX_YE7qj9as=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/subscribePanel"][clickable=true] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|j05_fDFO8x9SLyNDAHQuyVkQ4Pq9GDzN99eQTWOdpZU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|AcAvExfB9iTvg2uGF-bkOMa9MhJmBM4ZIgBgO6sE84Q=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 24,
      name: 'in-app|75CDZ6FUybjSknfOF1IM_rBu78G9IpUmX4_wXEWfQw4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 25,
      name: 'in-app|esy3Bka15dsBW7uK8pIpGRZuNLmsmZy40TTqdzkAB1g=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 26,
      name: 'in-app|xwNTTSzVU9Prjlk0vO-ss-IgubTaNd_CdOPfkQWNI-4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/talos_dialog_root_view"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 27,
      name: 'in-app|pLP3-ET8BjPTyEQbmcF9PrF2AMWLN5yGhJAwIXzxzSY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 28,
      name: 'in-app|JKjJ36LkklKjzZ15mZ0UPM9vwhs83uMFuxPQoPKmlNU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/route_scene_container"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fl_full_screen"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="map.android.baidu.substitutedriving:id/tRootContainer"][clickable=true] > android.widget.FrameLayout[id="map.android.baidu.substitutedriving:id/tOutContent"][clickable=true] > android.view.ViewGroup[id="map.android.baidu.substitutedriving:id/tMainContainer"][clickable=true] > android.widget.LinearLayout[id="map.android.baidu.substitutedriving:id/tSlideContent"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ScrollView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 29,
      name: 'in-app|sgGe7MynmPT7la96H2EcDeiE9lgEdgEYKZc71p4jFi0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="美食品牌"][clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 30,
      name: 'in-app|B8Tch-6iohXI8umQHEPTqgh43Jru11nYrfUMjpwYgB4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 31,
      name: 'in-app|cZS3ysMmkI55v1KSb6JUhCE05tHP3EoTs1WnT8nFbTw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_root"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/searchbox_alert_dialog"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_customPanel"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/dialog_custom_content"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/auth_negative_button"][text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 32,
      name: 'in-app|_mkLKj05HGXYFD9z4cNZReKB_e7g3f6fZPzqNhnq1ck=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 33,
      name: 'in-app|5DMGy7InKfe7ltVrqu3IOEr-1aE_fH7W20RTk9O2BQw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/menu_grid_layout"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/menu_item_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 34,
      name: 'in-app|OxFZgu6TqfxXJD_VxggW10RsV4hnTQpJ08ekK_Bslew=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="map.android.baidu.substitutedriving:id/abs_content_bk_fl"][clickable=true] > android.widget.RelativeLayout[id="map.android.baidu.substitutedriving:id/abs_content_container_rl"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.TextView[id="map.android.baidu.substitutedriving:id/iKnowBtn"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 35,
      name: 'system|Iz42yXHVNj9HDj_0pIrkVhUXsg_WyvhtI0UBXZ5OQK4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="map.android.baidu.mapbasear:id/ar_translate_buttons"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 36,
      name: 'in-app|fYPloZhrSJoh1vpc0E9yKCJw8TjEeCWUcstez004CgQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomThreeStatusContainer"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/threeStatusContainer"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/bottomContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/homeRv"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/contentContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/topALL"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/functionTabContainer"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.baidu.BaiduMap:id/home_function_tab_recyclerView"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/img_home_function_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/img_home_function_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 37,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"][clickable=true] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 38,
      name: 'in-app|WZ6fu3cvpaZ6FtnsgndLWFVIjeTD8SyK1SxPwV9V5rs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frameLayout1"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="金币任务中心"][clickable=true] > android.view.View[id="app"][clickable=true] > android.view.View[id="root"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.app.Dialog[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 39,
      name: 'in-app|KHF7kXYIsZvg1JbxLxZHiBWlrKjsX92X9nEKzlnn0P0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/dialog_content"][clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/ll_dialog_btn"][clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_dialog_confirm"][text="去设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 40,
      name: 'in-app|RguzuGtLq3jQaOBP0ed54rfB6_KPHB4IX8o18m--Ocw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/tv_positive"][text="继续编辑"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 41,
      name: 'in-app|dI7B7GOThEZ51lK7s3EPpNgXhnTOSUj4Zbolkra6aQQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/push_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 42,
      name: 'in-app|-_M5r55iZet_EM_wqsoGJqRtOUMh6NiM3Wo_9wJetHc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 43,
      name: 'in-app|duhfnNFctovg6agplPKroYazXdaOJ74ipZi7HBzHIrk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/busline_subscribe_time_bottom_container"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/busline_subscribe_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 44,
      name: 'in-app|o5VmCLfw-Q6hxRYq-hBbR0AKQsetNhqzVHG_3Fun_SY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/round_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/voice_privacy_cancel_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 45,
      name: 'in-app|3yTzBGPtmcyOkYixXVyZM3N38TL-1JrVbH33Y9KePOs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/bus_line_focus_guide_pop_root_layout"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/bus_line_focus_guide_pop_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 46,
      name: 'in-app|t8uv2Lx3dKvdtH_AlH2Ar8c_BzwspVMWAZIRrOfQYSE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/closeShareLocationDialog"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 47,
      name: 'in-app|G4SXi8oE9SJ2oisgcTfFZ8nwfWl50w46PeAk87ODcwc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="com.baidu.BaiduMap:id/car_input_dialog_ok_button"][text="保存"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 48,
      name: 'system|zh7aLRuO_bOkZSLDc1lak67F7KbtjhwFaqCyYsFjnec=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.baidu.BaiduMap:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.baidu.BaiduMap:id/stack_root"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/fragment_container"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/replace_container"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ListView[id="com.baidu.BaiduMap:id/ListView_navsearch_hotkey"][clickable=true] > android.widget.FrameLayout[id="com.baidu.BaiduMap:id/frame_container"][clickable=true] > android.widget.RelativeLayout[id="com.baidu.BaiduMap:id/container"][clickable=true] > android.widget.ImageView[id="com.baidu.BaiduMap:id/divide_bottom_line"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
