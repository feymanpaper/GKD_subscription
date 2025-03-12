import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lanjingren.ivwen',
  name: '美篇',
  groups: [
    {
      key: 0,
      name: 'in-app|3I8QaQ1qkDytaPWpjlUPWOFQ-uwmoFgjkDdZBvCLLVo=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="PayPal快闪收单"] > android.view.View > android.view.View > android.view.View > android.view.View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|bUzBkhHyqFNUWlz9C4rtQI18F-5SFROXUtsK9OxcEa8=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup[id="com.lanjingren.ivwen:id/v_content_background"] > android.widget.LinearLayout[id="com.lanjingren.ivwen:id/ll_privacy"] > android.widget.TextView[id="com.lanjingren.ivwen:id/tv_agreement_privacy"][text="《美篇隐私服务协议》"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|c6f6AupTaJ4G9dVVfaSc_mLnx3mN2mYimFKsEq9UN2Q=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.LinearLayout[id="com.android.permissioncontroller:id/grant_dialog_container"] > android.widget.FrameLayout[id="com.android.permissioncontroller:id/perm_button_container"] > android.widget.LinearLayout[id="com.android.permissioncontroller:id/perm_button_root"] > android.widget.Button[id="com.android.permissioncontroller:id/permission_allow_button"][text="仅使用期间允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|CFSQF4KWHCz4vdyHZfN8TYg4U8AFZ7bp2DThTNNOwDg=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="com.lanjingren.ivwen:id/mine_ui_author_read_fin_txt"][text="我知道了"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|DScj2rpq4tGYC0tQWsLCg4jyxqfl2HOs82O7OepFQhA=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.lanjingren.ivwen:id/rootLayout"] > android.widget.LinearLayout > android.view.ViewGroup > android.widget.ImageView[id="com.lanjingren.ivwen:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|DtNFrDqAH5aHy_dfpIGbXW6WHv_DZsLtvwzWy9AF-zE=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > androidx.recyclerview.widget.RecyclerView[id="com.lanjingren.ivwen:id/rv_share_default"] > android.view.ViewGroup[id="com.lanjingren.ivwen:id/ll_item"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|gkoVtp5yNSRy9wLfqYH5HIdwrVimGfu2zUU3NSfCaM4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lanjingren.ivwen:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > androidx.drawerlayout.widget.DrawerLayout[id="com.lanjingren.ivwen:id/drawer_layout"] > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.lanjingren.ivwen:id/main_content"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup[id="com.lanjingren.ivwen:id/vcl_tab"] > android.widget.LinearLayout[id="com.lanjingren.ivwen:id/vcl_right_layout"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.lanjingren.ivwen:id/img_top_sign"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'in-app|HYa2yb74XCBw8GQEXnhs95RRM7Z1nW9ZlSlXYaDK1ak=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.baidu.input:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.input:id/imeAlertDialogContainer"] > android.widget.LinearLayout[id="com.baidu.input:id/parentPanel"] > android.widget.FrameLayout[id="com.baidu.input:id/customPanel"] > android.widget.FrameLayout[id="com.baidu.input:id/custom"] > android.widget.LinearLayout > android.widget.TextView[id="com.baidu.input:id/energy_station_payment_failed_continue_pay"][text="继续支付"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 8,
      name: 'in-app|lOMryyd7oSnhFnKpQQ7BLJVhnaxDD0DXh9O9dfz4F2M=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.lanjingren.ivwen:id/mine_sayhello_cancel_iv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 9,
      name: 'in-app|Nr1Umd40nCtEJOtO6QUFAkiT0BG_T_5AIUbEHGnsV88=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.view.ViewGroup[id="com.lanjingren.ivwen:id/v_content_background"] > android.view.ViewGroup[id="com.lanjingren.ivwen:id/vcl_action_all"] > android.widget.RelativeLayout[id="com.lanjingren.ivwen:id/v_action3"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 10,
      name: 'in-app|_ZheMMXV-J0lzfFhk5AywXEb2VwxThh7QE9sFJaMFbg=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lanjingren.ivwen:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > androidx.drawerlayout.widget.DrawerLayout[id="com.lanjingren.ivwen:id/drawer_layout"] > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.lanjingren.ivwen:id/main_content"] > androidx.recyclerview.widget.RecyclerView > android.widget.FrameLayout > android.view.ViewGroup > androidx.viewpager.widget.ViewPager[id="com.lanjingren.ivwen:id/v_pager"] > android.view.ViewGroup > android.view.ViewGroup[id="com.lanjingren.ivwen:id/refresh_layout"] > androidx.recyclerview.widget.RecyclerView[id="com.lanjingren.ivwen:id/rv_layout"] > android.view.ViewGroup > android.view.ViewGroup[id="com.lanjingren.ivwen:id/vcl_my_join_layout"][clickable=true] > android.widget.TextView[id="com.lanjingren.ivwen:id/btn_login"][text="立即登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
