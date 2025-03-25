import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pandascity.pd.app',
  name: '土豆',
  groups: [
    {
      key: 0,
      name: 'in-app|Fab1ZUvIVG1jh3ncbzWcsYAOYG6u6xtQl4tLYbt3OVk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.pandascity.pd.app:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.pandascity.pd.app:id/container"] > android.view.ViewGroup[id="com.pandascity.pd.app:id/coordinator"] > android.widget.FrameLayout[id="com.pandascity.pd.app:id/design_bottom_sheet"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[id="com.pandascity.pd.app:id/dialog_bottom_bar"] > android.widget.Button[id="com.pandascity.pd.app:id/button_ok"][text="查看筛选结果"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|QerLgwMAIvCesGvtjSnU1EVOVdeVTgJE73Oisb45GmE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.post.ui.detail.activity.PostDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.pandascity.pd.app:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.pandascity.pd.app:id/container"] > android.view.ViewGroup[id="com.pandascity.pd.app:id/coordinator"] > android.widget.FrameLayout[id="com.pandascity.pd.app:id/design_bottom_sheet"] > android.view.ViewGroup > android.view.ViewGroup > android.widget.LinearLayout[id="com.pandascity.pd.app:id/linearLayout"] > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView[id="com.pandascity.pd.app:id/recycler_view"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|xBOT9JhRGeDqmHEoaI6GHf-U451Mk4eIf5Ng9DoSa0w=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.pandascity.pd.app:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.pandascity.pd.app:id/container"] > android.view.ViewGroup[id="com.pandascity.pd.app:id/coordinator"] > android.view.View[id="com.pandascity.pd.app:id/touch_outside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
