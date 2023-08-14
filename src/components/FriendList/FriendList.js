import { FriendItem } from './FriendItem/FriendItem';
import { List } from './FriendList.styled';
import { Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
};
