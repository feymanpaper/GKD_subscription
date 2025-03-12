import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 0,
      name: 'in-app|Vas7deOeAPs5WNQ_AVSJVGWvep_mOJhtPRnnAIQm5Kk=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.cmcc.hebao:id/base_root_layout"] > androidx.appcompat.widget.LinearLayoutCompat > android.widget.FrameLayout[id="com.cmcc.hebao:id/fl_container"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.cmcc.hebao:id/ll_title_layout"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/title_layout_webview"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/webview_return_layout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|W16hImBh8XkcLdBFNQVli5-Cfct9ew09Utn2znz2AaA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'io.dcloud.feature.sdk.multi.DCUniMPActivity0',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout > android.widget.LinearLayout > android.webkit.WebView > android.webkit.WebView[text="pages/memberCenter/index[1]"] > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|YGbxqc5C7ROXXPnmt1_7hndOHOiGtx-DvzAiWxAipp0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.cmcc.hebao:id/dialog_layout"] > android.widget.LinearLayout[id="com.cmcc.hebao:id/buttonLayout"] > android.widget.Button[id="com.cmcc.hebao:id/nagtiveBT"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|OpAo3Nky41J3hcANVj-Th_23o2v3ZgTOxrzBywBdV_g=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.cmcc.hebao:id/agree_check"][text="同意并继续"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|s2NO4bE2f0b7D91cumdob8ji36thMyLk4EslyJvkuUw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/dialog_view"][clickable=true] > android.widget.ImageView[id="com.cmcc.hebao:id/closeImg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
