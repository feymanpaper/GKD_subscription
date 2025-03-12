import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: 'system|Ei1Mb6GAr6RvLuEcJmnWrEOOVoQnXCPQgmj4XWvTQY8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sankuai.meituan:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/fl_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.sankuai.meituan:id/fl_container"] > android.view.ViewGroup[id="com.sankuai.meituan:id/simple_root_constraint"] > android.widget.LinearLayout[id="com.sankuai.meituan:id/simple_multi_container_root"] > android.widget.LinearLayout[id="com.sankuai.meituan:id/simple_bar_container"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/simple_multi_container"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/simple_bar_top_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
