import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.newsreader.activity',
  name: '网易新闻',
  groups: [
    {
      key: 0,
      name: 'in-app|8mt6ihi5jbP1hH00xPnpAeDGndp4nyKO_R2377cn6eM=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/container"] > android.view.ViewGroup[id="com.netease.newsreader.activity:id/coordinator"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/design_bottom_sheet"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/label_fragment_layout"] > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/layout_info"] > android.widget.TextView[id="com.netease.newsreader.activity:id/label_name_text"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|gKE50n8V7qmUI1kvdV_M9FOhUqtNBYm51_GxT6wX2X0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/webview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/root"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/webview_layout"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/webview_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/web_container"] > android.webkit.WebView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'system|R2x8F9xmcix1GSEI4vtgQuT8xNu4iiNQ_Z3jcYIqwcw=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/root_layout"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/real_content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.FrameLayout > androidx.viewpager.widget.ViewPager[id="com.netease.newsreader.activity:id/pager"] > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/tabs"] > android.widget.HorizontalScrollView[id="com.netease.newsreader.activity:id/real_tabs"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.RelativeLayout[desc="娱乐栏目，按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|SWydODmHG5PkLclmGbvyyUcsuN_RIPzek-5EeTpP0SA=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/dialog_root"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/dialog_container"] > android.widget.RelativeLayout > android.widget.Button[id="com.netease.newsreader.activity:id/ok"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|VWIammSECptlLbYu4qKN6sgOxI4rJl7CjY1Ig93jj-M=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/webview"] > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/root"] > android.widget.FrameLayout > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/webview_layout"] > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/webview_container"] > android.widget.FrameLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/web_container"] > android.webkit.WebView > android.webkit.WebView[text="中国商报：【#长和暴涨24%#！#李嘉诚拟228亿美元卖掉43个港口#】3月5日，长和股价大涨，盘中涨幅近24%。截至5日14时40分，长和股价报46.95港元/股，涨幅为21.47%。3月4日深夜，长江和记实业有限公司（长和）在港交所公告，发布《有关涉及和记港口集团所拥有及经营若干港口之交易之独家磋商內幕消息》。根据公告，长和与贝莱德（BlackRock）牵头的财团达成原则性协议，出售其全球港口业务核心资产，其中涉及巴拿马港口公司90%股权。 根据公告，长和拟向该财团全数出售持有的和记港口控股（HPHS）及和记港口集团控股（HPGHL）股权，二者合计控制着和记港口集团80%的全球权益。标的资产覆盖亚欧美洲23个国家的43个港口，涵盖199个泊位及配套的智能码头管理系统、全球物流网络等核心资源。据悉，此次整体出售总企业价值为228亿美元，预期将为该集团带来逾190亿美元的现金收益。#港股#"] > android.view.View[clickable=true] > android.view.View[id="root"] > android.view.View > android.widget.TextView[text="APP内打开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|WcOyz5VnRvr2lzXf2jMLuT6Bb3RZ1ATybMPMJVmnS8Y=.png',
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
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_fragment_content"] > android.widget.RelativeLayout[id="com.netease.newsreader.activity:id/diamond_container"] > android.widget.LinearLayout > android.widget.Button[id="com.netease.newsreader.activity:id/diamond_buy"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'in-app|xYTs3gNqUZChVpq7Ywj4wt3QsCdM3GIzWPwThcgL75s=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.LinearLayout > android.widget.LinearLayout[id="com.netease.newsreader.activity:id/dialog_container"] > android.widget.FrameLayout[id="com.netease.newsreader.activity:id/base_dialog_footer"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.netease.newsreader.activity:id/nr_dialog_footer_content"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.netease.newsreader.activity:id/nr_dialog_footer"] > android.widget.Button[id="com.netease.newsreader.activity:id/nr_dialog_footer_negative"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
