import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReaderFree',
  name: '掌阅',
  groups: [
    {
      key: 0,
      name: 'in-app|487T-yIDX2CUZe6Li6CySlOQ6y_0acvNhs1A96I5c4Q=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.chaozh.iReaderFree:id/action_bar_root"] > android.widget.FrameLayout[id="android:id/content"] > androidx.appcompat.widget.LinearLayoutCompat[id="com.chaozh.iReaderFree:id/parentPanel"] > android.widget.ScrollView[id="com.chaozh.iReaderFree:id/buttonPanel"] > android.widget.LinearLayout > android.widget.Button[id="android:id/button2"][text="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
