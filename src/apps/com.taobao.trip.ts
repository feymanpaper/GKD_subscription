import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    {
      key: 0,
      name: 'in-app|0YHFi-xkxeP1EWNqYPyQttaQ6wVta0KV9GjLNrchnNA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.taobao.trip:id/btn_negative"][text="知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|Icv54vsKWBdiIMIFTfzW5CNcHF6-Zj9ECSLq18nvzdY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.home.HomeActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.taobao.trip:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > androidx.drawerlayout.widget.DrawerLayout[id="com.taobao.trip:id/fliggy_drawer_layout"] > android.widget.LinearLayout > androidx.viewpager.widget.ViewPager[id="com.taobao.trip:id/fliggy_container"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|5QM7JgasaJ9Q5Q1jts2DV__pZ3Rub101sGsQD1RiNBM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="com.taobao.trip:id/btn_permission_instruction_negative"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
