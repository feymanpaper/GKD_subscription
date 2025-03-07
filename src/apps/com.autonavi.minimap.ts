import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: 'in-app|dZEuYAdvANkB0l73uObdwJytXClnWP1FR7GvKEJO2fU=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 1,
      name: 'in-app|_YyaanZnDkcnJcPFTe5XoHLALqFSHVLsoOhmC0GI8K4=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 2,
      name: 'in-app|x1fmLOt7DYXmDlzbF9srV0Rjqf0okx39LsjzPV6E8Y0=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 3,
      name: 'system|iHTYJykVoT3y-9e9skUsmDa6399ve2dIRAOfLZ6FKi8=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 4,
      name: 'in-app|iqDzhZc1LNwjzw1U_hdcmBl723dLxa9aaolrC338hTk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 5,
      name: 'in-app|TtgMebb6XApCnJYs2chFIgYKpyzjkVXwtJ9g7-lVBPg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 6,
      name: 'in-app|6-TgyVYjSKYvOnHL909rBU9EUyaTxmwyWTAudzwFwvk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 7,
      name: 'in-app|PqAsUox1QZq-Bh0Vskl0zrBVu69J2v_HnZVWF1YOTRg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 8,
      name: 'in-app|48i0lCF2hUpI0K_D3utwn45sF-a3563NV2PtlX5Kbsg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > com.autonavi.minimap.ajx3.widget.view.SpringScrollView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 9,
      name: 'in-app|J1t_n7-QbH4TSrLlVZJKU9gaKIn3zoaVoraBM6WkmNg=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 10,
      name: 'in-app|aAwrHcBRfwcZdI6KdAWlVCf6y710tn9QspXdjnWL-vI=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 11,
      name: 'in-app|nkUMEW2ZqE8seaJLW512RCUBEd6ritZsjHGucwCWkgQ=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.autonavi.minimap:id/parentPanel"][clickable=true] > android.widget.FrameLayout[id="com.autonavi.minimap:id/customPanel"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/custom"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.autonavi.minimap:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 12,
      name: 'in-app|3j4AoLdCy7zFeMM4MhzfaQSYcm4vG1tLAC6G_SPi56s=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 13,
      name: 'in-app|zKiEZxFRk8Ktva7ilJBxoVQNwkCoe1ppVnAzyLEYjVk=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > com.autonavi.minimap.ajx3.widget.view.SpringScrollView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 14,
      name: 'in-app|07xhHr8vxyCkxmHdEa-MjAF6Nz4QlQ__ChdQU63gl_A=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 15,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
    {
      key: 16,
      name: 'in-app|gNPQLCd8hdHm5bFkChlt2khFOqJ4zBWpusuzv-ZEiRc=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.autonavi.minimap:id/mapInteractiveRelativeLayout"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 17,
      name: 'in-app|rf_rULbnUsvsKK4e-p6NSoRzyw_DnJzdl5ql2k-bVC8=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 18,
      name: 'in-app|KCtqfhWOTmiknRLpquLUt94OBcaCaIUJ_P1ds6vhNEQ=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[clickable=true] > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > com.autonavi.minimap.ajx3.widget.view.SpringScrollView > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 19,
      name: 'in-app|phIE5UDo9Hphsetdjp_lQ0EWUN5wvtN8tbo5-WbG5Gw=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.autonavi.minimap:id/root_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fl_content_view"] > android.widget.FrameLayout[id="com.autonavi.minimap:id/fragment_container"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
      matchRoot: True,
    },
    {
      key: 20,
      name: 'system|QJa6OzJHO47gtw8K2gtXqJv42G1ca3UPuz7c736svTY=.png',
      actionDelay: 2000,
      actionMaximum: 10,
      resetMatch: 'app',
      priorityTime: 10000,
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
      matchRoot: True,
    },
  ],
});
