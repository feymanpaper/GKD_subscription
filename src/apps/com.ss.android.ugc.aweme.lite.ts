import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 0,
      name: 'in-app|a0dRaTFvriPsq0_hh8ix8mGb6_PiROOrr_4lilt2xpI=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"] > android.view.View[id="com.ss.android.ugc.aweme.lite:id/mvz"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|oWhZvP70ZCaU6IqNR8nWjQSIrQIhiotS9IFBYfMK6to=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|SSedQvd9ROE6QTyRqpmDtEeFSy554QFCtLZjC36FXo8=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/root_view"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.ugc.aweme.lite:id/+-"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/gyo"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|8B8tVrxVWvQW_Yxn0cIgVXM9Gaovs6na0iosDw0VJc4=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/eci"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/kv4"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/eci"] > X.VgE[id="com.ss.android.ugc.aweme.lite:id/viewpager"] > android.widget.TabHost[id="com.ss.android.ugc.aweme.lite:id/hs9"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/hsw"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/mbc"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d2n"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/mrs"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dyw"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/viewpager"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/lif"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/gxj"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/h24"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/h4t"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/h31"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/c40"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/kg3"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/list"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.view.UIComponent[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|DLczeL1YlyAx96hmMTZMXPND9lpn2FmYtQ6l-EABXJE=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cij"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cgg"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d_8"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cgo"] > X.VgE[id="com.ss.android.ugc.aweme.lite:id/viewpager"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/kg2"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d1x"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/hsp"] > com.bytedance.highperformanceview.layout.MeasureOnceRelativeLayout2[id="com.ss.android.ugc.aweme.lite:id/pp8"] > androidx.viewpager.widget.ViewPager[id="com.ss.android.ugc.aweme.lite:id/viewpager"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/pmy"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/kv3"] > android.widget.RelativeLayout[id="com.ss.android.ugc.aweme.lite:id/dq5"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ht7"] > android.view.View[id="com.ss.android.ugc.aweme.lite:id/hkt"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|HptNd46Z2nuD52GuXUW36i3H9D_i4M_jLVxlEJnSLyU=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dialog_root"][clickable=true] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/cjp"] > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|kjJgCCNyXiSikku7HlZAaAXkUu5w2ZgRPiU3lqUCbjY=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.LynxFlattenUI[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|ofBTe0KRmKLeKquux0XR1IJWkIFkIpyDWvHHDnm2v9E=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/ign"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/hdo"] > android.widget.TextView[id="com.ss.android.ugc.aweme.lite:id/agg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|k8zp1VjIWHDQE_5KJhJiGYd2b5J_i63xO5qnaImzKAg=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.LynxFlattenUI[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|1zIqhby5i7LQNAHeVhx1Czb-b-Fjc7Aa3dHRZi08B1c=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/mo9"] > android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/cra"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'system|GXTewJwNtLgTwISMxuSovydAfdETpfIVOuYGj_MwrTo=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|YmepzMthlvtACJFYWCtysXH9-sgkic_fGKG-DQlI0zw=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cnm"] > android.view.ViewGroup > android.widget.ImageView[id="com.ss.android.ugc.aweme.lite:id/f-4"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|_nlrsrgmCGEbwwtoqv2xPYLrN1dMwMpNFdzcuexei_A=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.view.UIView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'system|uz1fTmncviv4mnmff02i49Ob3MccQws01kq0Fy4856A=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="仅在使用中允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'system|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|g6PvDeRPYmHqFmpve6wAaHzPtWXJzRUzZ8SyS06nhH0=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.view.UIView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|5384dkcPo0V0Uu0DG2eSK1L_zbYDe04TkM_Ma_zGAjk=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dcq"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dct"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ProgressBar[id="com.ss.android.ugc.aweme.lite:id/e02"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|8Ct37-lPj-pUI_fHP0UfVFl6EGTIbEd5__RQX37-0Bs=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.behavior.ui.LynxFlattenUI[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|nEHfKuimZfkzjs0rFC7zJguHM7QUmeGeFLZcVIhMO1w=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cnm"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cancel_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="本次运行允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|flpLGXKnF8AgvHUo_0phs2cDrFDxiUwjCQQ9fpwJMcY=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/root_view"] > android.view.ViewGroup > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/am7"] > android.view.ViewGroup > android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/cs"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|qxrHLfkXI7fORT52WQWqUQCwAUpzKB1BPsoMD-5XmMc=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.ss.android.ugc.aweme.lite:id/ivw"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cg_"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cg="] > android.widget.LinearLayout > android.widget.RelativeLayout[id="com.ss.android.ugc.aweme.lite:id/rootview"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/g82"] > android.widget.LinearLayout > android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/tv_right"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|fbJB_o5qB0-QdSOFTfHU7gJgQQP1pbsd11GgdHbn1Jc=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cnm"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/l_i"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/l_h"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/l_n"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/eqz"] > androidx.recyclerview.widget.RecyclerView[id="com.ss.android.ugc.aweme.lite:id/kfa"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/=l"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|Spznydg5bpZCr881QZ2rPUtDX5nq1EeMfL-GdI747yQ=.png',
      actionDelay: 5000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"] > android.widget.FrameLayout > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
