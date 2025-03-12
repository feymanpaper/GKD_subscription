import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'flipboard.cn',
  name: '红板报',
  groups: [
    {
      key: 0,
      name: 'in-app|3BBdP-jhMbD64oqaM43IZr9FxL3vUEX34FNq2zLdPB0=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'flipboard.activities.SectionActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/fragment_container"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.widget.ImageButton[desc="返回"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|9bqO-GxnvHCCL6qNFhZUNQvDbGsBjttqx6gHntTr3Rc=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.ImageView[id="flipboard.cn:id/crossIv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|FnK-GoXTVYIpPViW1mayyUbdJswO-jG7KQ2e6s-QfQo=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="flipboard.cn:id/buttonDefaultPositive"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|LY-iGaOza7mW9AcaIAmbLbzuHZ1oWp7UZ-VaXAC7CNk=.png',
      actionDelay: 3000,
      actionMaximum: 5,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'flipboard.activities.DetailActivityStayOnRotation',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="flipboard.cn:id/detail_view_wrapper"] > android.widget.FrameLayout > android.widget.RelativeLayout > android.view.ViewGroup[id="flipboard.cn:id/scrollView"] > android.webkit.WebView > android.webkit.WebView[text="为妆容镀上一层温柔的璀璨——「香槟金」"] > android.view.View[id="activity-detail"][clickable=true] > android.view.View[clickable=true] > android.app.Dialog > android.view.View > android.widget.Button[text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|qu6n6orrvVvuyD-aERPrX8m9XGAM3Q8HVAeXCu5nXog=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.view.ViewGroup > android.widget.TextView[id="flipboard.cn:id/buttonDefaultPositive"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|rufqJ53Ur5Ivcp4K579q1-3Sdfxkpmg7nwOReNpFrD4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="flipboard.cn:id/fragment_container"] > android.widget.FrameLayout > android.view.ViewGroup > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.widget.FrameLayout[clickable=true] > android.widget.ImageView[id="flipboard.cn:id/btn_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
