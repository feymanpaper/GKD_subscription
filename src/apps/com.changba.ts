import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.changba',
  name: '唱吧',
  groups: [
    {
      key: 0,
      name: 'in-app|2-vO62fib1fbgoTIpDW8TjX-pOURmS07VmkQht3iFaE=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[id="com.changba:id/small_window_container"] > android.widget.ImageView[id="com.changba:id/ktv_small_window_close_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|6gmBIGjodBmOHkEvEytzcyFpyhBYaOs9WFxBvKuKghM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.view.ViewGroup > android.widget.LinearLayout[id="com.changba:id/titleBar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.ImageView[id="com.changba:id/mini_player"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|bmR925eHBymXS750CSWnaV4nCk7dOfhKP5XeVHCHXY4=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/webpageView"] > android.widget.FrameLayout > android.webkit.WebView[id="com.changba:id/webview"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|BWUSq7_XvsQGr7p4rHlUxWq6-fkEtbOC_bGB_6w9ixQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.changba:id/cancel_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|dVr26W82oghXmp9wSOttItov62jTnv8Ba6ScWIWAK_Y=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.changba:id/share_item_rl"] > android.widget.RelativeLayout[id="com.changba:id/share_h5_item_rl"] > android.widget.ImageView[id="com.changba:id/share_h5_finish"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|E8BWBrwCQf6zUietS643E7np6uGQwetzPQfgVMuSNHY=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.LinearLayout[id="com.changba:id/process_layout"] > android.widget.TextView[id="com.changba:id/confirm_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|FfNob7xBNIbvCAkWNYc4_XP3KHdCr0yy_nOnD8ZWQzQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.changba:id/collect_room_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|fRh2igSWclkZdnvONJphAXDlBoTgi2b_FAaNUwrbtCM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/background_layout"] > android.view.ViewGroup[id="com.changba:id/container"] > android.widget.TextView[id="com.changba:id/btn_refuse"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|GzQ7nN1AMo1RFKubHIZwqpB-faxiCEPb14cA2WcZzz0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.CommonFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.changba:id/fragment_content"] > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.changba:id/webpageView"] > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="声动次元·网络翻唱联赛"] > android.view.View > android.view.View > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.widget.TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|h2fER6TknnlfAetQeV6fQg6RhIjlga8n81FffQlLAMo=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.changba:id/user_card_container"][clickable=true] > android.view.ViewGroup[id="com.changba:id/ktv_interact_self"] > android.widget.LinearLayout[id="com.changba:id/give_gift_self_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|hJKrfYLhyNdmdbw-S5qM_Ny9PoOsXDE5D2984xDAzNs=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.activity.MainActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.changba:id/common_dialog_fragment_web_view_container_fl"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="com.changba:id/common_fragment_web_view_parent"][clickable=true] > android.webkit.WebView > android.webkit.WebView[text="歌手等级奖励弹窗"] > android.view.View > android.view.View[id="app"] > android.view.View > android.view.View > android.view.View > android.widget.Button[text="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|iX3KIp6KjYJAT1JuAdvgqUs6Oei_RKEs8_1kl2ymCoI=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.LinearLayout[id="com.changba:id/process_layout"] > android.widget.TextView[id="com.changba:id/confirm_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|JzPMuiq2uxCwxX6xblIsG6vX49J5nieKS_OBd4djk6M=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.changba:id/ktv_container"] > android.view.ViewGroup[id="com.changba:id/refreshLayout"] > androidx.viewpager.widget.ViewPager[id="com.changba:id/viewPager2"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.TextView[id="com.changba:id/exit_room_tv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|kJwZJmUr-4bpGiXSjR6XBXEVpKmit4E0MNHQhEWoDzI=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup[id="com.changba:id/close_room"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|LJz-W0elLJ2GUMMDhR6JvbF_wWJr9Es1VFUC8DtTzhE=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.changba:id/root_layout"][clickable=true] > android.view.ViewGroup[id="com.changba:id/humming_base_layout"][clickable=true] > android.view.View[id="com.changba:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'in-app|O5upNTp2kSXkm90TZ1xmWcj6vW1z1Oz6Eep4zu1or-Y=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="com.changba:id/rootLayout"] > android.widget.ImageView[id="com.changba:id/closeBT"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 16,
      name: 'in-app|TkMxy3iMblAXgejenhpkLCwZ7TBRo_eWAljoHXqo0Ms=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup[id="com.changba:id/root_layout"][clickable=true] > android.view.ViewGroup[id="com.changba:id/humming_base_layout"][clickable=true] > android.view.View[id="com.changba:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|TvqrAkYqPFMf_CHT8ZWCH6s_Ogkj_MolLes1BUAX3r8=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.ScrollView > android.widget.LinearLayout[id="com.changba:id/layout"] > android.widget.LinearLayout[id="com.changba:id/process_layout"] > android.widget.TextView[id="com.changba:id/confirm_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|wWCtJ6mrlWXpDBwvGM0MWFOLmUnP0Gyx1dEpnglRhy8=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.module.globalplay.GlobalPlayerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout[id="com.changba:id/act_titlebar"] > android.widget.RelativeLayout[id="com.changba:id/title_layout"] > android.widget.HorizontalScrollView[id="com.changba:id/tab_layout"] > android.widget.LinearLayout > androidx.appcompat.app.ActionBar$Tab[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|yFgoMcqD5msGOXH_KKLPkPVgAsW2iSRpD0qb2S7eIFM=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'flutter.FlutterCustomActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.View > android.view.View > android.view.View > android.view.View[desc="真的要放弃购买会员吗?\n你可能会错过25+会员特权\nVIP音效 - 智能混音、HQ伴奏、混响等高级音效\n导出作品 -时光留声，珍藏美好时刻\n最近来访 -不错过每个默默关心你的人\n包房特权 - 加速免费鲜花生成，送给心动的ta"][clickable=true] > android.view.View[desc="残忍离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 20,
      name: 'in-app|zDFsnjaBNITDDt93IHKV_3AitPeqPm_Yrvv33JGJlOQ=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.songlib.activity.SongInfoActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.Button[text="政治或色情内容"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 21,
      name: 'in-app|zGxjLNEJKG1vJUARf2F3paxHLPPR0m31IMn7PWOmyKY=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.ImageView[id="com.changba:id/btn_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
