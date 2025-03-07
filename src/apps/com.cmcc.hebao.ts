import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: false,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: true,
      name: 'in-app|Vas7deOeAPs5WNQ_AVSJVGWvep_mOJhtPRnnAIQm5Kk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.cmcc.hebao:id/base_root_layout"] > androidx.appcompat.widget.LinearLayoutCompat > android.widget.FrameLayout[id="com.cmcc.hebao:id/fl_container"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.cmcc.hebao:id/ll_title_layout"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/title_layout_webview"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/webview_return_layout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 2,
      name: 'in-app|AEny9fOHPilXLyNYpt7aIMMJiAifCijHtUnTPDXKZKc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.cmcc.hebao:id/dialog_layout"] > android.widget.LinearLayout[id="com.cmcc.hebao:id/buttonLayout"] > android.widget.Button[id="com.cmcc.hebao:id/positiveTB"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 3,
      name: 'in-app|OpAo3Nky41J3hcANVj-Th_23o2v3ZgTOxrzBywBdV_g=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.cmcc.hebao:id/agree_check"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 4,
      name: 'in-app|y3uPnRiWn1-aZk4GE1MqgUAFDLEnAvEvo6zF8OhBVtg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.cmcc.hebao:id/errorcode_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
    {
      key: 5,
      name: 'in-app|s2NO4bE2f0b7D91cumdob8ji36thMyLk4EslyJvkuUw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.cmcc.hebao:id/dialog_view"][clickable=true] > android.widget.ImageView[id="com.cmcc.hebao:id/closeImg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: true,
    },
  ],
});
