import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.Qunar',
  name: '去哪儿旅行',
  groups: [
    {
      key: 0,
      name: 'in-app|6kZctI6UAA5dWIqJXfGaQCm33tDUEorJ0ZVISOAllcI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.Qunar:id/atom_browser_layout"] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="携程金融信用贷"] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View[clickable=true] > android.view.View > android.view.View[id="close_leavedlg"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|LNrLqaOnnB5sUUvYizgilzuXKA9PrETJpuRtYiJh3Ts=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mqunar.hy.browser.activity.HyWebActivity01',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.Qunar:id/atom_browser_layout"] > android.widget.RelativeLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|NYPNtXw4Xysf-SxlRt-R0QRszis45DEPNiebRgLtE1A=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: 'com.mqunar.hy.browser.activity.HyWebActivity01',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.Qunar:id/atom_browser_layout"] > android.widget.RelativeLayout[clickable=true] > android.widget.FrameLayout > android.widget.FrameLayout > android.webkit.WebView > android.webkit.WebView[text="天天领券"] > android.view.View > android.view.View[id="app"] > android.view.View[id="cmsExpandCouponEntry-5"][clickable=true] > android.view.View > android.view.View > android.view.View > android.widget.TextView[text=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|PqftnvQyHms6oU-8oV3YL23H2f_dRnZU59KdVt7G4xM=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.mqunar.react.base.stack.container.QReactNativeActivity2',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.Qunar:id/rn_root_container"] > android.widget.FrameLayout[id="com.Qunar:id/rn_frame_container"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[desc="h_home_rn|HotelDetail|MainContent_IdentityTip_IdentityModal_Header|Touchable#md5=df06176b7dc0ab42"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'in-app|Sh9NwpsmhHhNVtic91Rz5qA7dp0N8qcFRD-ZLkYRESI=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.Qunar:id/atom_alexhome_dialog_container"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|W0nlfyUnJQ6RdeQDoMKpAtWk0zRjkm6xZ5tyExzNfqI=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.mqunar.react.base.stack.container.QReactNativeActivity3',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup > android.view.ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
