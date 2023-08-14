import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { GlobalStyled } from './GlobalStyled';
import { Statistics } from './Statistics/Statistics/Statistics';
import data from './data/data 3.json';
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
      <Statistics title="Upload stats" stats={data.stats} />
      <GlobalStyled />
    </div>
  );
};
