import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: 'in-app|2klcGnNrsQr8InYZmGygLuHq3y-HX_nBL1EOjBY9osI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.kuaishou.nebula:id/widget_popup_bottom_anim_view"][clickable=true] > android.widget.ImageView[id="com.kuaishou.nebula:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|bUNWqqD7nu74t7z3jRMa5hI6zkZ31or69Lwwcfo-qCA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.TextView[desc="dialog_negative_view"][text="放弃奖励"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|heDvmcQeRsmcZftDiDp_CEzZsVPNSXfdpfnKDd-KaVs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.kuaishou.nebula:id/swipe"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/root"] > android.widget.RelativeLayout[id="com.kuaishou.nebula:id/root"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/webView"] > com.kuaishou.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|j6DgHkbppaCcAK6qgFea5IVYkFoFI9PAjPUsWpdPROc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.yxcorp.gifshow.profile.activity.AvatarActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.RelativeLayout[id="com.kuaishou.nebula:id/rn_container"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/kwai_rn_fragment_root"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/krn_content_container"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/krn_content_view"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/krn_container"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/krn_content_container"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|muvuKpeUmG3craDrzPhOk4f44g39lzgkse-a-6NbjKk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.kuaishou.nebula:id/swipe"] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/root"] > android.widget.RelativeLayout[id="com.kuaishou.nebula:id/root"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/webView"] > com.kuaishou.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|niswtZLtMcqHsSW24M-nHkjPDBDHQWL0k5ZxK8hH_E4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/home_activity_root"] > androidx.slidingpanelayout.widget.SlidingPaneLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.kuaishou.nebula:id/home_fragment_container"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/swipe"] > android.widget.FrameLayout > androidx.viewpager.widget.ViewPager > android.widget.FrameLayout > android.widget.FrameLayout[id="com.kuaishou.nebula:id/fragment_container"] > android.widget.RelativeLayout[id="com.kuaishou.nebula:id/home_center_task_root_view"] > android.widget.FrameLayout[id="com.kuaishou.nebula:id/webView"] > com.kuaishou.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|V6-xOebE3pDJr2fOFPBN9UePPNYBwgktzGRTUm2cALM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.kuaishou.nebula:id/button"] > android.widget.LinearLayout > android.widget.TextView[id="com.kuaishou.nebula:id/negative"][text="以后再说"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
