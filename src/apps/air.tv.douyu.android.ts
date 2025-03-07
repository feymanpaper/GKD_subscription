import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 0,
      name: 'in-app|UIV73JwG9rakmdQweyN0-WSuwxtt8DDtf5qS5vGW8Mw=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskInstallGuideDialogActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|1KqJ9fkZ5_PlFMD0XdR0VhOOxE-zXj2B1nXFuLv9-F4=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|40DDFPECK6ImM1JiwMX9g_EyIN-4UocysltF4Lrx8sg=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/kaw"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/cws"] > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/ee2"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|KM43y3v96EQBZtJMfC659LvErEoxqWmvUYxoL1M8YHE=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn_parent"] > android.widget.Button[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|Z2IFftl5D-ojU_XgEYFv75xEzIH3bis2V4F_Lz5enpo=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout > android.widget.TextView[id="air.tv.douyu.android:id/ad1"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|h02QNXBVLXoG9_hdVPeyjCykgUzMQBn5wnIb3h4FC6I=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/jvq"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|XF-Y2rRFl7CYqFh7mNVPaN7jbJideCf2bdu2TgEJndY=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/kbf"] > android.view.ViewGroup[id="air.tv.douyu.android:id/p8_"] > androidx.viewpager.widget.ViewPager[id="air.tv.douyu.android:id/fjf"] > android.widget.LinearLayout[id="air.tv.douyu.android:id/kbf"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="air.tv.douyu.android:id/fky"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|xMhUHJJ83kypSrKpe0Uyh9izAHzTG1tDEnxRCVd635w=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="air.tv.douyu.android:id/g_i"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/cqp"] > android.widget.TextView[id="air.tv.douyu.android:id/aei"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|p2Z1wSRTXG9ThcfwBUay3MUZcyAAQsMGuiAdIS9TPjo=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[id="tv.douyu.plugin.gamecenter:id/btn_finish"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|vIYH0YiQiRtG9oofUAmEpcP6TqTaoknnlbatDyjxoa4=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/o71"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|WUIFScJZRlfNvd6XJvnP0vp8Nq6UCXIxYI28LvuQS-s=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="air.tv.douyu.android:id/b94"] > android.widget.Button[id="air.tv.douyu.android:id/ju_"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.douyu.sdk.apkdownload.ui.dialog.TaskInstallGuideDialogActivity',
          matches: 'android.widget.FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|1eVJB1FsSlgUpLel2y9wq0j4YIRd4r06L8tWWpLn1mk=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="air.tv.douyu.android:id/h4s"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|WgmW27qDBROzddwiRzN2iHXYWrJnopJFBWEKI4PUAYw=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.search.view.activity.SearchActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.webkit.WebView > android.webkit.WebView[text="请通过以下验证"] > android.view.View[id="captcha"] > android.view.View > android.view.View > android.view.View > android.widget.Button[text="提交答案"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|yHFEIzJGdAu17kz2TNZYtpQ4vmoNGiQMvDfAERrhdWE=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/b7a"] > android.view.ViewGroup[id="air.tv.douyu.android:id/b9n"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/bko"] > android.widget.LinearLayout[id="air.tv.douyu.android:id/kbf"] > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/ei6"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|nNiF4aV1etrwjFb_soVRu7DhSa4OJQJGp9FwnLOdeaQ=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|aW_4n4KDgvv2yNbUX5nY57ul4VjCG1P6Sx7OYgSSzD4=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/bnu"] > android.widget.LinearLayout > android.widget.TextView[id="air.tv.douyu.android:id/ahl"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|nU9G95BoM2GZMWGC37e6Scavxe-xHPS6uytZYyfjyeU=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.douyu.module.h5.basic.WebViewActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="air.tv.douyu.android:id/h4s"] > android.webkit.WebView > android.webkit.WebView[text="我的等级"] > android.view.View[id="root"] > android.view.View > android.view.View > android.widget.TextView[text="下一步"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|GIAXXle8ybG2dVKTii11WzP2kseXmcaJZWnXDx2rzK4=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout[id="com.android.systemui:id/status_bar_container"] > android.widget.FrameLayout[id="com.android.systemui:id/status_bar"] > android.widget.LinearLayout[id="com.android.systemui:id/status_bar_contents"] > android.widget.LinearLayout[id="com.android.systemui:id/phone_status_bar_left_container"] > android.widget.TextView[id="com.android.systemui:id/clock"]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|CS6woZdiR0r4Sbi-MdfwvMVsKMqTNWr3WzDNWIyRIgY=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|rsPkqDNq8A1TRZjFKm23IxCO05Uj2dXYeGl0VZz-xEA=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/afw"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
