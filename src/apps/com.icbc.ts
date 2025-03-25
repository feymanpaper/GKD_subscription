import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: 'in-app|1DDcRsX62wbYKLmE5CPM4kyf2htUqr5d8eJmEuIMVso=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.GridView[id="com.icbc:id/ebdpshr_share_gv"] > android.widget.LinearLayout[id="com.icbc:id/ebdpshr_item_layout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|bQAr1GC65if6F3eGLpLM35-j2eJHifGYQsMjgieGgQY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.icbc:id/buttons"] > android.widget.TextView[id="com.icbc:id/button_next_time"][text="下次再说"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|haCM8e56tfS5tXJDK1hLNWyNfE7BwDgHDUlsLKqVV3s=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.icbc:id/rootview"] > android.widget.LinearLayout[id="com.icbc:id/linearLayout1"] > android.widget.FrameLayout[id="com.icbc:id/body"] > android.webkit.WebView > android.webkit.WebView > android.view.View[id="alert_dialog"] > android.app.Dialog[id="myModal"][text="提示"][clickable=true] > android.view.View > android.view.View > android.widget.Button[id="myModalBtn"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|IP_vzz8VL7uXJ4bYqxzVnc_ejbiQXeTxS8UjR0Ikgxw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ScrollView > android.widget.TextView[id="com.icbc:id/content"][text="识别构件下载成功，请您重新进入此页面"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|o9LlYTmRWRod6jzhoMRXD3k7KXH_LEmY0SpaaDHtFwg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.web.ICBCWebViewToExternal',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|Q-YyqdISQIo_bSXEoYgQxEcD3fG4khYIERtc-CYMJts=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.Button[id="com.icbc:id/btn_open"][text="开启快速交易"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|UmLFlSDb3RIVLYQdbW1U4o7VJg4MI6Ht0GwcVF0EYUY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.web.ICBCWebView',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.icbc:id/rootview"] > android.widget.LinearLayout[id="com.icbc:id/linearLayout1"] > android.widget.FrameLayout[id="com.icbc:id/body"] > android.webkit.WebView > android.webkit.WebView[text="存款"] > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View[id="returnButton"] > android.view.View > android.widget.Button[text="更多"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|w0chvH2eRbTUp6vVryCW2XWk21hxCm09_yFUo-yjeZ0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.icbc:id/epass_dialog_big_view"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.ImageView[id="com.icbc:id/dialog_add86_back"][desc="返回"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|watXVZLpUufyBBGXRWocU2IjLyOSaLBSTAij7xxjbqY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.icbc:id/body"] > android.widget.RelativeLayout[id="com.icbc:id/rl_standard"] > android.support.v4.view.ViewPager[id="com.icbc:id/main_viewpager"][desc="ViewPager position 1"] > android.widget.RelativeLayout[id="com.icbc:id/rl_root"] > android.widget.FrameLayout > android.support.v7.widget.LinearLayoutCompat > android.widget.LinearLayout[id="com.icbc:id/invest_recyclerview_loan"] > android.widget.LinearLayout[id="com.icbc:id/ll_components"] > android.support.v7.widget.RecyclerView[id="com.icbc:id/recycler_view_credit"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.icbc:id/rl_content"] > android.widget.LinearLayout[id="com.icbc:id/ll_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.icbc:id/rd_girdMenuFuncView"] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView[id="com.icbc:id/rd_horizontalFlowLayout"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.icbc:id/rd_funcBtn"][desc="卡片权益"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|yWuzGqErl5EQFQwvsTs7NhTnQtbHyoIuGwkfHyFcdN0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.icbc:id/ccis_dialog_ll"] > android.widget.LinearLayout > android.widget.TextView[id="com.icbc:id/ccis_cancel_jinru"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
