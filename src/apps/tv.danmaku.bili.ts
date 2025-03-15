import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: 'in-app|D_BxjeM92ZJpzupluHXsNkmshtKMmNaS6j8GxPZxFOA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.bilibili.biligame.ui.GameCenterHomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="tv.danmaku.bili:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="tv.danmaku.bili:id/activity_main"] > android.widget.FrameLayout[id="tv.danmaku.bili:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="tv.danmaku.bili:id/tri_home_root"] > android.widget.ScrollView > android.widget.LinearLayout[id="tv.danmaku.bili:id/tri_app_bar"] > android.view.ViewGroup > android.widget.HorizontalScrollView[id="tv.danmaku.bili:id/tri_home_tab"] > android.widget.LinearLayout > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|h0AHq_j5RX4cPBcl3vd1u5qzc-cHjDHvVBETV8J30zY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.MainActivityV2',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="tv.danmaku.bili:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="tv.danmaku.bili:id/container"] > android.view.ViewGroup[id="tv.danmaku.bili:id/coordinator"] > android.widget.FrameLayout[id="tv.danmaku.bili:id/design_bottom_sheet"] > android.widget.FrameLayout > androidx.viewpager.widget.ViewPager[id="tv.danmaku.bili:id/vp_container"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.GridView[id="tv.danmaku.bili:id/rv_items"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|kRqba32VGaX7b68HIf7Sz3ixH6ZqKR89e40d6veaaWE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="tv.danmaku.bili:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ScrollView[id="tv.danmaku.bili:id/root_container"] > android.widget.LinearLayout[id="tv.danmaku.bili:id/container"] > android.widget.TextView[id="tv.danmaku.bili:id/agree"][text="同意并继续"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'system|z8ZbtNyHLf3eAcPoujtsYr6OXj-Uw8ezY5NXIUdn-PQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="始终允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
