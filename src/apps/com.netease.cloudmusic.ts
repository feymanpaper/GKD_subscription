import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: 'in-app|1oqLcRSu3tfZp6j0g92ypTOI3rL3nyn9mfX6M0NAD1A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.TransparentBrowserActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/webViewFragmentContainer"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/webRootView"] > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View[clickable=true] > android.view.View > android.view.View > android.view.View > android.app.Dialog > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|7BFQv8zXks6QEA20cEHkEJF2AhwKf_m41V9Fl3lMurI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_one_time_button"][text="允许本次使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|7T733RYyocFpQ3sLYIlMAjSH7aiNAmi9sRuAklLhZqc=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="android:id/parentPanel"] > android.widget.FrameLayout[id="android:id/inputArea"] > android.view.ViewGroup[id="com.sohu.inputmethod.sogou:id/av3"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.sohu.inputmethod.sogou:id/d80"] > android.view.View[id="com.sohu.inputmethod.sogou:id/ti"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|9zcidQLZcejweu46qDwZAnMamTCda1c03peSU0M7EKI=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.netease.cloudmusic:id/playerAlbumCover"] > android.widget.RelativeLayout[id="com.netease.cloudmusic:id/player_container"] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/playerControlContainer"][clickable=true] > android.view.ViewGroup[id="com.netease.cloudmusic:id/musicOpContainerStyle1"] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/rightOpContainer"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/commentContainerStyle2"][desc="评论40w+"] > android.widget.ImageView[id="com.netease.cloudmusic:id/commentBtnStyle2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|ABXqboVRuejwT_ZAQkAsqv8qHt3SW9JzOYxcjqU2egI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/container"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/coordinator"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/design_bottom_sheet"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/pagerSlidingTabStripBaseActivityContainer"][clickable=true] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/dialog_container"] > androidx.viewpager.widget.ViewPager[id="com.netease.cloudmusic:id/commonViewPager"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/fl_background_round"] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/ll_content_container"] > android.view.ViewGroup > android.view.ViewGroup[id="com.netease.cloudmusic:id/spl"] > androidx.recyclerview.widget.RecyclerView[id="com.netease.cloudmusic:id/bottomSheetListview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.cloudmusic:id/bs_playlist_list_item"][clickable=true] > android.widget.ImageView[id="com.netease.cloudmusic:id/playListMusicDelete"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|ArFouBbrOWbavcoVI6psJ_e4tkw3VB9cBrjeFHzDMy8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.music.biz.rn.activity.CashierRNActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|bM9WRGpaeXuNRTDCZ8bCX0t3Mse2gl_YIR-oWGBSX90=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.music.biz.rn.activity.CloudMusicRNActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="禁止"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|GSaSPY0UXn88p_fOJ8rduw7Ed-cL3D9sYvEO7gJ2EDw=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/root"] > android.widget.TextView[id="com.netease.cloudmusic:id/buttonDefaultPositive"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|IfLoxJ2BewmBMad5G_QRG4TkXo-U0Yk3ESfffkn5mAk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.music.biz.rn.activity.CashierRNActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|irWHMxvts7CQ1ie657bZQVyE439oCrzaPNO78EYvkS4=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.AddToPlayListActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/container"] > android.widget.TextView[text="收藏 (1)"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|KjE0f81-rlQ09gVkv63f66RDk0GUw2d4qm15Hqvc9sw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.PlayerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/container"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/coordinator"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/design_bottom_sheet"] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/dsl_dialog_root"] > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|N1p6DLoln3GEa-tA8HY3taPYcYwR0CUpJiV026Lkox8=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.netease.cloudmusic:id/buttonDefaultPositive"][text="清空"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|RGbkPV1MohRm9PAQzQ1rNLASQujbI5nWCMhM0CWD3yo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/resourceBottomSheetRightContainer"] > android.widget.TextView[id="com.netease.cloudmusic:id/buyMusicBtn"][text="VIP仅¥0.22/天"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|Sgu-noe49F2PBJfpEZhFpF_hzI1S_B0eQz-Xho2cKRQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/container"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/coordinator"] > android.widget.FrameLayout[id="com.netease.cloudmusic:id/design_bottom_sheet"] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/dialog_container"][clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.netease.cloudmusic:id/myCreatePlayList"] > android.widget.LinearLayout[clickable=true] > android.widget.CheckBox[id="com.netease.cloudmusic:id/playListCheckBox"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|TA0-2XXAgQtXvxCxHK0UlzaQzEqFiyDM452WuG5FILc=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.netease.cloudmusic:id/commentViewPager2"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.netease.cloudmusic:id/coordinator"] > androidx.recyclerview.widget.RecyclerView[id="com.netease.cloudmusic:id/recyclerView"] > android.widget.LinearLayout[id="com.netease.cloudmusic:id/commentVHRootId"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/user_container"] > android.widget.TextView[id="com.netease.cloudmusic:id/trackLikeBtn"][text="8971"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|ukfpmfW24kOJ7WGcY7a7a5la1IeO0pLSQBGdFmNQUIU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[id="com.netease.cloudmusic:id/csl_container"] > androidx.recyclerview.widget.RecyclerView[id="com.netease.cloudmusic:id/rv_iot_devices"] > android.view.ViewGroup[id="com.netease.cloudmusic:id/ctsl_item"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|ZiSc8AMUc2jAknXfnzCreMfNaIs0MXfLHc9pEhMDnpk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.music.biz.rn.activity.CloudMusicRNActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout > android.widget.FrameLayout[id="com.netease.cloudmusic:id/contentListViewFrame"] > android.widget.ListView[id="com.netease.cloudmusic:id/contentListView"] > android.widget.LinearLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
