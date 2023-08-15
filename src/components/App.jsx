import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { GlobalStyled } from './GlobalStyled';
import { Statistics } from './Statistics/Statistics/Statistics';
import data from './data/data 3.json';
import { FriendList } from './FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

      <GlobalStyled />
    </div>
  );
};
