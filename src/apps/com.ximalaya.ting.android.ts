import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 0,
      name: 'in-app|-dHMrLNU8IhVt79xFuH19oRQcU_FbHiW-xJMGYgcs7Q=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_play"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/main_top_slid_view"] > androidx.viewpager.widget.ViewPager[id="com.ximalaya.ting.android:id/main_view_pager"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/main_xplay_top_frame"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/main_fl_reader_mode"] > android.widget.FrameLayout[clickable=true] > androidx.drawerlayout.widget.DrawerLayout[id="com.ximalaya.ting.android:id/dl_reader_slide"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.ximalaya.ting.android:id/read_bottom_view"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/container"] > android.view.ViewGroup[id="com.ximalaya.ting.android:id/sub_play_container"][clickable=true] > android.view.ViewGroup[id="com.ximalaya.ting.android:id/ll_center"] > android.widget.SeekBar[id="com.ximalaya.ting.android:id/sb_read_progress"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|3QnOBcqrSt9NTJVsA2R6ohpEa0qkx2pDrcoaNsYhcAc=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|4UOSfg010gZEWz2OSfoirTksHDOFpgve_LdgmO1Qo84=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/rn_frame_layout"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|irdL0kJq5Oua90c62RNauu2HnM57EBlDYhxD01WGN5E=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/framework_dialog_root_lay"] > android.view.ViewGroup[id="com.ximalaya.ting.android:id/content_ll"] > android.widget.Button[id="com.ximalaya.ting.android:id/ok_btn"][text="去开启"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|NJ8cmPIQ1wBT-K56MMQONS87amWNDbyj-7PEvPm2zNI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout > androidx.viewpager.widget.ViewPager[id="com.ximalaya.ting.android:id/listen_view_pager"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|P6KcYRaUw5ZyIlF_mfoVeIJiegblvyFQMXzp2lu6o_0=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|PU7SaKVs20v1uNEzU_tU7N3TWLH95AlhAV2Wto1r_hk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/rn_frame_layout"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="关闭弹窗"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|Qm9yFCVgg3WmyUVN5Jd_TLHVcHW4WOvYo1m3_qQUrn0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/rn_frame_layout"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="关闭弹窗"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|rNJg59FJ5-Wu9eHI27c7HMxPl-qK-bti2wU2XqfIuQs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|rse8m3qHtnMeN-BXLAxuGGeYwef8HX7khb-IVfmBMHI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/main_cl_main_content"] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|SA4O67UqWm6v9_GtSvEOiwh5TXL2U9svKXluwLotNMQ=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|uvJnpHT7Tjxk8f5ko6C772SCRF8O-21RQ3Nn9-OnXq4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/host_dialog_real_container"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|wCJgj_F4sa6euTlaM4ApTLG44Pns-qmil4aXq_FAXIo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="com.ximalaya.ting.android:id/main_iv_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|xNqv9PTFQhd6XOYR-4u3JoUzdYN1_8FNjkQFPR6CHV0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/rn_frame_layout"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|zJ_ICTCUYq4nj091n2SVlvPYXo9a7W6GDDnP5okE0TI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.host.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_main_root_lay"] > android.widget.RelativeLayout[id="com.ximalaya.ting.android:id/host_rl_root"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/fragment_full"] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/base_manage_layout"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ximalaya.ting.android:id/rn_frame_layout"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
