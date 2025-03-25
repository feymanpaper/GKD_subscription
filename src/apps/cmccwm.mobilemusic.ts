import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
  groups: [
    {
      key: 0,
      name: 'in-app|7ZpIOGjcv3FW74doSJtAy52cwxAEoh--6yMia7mGkOs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/halfscreen_bottom_sheet"][clickable=true] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic.lib_music:id/black_list_title_layout"] > android.widget.TextView[id="cmccwm.mobilemusic.lib_music:id/black_list_manage"][text="管理黑名单"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|aWSkeubSPaq-K-ZmcrhmNOIF2kK2aOn6WByucJsWRIg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.view.View[id="cmccwm.mobilemusic.libraries_feature:id/touch_outside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|cqi5QyoVLmfBmcbPcjLtmRRY7tBQXf1Bejafqq85RiE=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.migu.music.ui.recentplay.person.PersonRecentPlayActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.app_music_main:id/projection_select_rootView"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.app_music_main:id/orientation_content_layout"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/root_content_layout"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.libraries_feature:id/root_content_view"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/web_view_content_layout"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/h5_webView_root"] > android.webkit.WebView > android.webkit.WebView[text="会员支付"] > android.view.View[clickable=true] > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|G1W_8NSXFrGIE1ns0_rqFOhdc6ShwTjWMF0PJO2718Y=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/fl_ui_container"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/fl_fragment_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/refreshLayout"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/coordinator"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.libraries_feature:id/appbar"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/collapseActionView"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/ll_scroll_layout"] > android.widget.FrameLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic.lib_music:id/fl_foreground_container"] > android.widget.FrameLayout > android.view.ViewGroup[id="cmccwm.mobilemusic.lib_music:id/cl_content"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.lib_music:id/ll_collection"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|hFdoTJLqxDxbtBK0uG81F330vMYUsYRfa6EQfLzcMqY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.view.View[id="cmccwm.mobilemusic.libraries_feature:id/touch_outside"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|NXWE1-vbM51AFBnUFm2jesgWcXG2HsYVpvDTtghuIKQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/middleContent"][clickable=true] > android.widget.LinearLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/btn_sec"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="cmccwm.mobilemusic.libraries_feature:id/dialog_tail_button2"][text="允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|VDGsmbeigvxqMgaiyhnF49M2NmQ3zB1GlYGlaOcLFzU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/middleContent"][clickable=true] > android.widget.LinearLayout > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/fl_top"] > android.widget.ImageView[id="cmccwm.mobilemusic.libraries_feature:id/close_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|XiHt-myPI50RKCexCCyyd07QOebn9fk9lfgkYAREZcY=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/fl_ui_container"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/fl_fragment_container"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/root_content_layout"] > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/skin_marquee_bar"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/custom_bar_context"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.libraries_feature:id/custom_bar_back_ll"] > android.widget.LinearLayout[id="cmccwm.mobilemusic.libraries_feature:id/custom_bar_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|ybH-qJaGUvpsEph5Ty2wGCzRsFKM_AW4YF7CWLBAdas=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="cmccwm.mobilemusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/container"] > android.view.ViewGroup[id="cmccwm.mobilemusic.libraries_feature:id/halfscreen_bottom_sheet"][clickable=true] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.RelativeLayout[id="cmccwm.mobilemusic.libraries_feature:id/content_layout"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.libraries_feature:id/halfScreen_content"] > android.widget.FrameLayout[id="cmccwm.mobilemusic.lib_music:id/empty_layout"] > android.view.ViewGroup[id="cmccwm.mobilemusic.lib_music:id/smart_fresh_layout"] > androidx.recyclerview.widget.RecyclerView[id="cmccwm.mobilemusic.lib_music:id/recycler_view"] > android.widget.LinearLayout[clickable=true] > android.view.ViewGroup > android.view.View[id="cmccwm.mobilemusic.lib_music:id/view_new_musiclist"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
