import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: 'system|Ei1Mb6GAr6RvLuEcJmnWrEOOVoQnXCPQgmj4XWvTQY8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sankuai.meituan:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/fl_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.sankuai.meituan:id/fl_container"] > android.view.ViewGroup[id="com.sankuai.meituan:id/simple_root_constraint"] > android.widget.LinearLayout[id="com.sankuai.meituan:id/simple_multi_container_root"] > android.widget.LinearLayout[id="com.sankuai.meituan:id/simple_bar_container"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/simple_multi_container"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/simple_bar_top_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|HJbAgShwUrPG7QOtyEL21nYd26zoP-Ct4_VB780BcUc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sankuai.waimai.business.knb.TakeoutKNBWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.sankuai.meituan:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sankuai.meituan:id/takeout_knb_root"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/takeout_knb_container"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sankuai.meituan:id/lay_web_parent"] > android.view.ViewGroup[id="com.sankuai.meituan:id/mil_container"] > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View[id="app"] > android.view.View[id="17139587399500.7384423534648679"][clickable=true] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Image[text="af8870c5f1bb92a999a1b3e7c45328871996.png"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|KK1n5mCvtHoVGsUX2tthWnhsx0ORx9d0LKQvHvBKmnc=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sankuai.waimai.business.knb.TakeoutKNBWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.sankuai.meituan:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.sankuai.meituan:id/takeout_knb_root"] > android.widget.FrameLayout[id="com.sankuai.meituan:id/takeout_knb_container"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.sankuai.meituan:id/lay_web_parent"] > android.view.ViewGroup[id="com.sankuai.meituan:id/mil_container"] > android.webkit.WebView > android.webkit.WebView > android.view.View[id="app"] > android.view.View[id="17139587399500.7384423534648679"][clickable=true] > android.view.View > android.view.View[id="pre-expand-modal-wrapper-webp"][clickable=true] > android.view.View > android.view.View > android.widget.Image[text="af8870c5f1bb92a999a1b3e7c45328871996.png"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
