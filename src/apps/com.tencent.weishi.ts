import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weishi',
  name: '腾讯微视',
  groups: [
    {
      key: 0,
      name: 'system|-SPymJX5mQPr7dP2DCSof6ypevOVuZwHiiGXe837dKE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.weishi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > androidx.viewpager.widget.ViewPager[id="com.tencent.weishi:id/main_view_pager"] > android.widget.FrameLayout[id="com.tencent.weishi:id/main_page_root"] > android.widget.FrameLayout[id="com.tencent.weishi:id/fl_main_fragment_container"] > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.tencent.weishi:id/vp_home_page"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.view.ViewGroup[id="com.tencent.weishi:id/recommend_page_root"] > android.widget.RelativeLayout[id="com.tencent.weishi:id/video_base_fragment_load_more_refresh"] > androidx.recyclerview.widget.RecyclerView[id="com.tencent.weishi:id/feeds_view_pager"] > android.widget.FrameLayout[id="com.tencent.weishi:id/fragment_page_layout"] > android.widget.FrameLayout[id="com.tencent.weishi:id/container_feed_holder"] > android.widget.FrameLayout[id="com.tencent.weishi:id/layout_feed_info_panel"] > android.view.ViewGroup[id="com.tencent.weishi:id/info_panel"] > android.view.ViewGroup[id="com.tencent.weishi:id/feed_description_layout"] > android.view.ViewGroup[id="com.tencent.weishi:id/nickname_area"] > android.widget.TextView[id="com.tencent.weishi:id/tv_poster_nick"][text="@夏有景秀"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|6I0F7NYkC7VZA556fVG3uD-K_I5pF-WcNSFc9t7ujiQ=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.tencent.weishi:id/btn_dialog_cancel"][text="不同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
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
      key: 3,
      name: 'in-app|bHR4Z68C9Olt85357O9IcqhpWXOvF9046l5AWgZcq8w=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.tencent.weishi:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.tencent.weishi:id/container"] > android.view.ViewGroup[id="com.tencent.weishi:id/coordinator"] > android.widget.FrameLayout[id="com.tencent.weishi:id/design_bottom_sheet"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.tencent.weishi:id/profile_fragment_container"] > android.widget.FrameLayout[id="com.tencent.weishi:id/root_view"] > android.view.ViewGroup[id="com.tencent.weishi:id/toolbar"][clickable=true] > android.widget.FrameLayout[id="com.tencent.weishi:id/follow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|t5ZnxcvimQbnwC5AfeZhD3bASSo58ysk8U_fJVMEbWw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.tencent.weishi:id/close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
