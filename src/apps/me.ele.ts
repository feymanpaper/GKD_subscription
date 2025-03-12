import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 0,
      name: 'in-app|03k7j3lxvVripvyu6ZCDsPDQHnnymJHSGAlbrsmv630=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.pha.shell.ui.ElePhaActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/pha_fragment_host"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="me.ele:id/tab_page_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/pha_page_container"] > android.widget.FrameLayout[id="me.ele:id/pha_view_pager_root_view"] > android.view.ViewGroup > com.uc.webview.export.WebView > com.uc.webkit.bb > android.webkit.WebView[text="天天爆红包"] > android.view.View[clickable=true] > android.view.View[id="root"] > android.view.View > android.view.View > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|_Ix8011vggcsKlyZwBa4ya9DLHmlnKunN_Eog61Ssto=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="me.ele:id/frame_bg"] > android.widget.FrameLayout[id="me.ele:id/view_close"][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|eb-WqYwza3pTYNYOa_vGoaHT7wEdz8p5ivrBKhcAxws=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.runtimepermission.PermissionActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/comp_uc_container"] > android.widget.FrameLayout[id="me.ele:id/translucentToolbar"] > android.view.ViewGroup[id="me.ele:id/toolbar"] > android.widget.ImageButton[desc="返回"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|WgFYmJvZHhbBO6OcI97d3Owce9xpRj0KrcCwmIfaJ1Y=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.Launcher',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.view.ViewGroup[id="me.ele:id/id_magex_mistview"] > android.view.ViewGroup[clickable=true] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|TyIhg7sQp3te1QxxxLHWbZYURNLIobD5ob9W_UTd8G0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.pack.ui.activity.PackActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="点击关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|7CE5pl5_g5QU6G5v_ZQjSlCobbx8DqPOm7Ws9a_dTXA=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|hv2isjQcOZT7mBYFXcWz-tKWDPw6-AddyG6rCM7fElM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="me.ele:id/container"] > android.view.ViewGroup[id="me.ele:id/coordinator"] > android.widget.FrameLayout[id="me.ele:id/design_bottom_sheet"] > android.widget.FrameLayout > android.widget.ImageView[id="me.ele:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|S4k1Lw0JLa7WhS9Xj17fXI1BKUFDbXVvXIXq9DxGlHs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|rYJDkexG2uekk5YbWOuIEboay5Bveb9oR9iM2nl6Ifo=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭 按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|8cyGrJTYbxSqnxYzZ7wtwG7sGGSnv5HQoJNw11tcxVk=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.application.ui.address.ChangeAddressActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[clickable=true] > android.widget.FrameLayout > android.widget.RelativeLayout[id="me.ele:id/layoutWrapper"] > android.widget.FrameLayout[id="me.ele:id/layoutFloat"] > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup[id="me.ele:id/id_magex_mist_view"] > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|z18hnlE58K4Nt2UnwdsJGYfpWAw6zmPfvTC4nGMOL2U=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭 按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 11,
      name: 'in-app|QpAoWbcbQpe_AwXTtyuEsL_lyvdUS3sVWHDHavktcJs=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.Launcher',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/home_fragment"] > android.widget.FrameLayout[id="me.ele:id/fragment_switcher"] > android.widget.FrameLayout > me.ele.homepage.view.ViewPager[id="me.ele:id/tab_view_pager"] > android.widget.FrameLayout[id="me.ele:id/restaurant_list"] > android.view.ViewGroup[id="me.ele:id/refresh_layout"] > android.widget.FrameLayout[id="me.ele:id/view_home_container"] > android.widget.FrameLayout[id="me.ele:id/layout_lmagex_container"] > android.widget.FrameLayout[id="me.ele:id/home_lmagex_view"] > android.widget.RelativeLayout[id="me.ele:id/layoutWrapper"] > android.view.ViewGroup[id="me.ele:id/refreshLayout"] > android.widget.RelativeLayout > androidx.recyclerview.widget.RecyclerView[id="me.ele:id/recyclerView"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="me.ele:id/id_magex_mist_view"] > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 12,
      name: 'in-app|u4SzBaztS8aE5Euo7SgIrE-KB4FeU9ydmvyPhdc3FYM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.muise.page.WeexPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup[id="me.ele:id/root_layout"] > android.view.ViewGroup[id="me.ele:id/weex_common_page_fragment"] > android.widget.FrameLayout[id="me.ele:id/weex_common_fragment_frame"] > android.widget.RelativeLayout > android.widget.FrameLayout[id="me.ele:id/render_container"] > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup > android.widget.ScrollView > android.view.ViewGroup > android.widget.LinearLayout > androidx.viewpager.widget.ViewPager > android.view.ViewGroup > android.widget.FrameLayout > android.widget.ScrollView > android.view.ViewGroup > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 13,
      name: 'in-app|YsLxPUJsQx7XrriHBOT9bG2xgMKhIvE_Mg2SFxi0WU0=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="me.ele:id/buttonDefaultNegative"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 14,
      name: 'in-app|V2v-9yNcJApdPz2nlYtQcZasTDBMbfSETnjawr2lvgQ=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.muise.page.WeexPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 15,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
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
      key: 16,
      name: 'in-app|oXVk70P2hdxjDR9-Rb3f9IiMhrjydTLV6hZb1Pa9LWI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.muise.page.WeexPageActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="点击关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 17,
      name: 'in-app|tMMmkvUYVxX7bwDI7f29S2aV4XgVJjdy5ZpsnLgvdBY=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 18,
      name: 'in-app|Jg2ND-v-r3UuBaV7nMMLc3kFHFipodeunO3z3sqnf1E=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newretail.muise.MuiseContainerActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="me.ele:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.view.ViewGroup > android.view.View[desc="关闭 按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 19,
      name: 'in-app|59zr1fkZ8aFQjIDUjrFFzhIDVl4oXBNg-PR8VT0Oqio=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="me.ele:id/parent_frame_bg"] > android.widget.RelativeLayout[id="me.ele:id/frame_bottom_bg"] > android.widget.FrameLayout[id="me.ele:id/view_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
