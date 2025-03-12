import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.changba',
  name: '唱吧',
  groups: [
    {
      key: 0,
      name: 'in-app|09FsjhnpWMx5QCxhk7QjU-dv7VwGGnIxoRkoKWU-K0U=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.RelativeLayout[id="com.changba:id/dialog_content"] > android.widget.LinearLayout > android.widget.EditText[id="com.changba:id/apply_content"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|1mz3pBTY9Kw9leiPX_-0Fnu6-r85PMnhjFFGqtS2GX0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/title_bar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.TextView[id="com.changba:id/my_lefttview"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|7gIeOvFD9n3UwFTgqb8HGI2nV3bHJJKLFAxThyQ3heQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.songlib.activity.SongInfoActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.changba:id/item_layout"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|bu-BrCt4W0JL0LVbjUkx19yir2C-sMzbVGqD1CSXm58=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.webview.CommonWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/common_activity_web_view_container_fl"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.changba:id/common_fragment_web_view_parent"][clickable=true] > android.webkit.WebView > android.webkit.WebView[text="礼物墙"] > android.view.View > android.view.View[id="app"][clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|c7wVb7GWHQHzYudKbh3CvfyYsWKGuTtC7CdwfUhyFeE=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.webview.CommonWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/common_activity_web_view_container_fl"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.changba:id/common_fragment_web_view_parent"][clickable=true] > android.webkit.WebView > android.webkit.WebView[text="礼物墙"] > android.view.View > android.view.View[id="app"][clickable=true] > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|cxhT9VE60FjWbzeWKhPiTyUoztBRSK_7L24iwiy8gB8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/title_bar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.TextView[id="com.changba:id/my_lefttview"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|FfNob7xBNIbvCAkWNYc4_XP3KHdCr0yy_nOnD8ZWQzQ=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.changba:id/collect_room_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|fRh2igSWclkZdnvONJphAXDlBoTgi2b_FAaNUwrbtCM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/background_layout"] > android.view.ViewGroup[id="com.changba:id/container"] > android.widget.TextView[id="com.changba:id/btn_refuse"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|fZtr-5Nz21DBiCtQDYgvS5NZjJQwRucrgb8scz85ubs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.TextView[id="com.changba:id/knowTv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|gys1hCuSyqUy0txrgnVRStcgbzb0Ni2dl9_5q-5Ukfs=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/container"] > android.view.ViewGroup[id="com.changba:id/coordinator"] > android.widget.FrameLayout[id="com.changba:id/design_bottom_sheet"] > android.view.ViewGroup > android.widget.ImageView[id="com.changba:id/iv_personal_perfect_info_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|iFTNYqRDOvkvh6h7RlsKR_u0_RASqlTwkjeWtT8a4p4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/title_bar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.TextView[id="com.changba:id/my_lefttview"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|iX3KIp6KjYJAT1JuAdvgqUs6Oei_RKEs8_1kl2ymCoI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.LinearLayout[id="com.changba:id/process_layout"] > android.widget.TextView[id="com.changba:id/confirm_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|JzPMuiq2uxCwxX6xblIsG6vX49J5nieKS_OBd4djk6M=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.changba:id/ktv_container"] > android.view.ViewGroup[id="com.changba:id/refreshLayout"] > androidx.viewpager.widget.ViewPager[id="com.changba:id/viewPager2"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.TextView[id="com.changba:id/exit_room_tv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|SJWzNk_MWAYKzXhTPgE5Bwc5PX16lGl1hNEFwYZzSpo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.changba:id/btn_do"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|TjIe9ProBMbH7ow4uhOiZTeK0nI16j7yeXFV_t1aKv0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.webview.CommonWebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/common_activity_web_view_container_fl"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.changba:id/common_fragment_web_view_parent"][clickable=true] > android.webkit.WebView > android.webkit.WebView[text="礼物墙"] > android.view.View > android.view.View[id="app"][clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|TvqrAkYqPFMf_CHT8ZWCH6s_Ogkj_MolLes1BUAX3r8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.LinearLayout[id="com.changba:id/process_layout"] > android.widget.TextView[id="com.changba:id/confirm_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|VP4lvGAxDSXCUuRGKFGAdZwIuEKZqA-wb7HnP9uKADY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/title_bar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.TextView[id="com.changba:id/my_lefttview"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|wmFptwLQA76Appi0sOOFJVurAPcUCNoHlQshQZp_DDY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup[id="com.changba:id/close_room"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|wNZTaOo-V-X2Y-9SIYzaWgM_XNBri59r4f93SeCLiYg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/container"] > android.view.ViewGroup[id="com.changba:id/coordinator"] > android.widget.FrameLayout[id="com.changba:id/design_bottom_sheet"] > android.view.ViewGroup > android.widget.ImageView[id="com.changba:id/iv_personal_perfect_info_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|xzAGp5bdBvUkRUK4BM-UuvXF45SfhY2-cwOdgbwMWkg=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'flutter.FlutterCustomActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View > android.view.View[desc="Dismiss"][clickable=true] > android.view.View > android.view.View[desc="榜单说明"][clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|Y6FGn3DM3OQpZQJq3N_CMhHj5dGtlnUlmiJ9oestYfU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.TextView[id="com.changba:id/knowTv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|yFgoMcqD5msGOXH_KKLPkPVgAsW2iSRpD0qb2S7eIFM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'flutter.FlutterCustomActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View > android.view.View > android.view.View > android.view.View[desc="真的要放弃购买会员吗?\n你可能会错过25+会员特权\nVIP音效 - 智能混音、HQ伴奏、混响等高级音效\n导出作品 -时光留声，珍藏美好时刻\n最近来访 -不错过每个默默关心你的人\n包房特权 - 加速免费鲜花生成，送给心动的ta"][clickable=true] > android.view.View[desc="残忍离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|z0TCEa6ejETrZyq1-skh5g14OxdeBSD9kVjzsIDVEAk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.TextView[id="com.changba:id/ok_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|zDFsnjaBNITDDt93IHKV_3AitPeqPm_Yrvv33JGJlOQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.songlib.activity.SongInfoActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.Button[text="政治或色情内容"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
