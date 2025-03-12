import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: 'in-app|7DRbTxZNkfqNxiSPnOV4A9xiU99R30TLkjsv8LblCX4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_confirm"][text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|J9MDnTESjykTgUVrVu9vepyVF80F9fg1UUVi5NUVdAE=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.netdisk:id/dialog_root_view"] > android.widget.RelativeLayout[id="com.baidu.netdisk:id/dialog_footer"] > android.widget.LinearLayout > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_ok"][text="立即更新"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|xb3SQ03zy-_-Hb1750Gx2rtE1rml5fTazBEBWoGo7zc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.update.UpdateDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|IvwZ7YVqfVnRFO5WiCE7zA0dEsHm6M5kntNTbhpzJpA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.cloudp2p.RichMediaActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.netdisk:id/rl_red_bag_root"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.baidu.netdisk:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.netdisk:id/content_webview"] > android.widget.ScrollView > android.webkit.WebView[text="我的会员"] > android.view.View[clickable=true] > android.view.View[id="newUserCenter"] > android.view.View > android.view.View[clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|ZoRPymyYWazYDvi5_tJyH7Xt1W_3VB--TH-0-hPJblo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.netdisk:id/dialog_footer_one_button"] > android.widget.Button[id="com.baidu.netdisk:id/dialog_button_one"][text="知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|_ileVgQ_IS9MHcTN_uDoWtiVWBeC-9Puvm4mMKic7Ig=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.netdisk:id/yike_guide_exit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
