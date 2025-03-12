import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: 'in-app|8JWt_CvqCSmosFRxhN5iziCG7U_WfEkt1QVtZP4wlbM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|9SdknJ5AF0sJlEgxHDWssINmKCp6YbU_-AvrCk0qsTE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.smile.gifmaker:id/button"] > android.widget.LinearLayout > android.widget.TextView[id="com.smile.gifmaker:id/negative"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|iLduKjuthJeTpOHGwZCGxEVARPYJGf78iw6SY4auGtI=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.yxcorp.gifshow.message.imchat.acivity.IMChatActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.RelativeLayout[id="com.smile.gifmaker:id/rn_container"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/kwai_rn_fragment_root"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/krn_content_container"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/krn_content_view"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/krn_container"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/krn_content_container"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|wCo92KxIg9OiF-eoUjJCeqQLNAhOh5XC_6HDItW7hss=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.smile.gifmaker:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/container"] > android.view.ViewGroup[id="com.smile.gifmaker:id/coordinator"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/design_bottom_sheet"] > android.widget.FrameLayout[id="com.smile.gifmaker:id/share_panel"][clickable=true] > android.widget.LinearLayout[id="com.smile.gifmaker:id/share_layout"] > android.widget.RelativeLayout > android.view.ViewGroup[id="com.smile.gifmaker:id/forward_panel_background"] > android.widget.LinearLayout[id="com.smile.gifmaker:id/panel"] > androidx.recyclerview.widget.RecyclerView[id="com.smile.gifmaker:id/recyclerView"] > android.view.ViewGroup > android.widget.ImageView[id="com.smile.gifmaker:id/forward_panel_item_cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
