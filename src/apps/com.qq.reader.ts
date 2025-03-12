import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: 'in-app|bmrfehSP9NGo-24_SO942JZc9W3W4NdDJdz2P8QXgxk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.qq.reader:id/root"][clickable=true] > android.widget.RelativeLayout[id="com.qq.reader:id/content"] > android.widget.TextView[id="com.qq.reader:id/btn_cancel"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|i9y7rFsiD_BWy4OUcSbpqh47M9YJjUVjvq2OeTYMvnA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.qq.reader:id/content_lyt"] > android.widget.TextView[id="com.qq.reader:id/agree"][text="同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|ODovGY7YhguXYBABNuC7S0-NPw74VI_E-Q4_htu-pdw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.flutter.SearchFlutterActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.qq.reader:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View > android.view.View > android.view.View > android.view.View[desc="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|xf626Moga-iN4T7CN_DvzoYasVOqFHJVO8tfg2XXYSw=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.qq.reader:id/layoutContent"] > android.view.ViewGroup[id="com.qq.reader:id/cl_bg"] > android.widget.ImageView[id="com.qq.reader:id/iv_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|ZF0OVfjqpTc-XUmSn3MTv0pMIA9um8fUz_8DyZfYo3A=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.qq.reader:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > androidx.viewpager.widget.ViewPager[id="com.qq.reader:id/viewpager"] > android.widget.RelativeLayout[id="com.qq.reader:id/rl_root"] > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup[id="com.qq.reader:id/rl_guide_boys"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
