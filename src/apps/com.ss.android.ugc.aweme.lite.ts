import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 0,
      name: 'in-app|a0dRaTFvriPsq0_hh8ix8mGb6_PiROOrr_4lilt2xpI=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"][clickable=true] > android.widget.LinearLayout[desc="正在充电，已完成 100%。"][id="com.android.systemui:id/battery"][clickable=true] > android.widget.ImageView[id="com.android.systemui:id/battery_charge_out_image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|oWhZvP70ZCaU6IqNR8nWjQSIrQIhiotS9IFBYfMK6to=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|SSedQvd9ROE6QTyRqpmDtEeFSy554QFCtLZjC36FXo8=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/root_view"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.ugc.aweme.lite:id/+-"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/gyo"][clickable=true] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|8B8tVrxVWvQW_Yxn0cIgVXM9Gaovs6na0iosDw0VJc4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/eci"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/kv4"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/eci"][clickable=true] > X.VgE[id="com.ss.android.ugc.aweme.lite:id/viewpager"][clickable=true] > android.widget.TabHost[id="com.ss.android.ugc.aweme.lite:id/hs9"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/hsw"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/mbc"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d2n"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/mrs"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dyw"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/viewpager"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/lif"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/gxj"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/h24"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/h4t"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/c42"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.behavior.ui.view.UIComponent[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|DLczeL1YlyAx96hmMTZMXPND9lpn2FmYtQ6l-EABXJE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cij"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cgg"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d_8"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cgo"][clickable=true] > X.VgE[id="com.ss.android.ugc.aweme.lite:id/viewpager"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/kg2"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/d1x"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/hsp"][clickable=true] > com.bytedance.highperformanceview.layout.MeasureOnceRelativeLayout2[id="com.ss.android.ugc.aweme.lite:id/pp8"][clickable=true] > androidx.viewpager.widget.ViewPager[id="com.ss.android.ugc.aweme.lite:id/viewpager"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/pmy"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/kv3"][clickable=true] > android.widget.RelativeLayout[id="com.ss.android.ugc.aweme.lite:id/dq6"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/iz"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|HptNd46Z2nuD52GuXUW36i3H9D_i4M_jLVxlEJnSLyU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|kjJgCCNyXiSikku7HlZAaAXkUu5w2ZgRPiU3lqUCbjY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|ofBTe0KRmKLeKquux0XR1IJWkIFkIpyDWvHHDnm2v9E=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/ign"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/hdo"][clickable=true] > android.widget.TextView[id="com.ss.android.ugc.aweme.lite:id/c6"][text="去看看"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|k8zp1VjIWHDQE_5KJhJiGYd2b5J_i63xO5qnaImzKAg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|1zIqhby5i7LQNAHeVhx1Czb-b-Fjc7Aa3dHRZi08B1c=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icon_area"][clickable=true] > android.view.ViewGroup[id="com.android.systemui:id/system_icons"][clickable=true] > android.widget.LinearLayout[desc="正在充电，已完成 100%。"][id="com.android.systemui:id/battery"][clickable=true] > android.widget.ImageView[id="com.android.systemui:id/battery_charge_out_image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'system|GXTewJwNtLgTwISMxuSovydAfdETpfIVOuYGj_MwrTo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"][clickable=true] > android.widget.Button[text="拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|YmepzMthlvtACJFYWCtysXH9-sgkic_fGKG-DQlI0zw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cnm"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[desc="关闭"][id="com.ss.android.ugc.aweme.lite:id/f-4"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|_nlrsrgmCGEbwwtoqv2xPYLrN1dMwMpNFdzcuexei_A=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'system|uz1fTmncviv4mnmff02i49Ob3MccQws01kq0Fy4856A=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'system|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.ScrollView[clickable=true] > android.view.ViewGroup[id="com.lbe.security.miui:id/contentPanel"][clickable=true] > android.widget.FrameLayout[id="android:id/custom"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.ImageView[id="com.lbe.security.miui:id/permission_group_icon"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|g6PvDeRPYmHqFmpve6wAaHzPtWXJzRUzZ8SyS06nhH0=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|5384dkcPo0V0Uu0DG2eSK1L_zbYDe04TkM_Ma_zGAjk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dcq"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/dct"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.behavior.ui.LynxFlattenUI[desc="27秒后可领奖励，关闭，按钮"][text="27秒后可领奖励，关闭，按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|8Ct37-lPj-pUI_fHP0UfVFl6EGTIbEd5__RQX37-0Bs=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/root_layout"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/al0"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.component.svg.UISvg[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|nEHfKuimZfkzjs0rFC7zJguHM7QUmeGeFLZcVIhMO1w=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches: 'android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|flpLGXKnF8AgvHUo_0phs2cDrFDxiUwjCQQ9fpwJMcY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/root_view"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/am7"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/cs"][text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|qxrHLfkXI7fORT52WQWqUQCwAUpzKB1BPsoMD-5XmMc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/phone_status_bar_left_container"][clickable=true] > android.widget.TextView[id="com.android.systemui:id/clock"][text="晚上10:55"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 22,
      name: 'in-app|fbJB_o5qB0-QdSOFTfHU7gJgQQP1pbsd11GgdHbn1Jc=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/container"][clickable=true] > android.view.ViewGroup[id="com.ss.android.ugc.aweme.lite:id/cbn"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/cnm"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/l_i"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/l_h"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/l_n"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/eqz"][clickable=true] > androidx.recyclerview.widget.RecyclerView[id="com.ss.android.ugc.aweme.lite:id/kfa"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/=l"][clickable=true] > android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/a7w"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 23,
      name: 'in-app|Spznydg5bpZCr881QZ2rPUtDX5nq1EeMfL-GdI747yQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.ss.android.ugc.aweme.splash.SplashActivity',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/ase"][clickable=true] > android.widget.LinearLayout[id="com.ss.android.ugc.aweme.lite:id/asb"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.ss.android.ugc.aweme.lite:id/arz"][clickable=true] > android.widget.FrameLayout[clickable=true] > com.lynx.tasm.ui.image.FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
