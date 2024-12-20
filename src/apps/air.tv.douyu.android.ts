import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 0,
      name: 'in-app|UIV73JwG9rakmdQweyN0-WSuwxtt8DDtf5qS5vGW8Mw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskInstallGuideDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > androidx.viewpager.widget.ViewPager > android.widget.RelativeLayout > android.widget.LinearLayout > androidx.viewpager.widget.ViewPager > android.widget.FrameLayout > android.view.ViewGroup > androidx.recyclerview.widget.RecyclerView > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|40DDFPECK6ImM1JiwMX9g_EyIN-4UocysltF4Lrx8sg=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dy.liveV2.living.RecorderCameraActivityV2Portrait',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/ee2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|KM43y3v96EQBZtJMfC659LvErEoxqWmvUYxoL1M8YHE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.loader.a.ActivityN1STTS0',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.Button[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|Z2IFftl5D-ojU_XgEYFv75xEzIH3bis2V4F_Lz5enpo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.FloatWindowPermissionDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.TextView[id="air.tv.douyu.android:id/ad1"][text="暂时不用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|h02QNXBVLXoG9_hdVPeyjCykgUzMQBn5wnIb3h4FC6I=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.home.pages.main.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/jvq"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|XF-Y2rRFl7CYqFh7mNVPaN7jbJideCf2bdu2TgEJndY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'tv.douyu.view.activity.PlayerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.HorizontalScrollView > android.widget.FrameLayout > android.widget.LinearLayout > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|xMhUHJJ83kypSrKpe0Uyh9izAHzTG1tDEnxRCVd635w=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskInstallGuideDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.TextView[id="air.tv.douyu.android:id/aei"][text="前往开启权限"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|p2Z1wSRTXG9ThcfwBUay3MUZcyAAQsMGuiAdIS9TPjo=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.loader.a.ActivityN1STTS1',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[id="tv.douyu.plugin.gamecenter:id/btn_finish"][text="完成"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|vIYH0YiQiRtG9oofUAmEpcP6TqTaoknnlbatDyjxoa4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.module.yuba2.user.ucenter.entrance.YubaUserCenterActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/o71"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|WUIFScJZRlfNvd6XJvnP0vp8Nq6UCXIxYI28LvuQS-s=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.yuba2.main.PublisherActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.Button[id="air.tv.douyu.android:id/ju_"][text="去设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskInstallGuideDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[id="air.tv.douyu.android:id/jix"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|1eVJB1FsSlgUpLel2y9wq0j4YIRd4r06L8tWWpLn1mk=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.h5.basic.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.webkit.WebView[id="air.tv.douyu.android:id/pyd"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|WgmW27qDBROzddwiRzN2iHXYWrJnopJFBWEKI4PUAYw=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.search.view.activity.SearchActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView > android.view.View > android.view.View > android.view.View > android.view.View > android.widget.Button[text="提交答案"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|yHFEIzJGdAu17kz2TNZYtpQ4vmoNGiQMvDfAERrhdWE=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.yuba2.main.PublisherActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout > android.widget.LinearLayout > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/ei6"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|nNiF4aV1etrwjFb_soVRu7DhSa4OJQJGp9FwnLOdeaQ=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskRemindToInstallDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|aW_4n4KDgvv2yNbUX5nY57ul4VjCG1P6Sx7OYgSSzD4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.home.pages.main.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.TextView[id="air.tv.douyu.android:id/ahl"][text="忽略"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|nU9G95BoM2GZMWGC37e6Scavxe-xHPS6uytZYyfjyeU=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.h5.basic.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout > android.widget.ImageView[id="air.tv.douyu.android:id/ds1"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|GIAXXle8ybG2dVKTii11WzP2kseXmcaJZWnXDx2rzK4=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dy.liveV2.living.RecorderCameraActivityV2Portrait',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.Button[id="air.tv.douyu.android:id/fth"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|CS6woZdiR0r4Sbi-MdfwvMVsKMqTNWr3WzDNWIyRIgY=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'tv.douyu.view.activity.PlayerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.LinearLayout > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|rsPkqDNq8A1TRZjFKm23IxCO05Uj2dXYeGl0VZz-xEA=.png',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskRemindToInstallDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/afw"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
