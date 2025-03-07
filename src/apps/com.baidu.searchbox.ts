import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: 'in-app|v6IOYX7OLaMe5gn-eLhX6oKVkieXdrnmpjmqg5k0uPE=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.lightbrowser.ImmerseBrowserActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.widget.FrameLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'system|zObKTU9MwYn3LmTQ4dJSl9hcSRQSVs-lU6YX-dDkOhc=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.RelativeLayout[id="com.baidu.searchbox:id/ugc_header"] > android.widget.TextView[id="com.baidu.searchbox:id/ugc_album_name"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 2,
      name: 'in-app|J0xTD3r1B6vLKDCCB4TZ8iXszmy_KrUZp7dkmptdRc8=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > com.baidu.searchbox.widget.SlidingPaneLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.RelativeLayout > android.widget.ImageView[id="com.baidu.searchbox:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 3,
      name: 'in-app|xb3SQ03zy-_-Hb1750Gx2rtE1rml5fTazBEBWoGo7zc=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.update.UpdateDialogActivity',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 4,
      name: 'system|OTqKpr0xrWIp084M3Vp9I_6R3h3Ng9soGQir9KiuHPM=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="始终允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 5,
      name: 'in-app|sV1NiTtzKJJViva5MZuwxTqc2LEXd8O7_B06Oi70iQM=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.RelativeLayout > android.widget.RelativeLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.ImageView[id="com.baidu.searchbox:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 6,
      name: 'system|QAoA6glkvWwiErlz8j-Mh0fV3pvJoGYaD4nu3ShbqkI=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > com.baidu.searchbox.widget.SlidingPaneLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.baidu.searchbox:id/obfuscated"] > android.widget.LinearLayout[id="com.baidu.searchbox:id/obfuscated"] > android.view.ViewGroup[id="com.baidu.searchbox:id/obfuscated"] > android.widget.ScrollView > android.view.ViewGroup > android.view.ViewGroup[id="com.baidu.searchbox:id/obfuscated"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 7,
      name: 'system|QJa6OzJHO47gtw8K2gtXqJv42G1ca3UPuz7c736svTY=.png',
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.lbe.security.miui:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.lbe.security.miui:id/dialog_root_view"] > android.widget.LinearLayout[id="com.lbe.security.miui:id/parentPanel"][clickable=true] > android.widget.LinearLayout[id="com.lbe.security.miui:id/buttonPanel"] > android.widget.Button[text="始终允许"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
