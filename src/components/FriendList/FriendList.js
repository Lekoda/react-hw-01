import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendItem avatar={avatar} name={name} status={isOnline} />
        </li>
      ))}
    </ul>
  );
};
