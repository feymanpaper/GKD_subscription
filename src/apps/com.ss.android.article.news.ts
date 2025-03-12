import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|E4K_5gJXnuR4GJ7t_EojuriVIsjhNeGrHILFok6vi7g=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.ss.android.article.news:id/eg7"] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/c8e"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|GBZY82AjK4rsNtuVSH-tv_t34zAwhQWLMUsWGh7GWgs=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.FrameLayout[id="android:id/customPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/g9p"] > android.widget.TextView[id="com.ss.android.article.news:id/g9s"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|yyNLJO8fnYrS1tXNPDc4ATL_yTrf9OtbyFdnIl1yEps=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/bv0"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d08"] > androidx.viewpager.widget.ViewPager[id="com.ss.android.article.news:id/ao"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h4b"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h27"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/ghk"] > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout[id="com.ss.android.article.news:id/akb"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
