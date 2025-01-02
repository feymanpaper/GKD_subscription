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
          matches: 'android.widget.FrameLayout[clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.ScrollView[clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="允许"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/kaw"][clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/cws"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[id="air.tv.douyu.android:id/ee2"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn_parent"][clickable=true] > android.widget.Button[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn"][text="取消"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="air.tv.douyu.android:id/ad1"][text="暂时不用"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[id="air.tv.douyu.android:id/jvq"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/kbf"][clickable=true] > android.view.ViewGroup[id="air.tv.douyu.android:id/p8_"][clickable=true] > androidx.viewpager.widget.ViewPager[id="air.tv.douyu.android:id/fjf"][clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/kbf"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/fky"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/g_i"][clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/cqp"][clickable=true] > android.widget.TextView[id="air.tv.douyu.android:id/aei"][text="前往开启权限"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[id="tv.douyu.plugin.gamecenter:id/btn_finish"][text="完成"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[id="air.tv.douyu.android:id/o71"][text="我知道了"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[id="air.tv.douyu.android:id/b94"][clickable=true] > android.widget.Button[id="air.tv.douyu.android:id/ju_"][text="去设置"][clickable=true]',
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
          matches: 'android.widget.FrameLayout[clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/h4s"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="请通过以下验证"][clickable=true] > android.view.View[id="captcha"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.Button[text="提交答案"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/b7a"][clickable=true] > android.view.ViewGroup[id="air.tv.douyu.android:id/b9n"][clickable=true] > android.widget.FrameLayout[id="air.tv.douyu.android:id/bko"][clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/kbf"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[id="air.tv.douyu.android:id/ei6"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"][clickable=true] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="取消"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.RelativeLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/bnu"][clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.TextView[id="air.tv.douyu.android:id/ahl"][text="忽略"][clickable=true]',
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
            'android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"][clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/h4s"][clickable=true] > android.webkit.WebView[clickable=true] > android.webkit.WebView[text="我的等级"][clickable=true] > android.view.View[id="root"][clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.widget.TextView[text="下一步"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"][clickable=true] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"][clickable=true] > android.widget.LinearLayout[id="com.android.systemui:id/phone_status_bar_left_container"][clickable=true] > android.widget.TextView[id="com.android.systemui:id/clock"][text="上午6:32"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"][clickable=true] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="我知道了"][clickable=true]',
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
          activityIds: '',
          matches:
            'android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout[id="android:id/content"][clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.TextView[id="air.tv.douyu.android:id/afw"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
