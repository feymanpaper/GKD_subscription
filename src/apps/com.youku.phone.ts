import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 0,
      name: 'in-app|bKM0-LhT2-lABgyCe8lbsSMmelJH3_HGqWPMS81i74I=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.youku.phone:id/yk_dialog_root"] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/yk_dialog_confirm"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|hGrlYGqsf-Z9JTdtAOkkEZQHCfQV9GIuzHY7ivjX6T4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.youku.phone:id/top_bar"] > androidx.viewpager.widget.ViewPager[id="com.youku.phone:id/mViewPager"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.youku.phone:id/one_arch_refresh_layout"] > android.view.ViewGroup[id="com.youku.phone:id/home_tab_refresh_content"] > androidx.recyclerview.widget.RecyclerView[id="com.youku.phone:id/one_arch_recyclerView"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.youku.phone:id/light_widget_pre_render_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|LkOJZXcbYdMHPQ-v1haHOpSm_8OCzYLcYFiU1Rk_-iU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/dialog_ok_button"][text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|V1lBYraCaUFD8PTbK44HO4fS7TXHGkAeH5D_m_PF3ag=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.youku.phone:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.youku.phone:id/soku_ai_root"] > android.widget.RelativeLayout[id="com.youku.phone:id/soku_voice"][clickable=true] > android.widget.RelativeLayout[id="com.youku.phone:id/soku_ai_scene"][clickable=true] > android.widget.ImageView[id="com.youku.phone:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
