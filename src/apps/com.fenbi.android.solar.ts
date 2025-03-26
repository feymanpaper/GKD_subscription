import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 0,
      name: 'in-app|TOCxXPrCKiqxfgx8SO35oTfgs1wENZUOgg97McoVX9g=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.yuanfudao.android.vgo.webapp.GeneralShareWebAppActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.fenbi.android.solar:id/web_view"] > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.widget.TextView[text="新人限时8元开通"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|9WfSDHi51Vy46vLB_iCu3yRQzoVi4rfbZagz8HlvGzA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.fenbi.android.solar:id/fl_root"] > android.view.ViewGroup[id="com.fenbi.android.solar:id/cl_root"] > android.widget.LinearLayout[id="com.fenbi.android.solar:id/ll_bottom_container"] > android.widget.TextView[id="com.fenbi.android.solar:id/tv_left_btn"][text="确定退出"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|HVDBpzql4jJ02b8-mJoKXOfPJz3UugDfkeOCT-29Z8k=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.fenbi.android.solar:id/web_view"] > android.webkit.WebView[id="com.fenbi.android.solar:id/web_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|uE1DDIQxEQTvKwIErnUeNuj7ySYZazS5iNM5xO11R34=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.CheckedTextView[id="com.fenbi.android.solar:id/tv_obtain"][text="去获取"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|PWcyfeZxstuobqcExVxVySAHAQuGoG2nxEc1-qcnpu0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.fenbi.android.solar:id/fl_root"] > android.view.ViewGroup[id="com.fenbi.android.solar:id/cl_root"] > android.widget.LinearLayout[id="com.fenbi.android.solar:id/ll_bottom_container"] > android.widget.TextView[id="com.fenbi.android.solar:id/tv_left_btn"][text="残忍离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|ie-VgoTXts7zhCLi_s3CCi2yfuVnI7zOs0ztN192yc0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.fenbi.android.solar:id/bottom_bar_container"] > android.widget.TextView[id="com.fenbi.android.solar:id/tv_save_avatar_frame"][text="保存头像框"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|-yMITE8qHc0bdwUA4tB32gfQ-UyaAkpH9CL5poGFt3c=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.fenbi.android.solar:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|6QA5jLowRfEccXcLnFpPfGqvJIWWzos3Ene15xSL9BI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.fenbi.android.solar:id/web_view"] > android.webkit.WebView[id="com.fenbi.android.solar:id/web_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
