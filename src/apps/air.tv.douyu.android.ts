import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 0,
      name: 'in-app|KM43y3v96EQBZtJMfC659LvErEoxqWmvUYxoL1M8YHE=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn_parent"] > android.widget.Button[id="tv.douyu.plugin.gamecenter:id/cm_dialog_left_btn"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|Z2IFftl5D-ojU_XgEYFv75xEzIH3bis2V4F_Lz5enpo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.View[id="air.tv.douyu.android:id/jix"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|h02QNXBVLXoG9_hdVPeyjCykgUzMQBn5wnIb3h4FC6I=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/jvq"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|XF-Y2rRFl7CYqFh7mNVPaN7jbJideCf2bdu2TgEJndY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'tv.douyu.view.activity.PlayerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="air.tv.douyu.android:id/kbf"] > android.view.ViewGroup[id="air.tv.douyu.android:id/p8_"] > android.view.ViewGroup[id="air.tv.douyu.android:id/awx"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/fjh"] > android.widget.FrameLayout > android.widget.HorizontalScrollView[id="air.tv.douyu.android:id/kir"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/cqk"] > android.widget.LinearLayout[id="air.tv.douyu.android:id/lpw"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|p2Z1wSRTXG9ThcfwBUay3MUZcyAAQsMGuiAdIS9TPjo=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.TextView[id="tv.douyu.plugin.gamecenter:id/btn_finish"][text="完成"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|vIYH0YiQiRtG9oofUAmEpcP6TqTaoknnlbatDyjxoa4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/o71"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|WUIFScJZRlfNvd6XJvnP0vp8Nq6UCXIxYI28LvuQS-s=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="air.tv.douyu.android:id/b94"] > android.widget.Button[id="air.tv.douyu.android:id/ju_"][text="去设置"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.View[id="air.tv.douyu.android:id/jix"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|yHFEIzJGdAu17kz2TNZYtpQ4vmoNGiQMvDfAERrhdWE=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/b7a"] > android.view.ViewGroup[id="air.tv.douyu.android:id/b9n"] > android.widget.FrameLayout[id="air.tv.douyu.android:id/bko"] > android.widget.LinearLayout[id="air.tv.douyu.android:id/kbf"] > android.view.ViewGroup > android.widget.ImageView[id="air.tv.douyu.android:id/ei6"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|nNiF4aV1etrwjFb_soVRu7DhSa4OJQJGp9FwnLOdeaQ=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|aW_4n4KDgvv2yNbUX5nY57ul4VjCG1P6Sx7OYgSSzD4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/bnu"] > android.widget.LinearLayout > android.widget.TextView[id="air.tv.douyu.android:id/ahl"][text="忽略"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|nU9G95BoM2GZMWGC37e6Scavxe-xHPS6uytZYyfjyeU=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/ec"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[id="air.tv.douyu.android:id/lsm"] > android.widget.LinearLayout[id="air.tv.douyu.android:id/er"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="air.tv.douyu.android:id/jvv"] > android.widget.ImageView[id="air.tv.douyu.android:id/ds1"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|GIAXXle8ybG2dVKTii11WzP2kseXmcaJZWnXDx2rzK4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="air.tv.douyu.android:id/b94"] > android.widget.Button[id="air.tv.douyu.android:id/fth"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|CS6woZdiR0r4Sbi-MdfwvMVsKMqTNWr3WzDNWIyRIgY=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.LinearLayout[id="air.tv.douyu.android:id/b1d"] > android.widget.Button[id="air.tv.douyu.android:id/b1c"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|rsPkqDNq8A1TRZjFKm23IxCO05Uj2dXYeGl0VZz-xEA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="air.tv.douyu.android:id/afw"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
