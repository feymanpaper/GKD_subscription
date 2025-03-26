import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shuqi.controller',
  name: 'com.shuqi.controller',
  groups: [
    {
      key: 0,
      name: 'in-app|QbEgPtkqWlSmP6rDwuSzIi2gHM1lltNrqE0pJ1bQEGc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.home.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.shuqi.controller:id/home_tab_content"] > android.widget.RelativeLayout[desc="免费Tab根View"] > android.widget.RelativeLayout[desc="BookCityStateBase_BrowserState_transView"] > android.widget.RelativeLayout[id="com.shuqi.controller:id/browser_touch_intercept_layout"][desc="BrowserState"] > android.widget.LinearLayout[id="com.shuqi.controller:id/browser_browserview"][desc="ShuqiPullToRefreshWebView"] > android.widget.FrameLayout[desc="PullToRefreshBase_refreshableView_container"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > android.webkit.WebView > android.webkit.WebView[text="福利中心"] > android.view.View[id="app"] > android.view.View[id="16"][clickable=true] > android.view.View > android.view.View > android.widget.Image[text="IAQrQxO9SA0OKSheiOQBuJTvRGI75D3Rf2PWHOT97lA8939bKx7bAt0rKjfHFrRZALZZpKRPbBTrLKacbX7Gig1skooPoRij90e7P106MdJPn8+P84pOO9vznEAAAAASUVORK5CYII="][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|SeoY96tH6xdRkbXJMXqziL_HjQ4a6aiww6Cm4t7Fgiw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.reader.ShuqiReaderActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|5vrfb7QmEU3W34MCcgvyfrMj-x9ZjQ0T90WsV1SJFNU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|G9df7ixdrn1thHM_1Ku462oIA2EERPXb1wPNX4r8QfY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.home.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.shuqi.controller:id/home_tab_content"] > android.widget.RelativeLayout[desc="免费Tab根View"] > android.widget.RelativeLayout[desc="BookCityStateBase_BrowserState_transView"] > android.widget.RelativeLayout[id="com.shuqi.controller:id/browser_touch_intercept_layout"][desc="BrowserState"] > android.widget.LinearLayout[id="com.shuqi.controller:id/browser_browserview"][desc="ShuqiPullToRefreshWebView"] > android.widget.FrameLayout[desc="PullToRefreshBase_refreshableView_container"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > android.webkit.WebView > android.webkit.WebView[text="福利中心"] > android.view.View[id="app"] > android.view.View[id="247"][clickable=true] > android.view.View > android.view.View > android.widget.Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|NusnG4Rpj1Vx1jMSyL4VJ2dbv0_wZ8ZFvMOYynB8gq0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.shuqi.controller:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[desc="ActionBarActivity的根View"] > android.widget.LinearLayout > android.view.ViewGroup[id="com.shuqi.controller:id/my_read_ring_root"] > android.view.ViewGroup[id="com.shuqi.controller:id/cl_ring_title"] > android.widget.ImageView[id="com.shuqi.controller:id/iv_close_dialog"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|QE-gMWbe5eRVfo3u2H_mUIUXsr6eS1quclPe77qGdL4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|Wagf386-3K0QVauh8BM4ba6lBQeKgatMc5w5-iuk0tw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.shuqi.controller:id/close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|A8gdyW9RCxjaKH1ZN-7lu_9RWEvowxM0sgDYtHGODtc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.shuqi.controller:id/dialog_content_root_view"] > android.widget.LinearLayout[id="com.shuqi.controller:id/dialog_message_view"] > android.widget.LinearLayout[id="com.shuqi.controller:id/dialog_btnLayout"] > android.widget.LinearLayout > android.widget.TextView[id="com.shuqi.controller:id/dialogRightBtn"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|yhyKcE0R7SNZ6M5tbva3Fta7-im8nByhkuovQB1xanQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|KFTYN_fAcDm5jCksvqITCdfa48VOREFUWYSj6CeVFUQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|uS-hF0Jf2I2RsPSkhOkZcZ4tCMQ7czNrtYPXNXHIfl8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.category.sub.CategorySubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|4BqlA7-fGIObaNi5j6LrtmoiNxls3QonTZ7ucZhahvo=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.category.sub.CategorySubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|N--7Ktxnwz2MkXW_Gt_KgDnZNEo5yJLwFIyy7ac1RaI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.home.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.shuqi.controller:id/home_tab_content"] > android.widget.RelativeLayout[desc="免费Tab根View"] > android.widget.RelativeLayout[desc="BookCityStateBase_BrowserState_transView"] > android.widget.RelativeLayout[id="com.shuqi.controller:id/browser_touch_intercept_layout"][desc="BrowserState"] > android.widget.LinearLayout[id="com.shuqi.controller:id/browser_browserview"][desc="ShuqiPullToRefreshWebView"] > android.widget.FrameLayout[desc="PullToRefreshBase_refreshableView_container"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > android.webkit.WebView > android.webkit.WebView[text="福利中心"] > android.view.View[id="app"] > android.view.View[id="49"][clickable=true] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.browser.BrowserActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.aliwx.android.d.g > android.widget.RelativeLayout[desc="ActionBarActivity的根View"] > android.widget.RelativeLayout[id="com.shuqi.controller:id/browser_touch_intercept_layout"][desc="BrowserState"] > android.widget.LinearLayout[id="com.shuqi.controller:id/browser_browserview"][desc="ShuqiPullToRefreshWebView"] > android.widget.FrameLayout[desc="PullToRefreshBase_refreshableView_container"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > android.webkit.WebView > android.webkit.WebView[text="打卡挑战赛"] > android.view.View[id="app"] > android.view.View[id="3"] > android.view.View > android.view.View > android.widget.Image[text="x"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|qMx9KXu_J5R71mej7ifQC_MjRiA9q24h_WO6TF1SNKc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.browser.BrowserActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.aliwx.android.d.g > android.widget.RelativeLayout[desc="ActionBarActivity的根View"] > android.widget.RelativeLayout[id="com.shuqi.controller:id/browser_touch_intercept_layout"][desc="BrowserState"] > android.widget.LinearLayout[id="com.shuqi.controller:id/browser_browserview"][desc="ShuqiPullToRefreshWebView"] > android.widget.FrameLayout[desc="PullToRefreshBase_refreshableView_container"] > android.widget.FrameLayout > android.widget.FrameLayout > com.uc.webview.export.WebView[desc="WVUCWebView"] > android.webkit.WebView > android.webkit.WebView[text="打卡挑战赛"] > android.view.View[id="app"] > android.view.View[id="3"][clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|tJVIc1oLBDZQrao2-9swhsvJFH_Ut-wu1ch6fVbKOvM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|56qEdOWQW1Jf8HQ3qSqkWhOtBMmrM6SnpY0UXAPjsUI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ScrollView[id="com.shuqi.controller:id/page_content_scrollview"] > android.view.ViewGroup > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.shuqi.controller:id/voice_timing_container"] > android.widget.ImageView[id="com.shuqi.controller:id/iw_down_arrow"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|1i6IOAWt3rzhAS_F-5MGU9hRSByUKYQgaOErt60yvUE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.shuqi.bookstore.home.BookStoreTagSubActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.shuqi.controller:id/tpl_book_feedback_container"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|Jw9U0kPpQ3GCUGeFRMVwDXNGZU0uPFtESBvgINyFp-0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.activity.base.TTDelegateActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
