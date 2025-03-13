import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: 'in-app|2nhwpqOn-lsVMtMTM65iumTJyXpfFENlrXInW87kYiI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|8rE6Va-6Ev6fIDKg1SZd_wXVLUqfyES8W1NkFXv4wAA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.jd.lib.babel.view.activity.BabelActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.jd.lib.babel.feature:id/babel_root"] > android.widget.FrameLayout[id="com.jd.lib.babel.feature:id/babel_contents"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="赚红包"] > android.view.View > android.view.View[id="J_babelOpt"] > android.view.View[id="J_babelOptPage"] > android.view.View > android.view.View[id="concert-fission"] > android.view.View > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|HZIoFkGVIeg78vKbGysWo8BaA_SRRj5O0yP-klodDa0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.jd.lib.babel.view.activity.BabelActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.jd.lib.babel.feature:id/babel_root"] > android.widget.FrameLayout[id="com.jd.lib.babel.feature:id/babel_contents"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="领券中心"] > android.view.View[id="J_babelOpt"] > android.view.View[id="J_babelOptPage"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|JXPnbihdTgkxoUjpiSBQwg3202mOXBKQl5v2VojFKVU=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.jd.lib.ttt.page.TTTMultiPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="com.jingdong.app.mall:id/e_y"] > android.view.ViewGroup[id="com.jingdong.app.mall:id/eby"] > android.widget.RelativeLayout > androidx.viewpager.widget.ViewPager[id="com.jingdong.app.mall:id/e_w"] > android.widget.RelativeLayout[id="com.jd.lib.babel.feature:id/layout_id"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="京东秒杀"] > android.view.View[id="J_babelOpt"] > android.view.View[id="J_babelOptPage"] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|LkBydCUy0kIH417LU8THdZf4UYwRQO7X3CzwX9JTvUE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.jingdong.app.mall:id/dp"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="东东农场"] > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|nh_4Ok6qAl9V59YJzVWwsEIXuWtWGhhmrx2pkIrIPKg=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.jd.lib.babel.view.activity.BabelActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.jd.lib.babel.feature:id/babel_root"] > android.widget.FrameLayout[id="com.jd.lib.babel.feature:id/babel_contents"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="赚红包"] > android.view.View > android.view.View[id="J_babelOpt"] > android.view.View[id="J_babelOptPage"] > android.view.View > android.view.View[id="concert-fission"] > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|NQZsJYVla6Kat0LEtO1C4rG56Cgk6kziuQjWu-QEjJY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.jd.lib.ttt.page.TTTMultiPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="com.jingdong.app.mall:id/e_y"] > android.view.ViewGroup[id="com.jingdong.app.mall:id/eby"] > android.widget.RelativeLayout > androidx.viewpager.widget.ViewPager[id="com.jingdong.app.mall:id/e_w"] > android.widget.RelativeLayout[id="com.jd.lib.babel.feature:id/layout_id"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="月黑风高"] > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|r1XPjiVqtXwo4m_HY6O0GVmOGHh35ZbczSou6fxxS1A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.WebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.jingdong.app.mall:id/dp"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="东东农场"] > android.view.View[id="root"][clickable=true] > android.view.View > android.view.View > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
