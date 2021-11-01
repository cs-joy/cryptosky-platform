import React from 'react';
import Reward from 'react-rewards';

// in render
<Reward
  ref={(ref) => { this.reward = ref }}
  type='emoji'
>
  <button onClick={this.fetchSomeData} />
</Reward>

// in fetchSomeData:
// to reward a user with confetti/emoji rain:
this.reward.rewardMe();
// to "punish" user :
this.reward.punishMe();
