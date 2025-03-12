import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: 'in-app|-UYAiYCYeVWHUAnS6hqitBHDqcYsibsNOC5Hydx5lE0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[desc="dialog-close-button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|2iw8gXsn7YcYOySpk4UkXeVedkpOj45wojIB5Wb0w3M=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.support.v7.widget.RecyclerView > android.view.ViewGroup > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|7t_SptYPI9-2d1YiG7SSnsSpSvj_tCQ0FEfRdV8ibn4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_singleton"][clickable=true] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog"][clickable=true] > android.widget.LinearLayout > android.widget.Button[id="com.android.permissioncontroller:id/permission_deny_button"][text="不允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|ATXA7OXDEpFyhgp8xXdvCvqyGhaB0lN8nLrz4snOEMk=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|cHQTtPch8JTBTHtqBDSCIj6EldE9JyTqJJYt-nSaX_A=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|cKVuSOYX6DK0XwRRvaaWsP0qGNVfJFi4v65p8E4scI4=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|d5bxr9A-vxLErszhoSwrc577rTMKdnZG-Sjd8leDyUM=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|gPSSeLN84Pdufwzq4qTlkuksdZGix9snyyHftLcmsYI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[desc="dialog-close-button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|j9SVRsMjkEE2Z_mg4j7jAceiilgcVPiLQXpcjZgRiHI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="com.dianping.v1:id/decor_content_parent"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/main_content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/neo_base_view"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/lay_web_parent"] > android.view.ViewGroup[id="com.dianping.v1:id/mil_container"] > android.webkit.WebView > android.webkit.WebView[text="订单"] > android.view.View > android.app.Dialog > android.view.View > android.view.View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'system|JBdfFCVstkgNmdAJAuXdm5cOM_dDbY30DMloq7vsp-A=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|Jrm270XetxiMBHDrdf0kePJOku2fU5_mOrea7PrY97o=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|mkvMQyGL3rK7Hmaj6MtaCugKcfVDofiWTmaEe9hLOUw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.sankuai.waimai.business.knb.TakeoutKNBWebActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.dianping.v1:id/takeout_knb_root"] > android.widget.FrameLayout[id="com.dianping.v1:id/takeout_knb_container"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/lay_web_parent"] > android.view.ViewGroup[id="com.dianping.v1:id/mil_container"] > android.webkit.WebView > android.webkit.WebView > android.view.View[id="app"] > android.view.View[id="17139587399500.7384423534648679"][clickable=true] > android.view.View > android.view.View[id="pre-expand-modal-wrapper-webp"][clickable=true] > android.view.View > android.view.View > android.widget.Image[text="af8870c5f1bb92a999a1b3e7c45328871996.png"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'system|OG3-m0skPG4b-Uf96clX8FA_IoGkx3v3RTaBkKAyOdQ=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|oMbxK26Gnkm4hig_g3r1v1Yx0M06CdunIkwhwm8HPHk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[desc="dialog-close-button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|ssHOTo_ra29uvsgx2NBRxIxaPt7idpUIrEMkAVien1k=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.ImageView[desc="dialog-close-button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|WteFwHOl16UWtVq1bVQ5lvS6r3nJZU9nLxRVD84Qjcs=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.dianping.v1:id/pop_window"] > android.widget.ImageView[id="com.dianping.v1:id/btn_close_verify"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|X57sXogpCLt1jtiedYHO8_a-8h_nI73K0qvf5wUTV0U=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.dianping.v1:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.dianping.v1:id/root_view"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.dianping.v1:id/root"] > android.widget.FrameLayout[id="com.dianping.v1:id/picasso_view"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
