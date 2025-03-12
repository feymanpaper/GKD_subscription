import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.news',
  name: '腾讯新闻',
  groups: [
    {
      key: 0,
      name: 'in-app|M-hPPaLJIlqEXDaG74Mt1SHpZJGStBTbmTxa68YDwwc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.tencent.news:id/pop_dialog_root_view"] > android.widget.ScrollView[id="com.tencent.news:id/scroll_view"] > android.widget.LinearLayout[id="com.tencent.news:id/pop_dialog_main_content"] > android.widget.LinearLayout > android.widget.TextView[id="com.tencent.news:id/pop_dialog_positive_btn"][text="开启通知"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|rM7a4mnGCnfevwDb2E9srW8AjxtBObfhpvlX-AWX1Ac=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > com.tencent.news.ui.slidingout.SlidingLayout > android.widget.FrameLayout[id="com.tencent.news:id/real_content_view"] > android.widget.FrameLayout[id="com.tencent.news:id/content_view_pane"] > androidx.drawerlayout.widget.DrawerLayout[id="com.tencent.news:id/drawer_layout"] > android.widget.RelativeLayout[id="com.tencent.news:id/news_detail_root_layout"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.tencent.news:id/component_container"] > android.widget.FrameLayout[id="com.tencent.news:id/detail_nested_news_detail_view"] > android.widget.FrameLayout[id="com.tencent.news:id/accessibility_newsdetail_extraview"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.news:id/recycler_view"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
