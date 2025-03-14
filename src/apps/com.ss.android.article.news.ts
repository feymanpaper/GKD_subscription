import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|8UwfbjGmmhPDunQJfGmRkaERCMAGiqeZdqrTLt7xGt8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > com.bytedance.android.gaia.activity.slideback.SlideFrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/czq"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|bqXBXy1eEs7vYG_ybhlpDvQxw_HWHfN0AcSz-DEcN1A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.template.page.MainLynxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > com.bytedance.android.gaia.activity.slideback.SlideFrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/d0u"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/f0n"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.LynxFlattenUI[desc="返回活动"][text="返回活动"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|E4K_5gJXnuR4GJ7t_EojuriVIsjhNeGrHILFok6vi7g=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.ss.android.article.news:id/eg7"] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/c8e"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|GBZY82AjK4rsNtuVSH-tv_t34zAwhQWLMUsWGh7GWgs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.FrameLayout[id="android:id/customPanel"] > android.widget.FrameLayout[id="android:id/custom"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/g9p"] > android.widget.TextView[id="com.ss.android.article.news:id/g9s"][text="好的"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'system|NVgty-UA8w5kK29hVYJCVKgXcNNl_Ry7qT196g5tOCY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/bv0"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d08"] > androidx.viewpager.widget.ViewPager[id="com.ss.android.article.news:id/ao"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h4b"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h27"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/ghk"] > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout[id="com.ss.android.article.news:id/akb"][desc="奋进的春天丨向“新”而行 提“质”而上置顶央视新闻531评论 文章"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|R7xjVB8qKXDCaVF7K4_J6D7oVOO_oXWdQl5L8mLfI7U=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > com.bytedance.android.gaia.activity.slideback.SlideFrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/czq"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d76"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/bt0"] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/iac"] > android.widget.ImageView[id="com.ss.android.article.news:id/ad7"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|tfij7BJDl57bcZvWQeVvPiksSWWWcfxJdu5FGbA4FI4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.lynx.component.svg.UISvg[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|ViiXElWtQZwI0_r8dvFCBBnc_oN10_6dRZaG_pFeaV4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > com.bytedance.android.gaia.activity.slideback.SlideFrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/czq"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d76"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/bt0"] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/iac"] > android.widget.ImageView[id="com.ss.android.article.news:id/ad7"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|wEod8JzK21nWEdKEMcUhTqA-PSgmBcY76Wvm1FPwx3w=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.template.page.MainLynxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > com.lynx.component.svg.UISvg[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|WH8jmu-cUb1m3Xxr3HeEMN9-1Pe0qqGtqDciz8NK6o0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > com.bytedance.android.gaia.activity.slideback.SlideFrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/czq"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d76"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/bt0"] > android.widget.RelativeLayout[id="com.ss.android.article.news:id/iac"] > android.widget.ImageView[id="com.ss.android.article.news:id/ad7"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|yyNLJO8fnYrS1tXNPDc4ATL_yTrf9OtbyFdnIl1yEps=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/bv0"] > android.widget.TabHost[id="android:id/tabhost"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/d08"] > androidx.viewpager.widget.ViewPager[id="com.ss.android.article.news:id/ao"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h4b"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/h27"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/ghk"] > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout[id="com.ss.android.article.news:id/akb"][desc="足不出户如何做到月入过万，看看Deepseek提供的方案三张内容图片历史轮回梦一场头像历史轮回梦一场656 文章"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|__DBoZ2ObKthqW9tY-K29mi32aOyjzvVZvVAPEuF_OA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.article.news:id/j6"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/l"] > android.view.ViewGroup[id="com.ss.android.article.news:id/bvw"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/fw"] > android.view.ViewGroup > android.widget.RelativeLayout[id="com.ss.android.article.news:id/lj5"] > android.widget.ImageView[id="com.ss.android.article.news:id/liv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
