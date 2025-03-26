import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: 'in-app|3833X607efnLEhQFQsJOBnVbseHWGbYG5pqdFTGkIGs=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.baidu.searchbox.yylive.entrance:id/new_tpl_personal_root"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|vvHchI7Phx4TMwGLELiyWJT28uTb6F93b5D34E374e0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.RelativeLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.LinearLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.TextView[id="com.baidu.tieba:id/obfuscated"][text="去认证"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|Om3U6mL_fenFZWRZl7SJoZQijgLv3wkuwDm1_v4vhnw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.tieba:id/obfuscated"] > android.view.View[id="com.baidu.tieba:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|yDoWdcZuMkvw22VnrN_xEeLZlQewmP019nBvFALPT2I=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ImageView[id="com.baidu.searchbox.yylive.yylib:id/hx"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|YurHBxoqSZGY9YEeZlakOlVq9jgF4rsH9EeS0N7Vx7Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.duowan.mobile.basemedia.watchlive.activity.LiveTemplateActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.searchbox.yylive.yylib:id/eq"] > androidx.viewpager.widget.ViewPager[id="com.baidu.searchbox.yylive.audiolive:id/b47"] > android.view.ViewGroup[id="com.baidu.searchbox.yylive.audiolive:id/adc"] > android.widget.FrameLayout[id="com.baidu.searchbox.yylive.audiolive:id/ai_"] > android.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'system|koRVhWdk2q7t2GgS8c8IJAVMSTCqC14qMwTq1tGw4so=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_onetime_button"][text="本次运行允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|PTPJf3lRjPUdlPkDovjWNmFix-r715XYvhew_JmgGBg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/permission_with_three"] > android.widget.TextView[id="com.lbe.security.miui:id/permission_allow_foreground_only_button"][text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|xQEp-SOwrEX_0amNIJ1i6pGl3voD-3zAhNMdY6nSbK4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout[id="com.baidu.searchbox.yylive.game:id/a6k"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.searchbox.yylive.game:id/ey"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|FC_uhDAz1w1DymH6Vzdxmp6hbwcVFg3Ckb8bzg5Iqyk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.duowan.mobile.basemedia.watchlive.activity.LiveTemplateActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.searchbox.yylive.yylib:id/eq"] > androidx.viewpager.widget.ViewPager[id="com.baidu.searchbox.yylive.audiolive:id/b47"] > android.view.ViewGroup[id="com.baidu.searchbox.yylive.audiolive:id/adc"] > android.widget.FrameLayout[id="com.baidu.searchbox.yylive.audiolive:id/ai_"] > android.webkit.WebView > android.webkit.WebView[text="房间详情"] > android.view.View > android.view.View[id="emp-root"][clickable=true] > android.view.View > android.widget.TextView[text="关注房间"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|ZCXN5ooy1E16JBffwuyiMwbIdlmMaskTeQDMD4oGckw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.duowan.mobile.basemedia.watchlive.activity.LiveTemplateActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.baidu.searchbox.yylive.yylib:id/eq"] > androidx.viewpager.widget.ViewPager[id="com.baidu.searchbox.yylive.audiolive:id/b47"] > android.view.ViewGroup[id="com.baidu.searchbox.yylive.audiolive:id/adc"] > android.widget.FrameLayout[id="com.baidu.searchbox.yylive.audiolive:id/ai_"] > android.webkit.WebView > android.webkit.WebView[text="房间详情"] > android.view.View > android.view.View[id="emp-root"][clickable=true] > android.view.View > android.widget.TextView[text="关注房间"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|V47u0hmyvR_AFSf9_Pf7ZGrypwTMMjLoq8-lyM9wPPs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.FrameLayout[id="android:id/content"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.baidu.tieba:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.FrameLayout[id="com.baidu.tieba:id/obfuscated"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[text="查看详情"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|guBU9msVMcjRp5V816I4t_1D98XfeDFlHiUIo18xnO8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout[id="com.baidu.searchbox.yylive.game:id/a6k"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.baidu.searchbox.yylive.game:id/ey"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
