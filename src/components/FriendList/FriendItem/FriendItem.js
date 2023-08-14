import { Status } from './FriendItem.styled';
import { Avatar } from './FriendItem.styled';
import { Name } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name + "'s avatar"} width="48" />
      <Name>{name}</Name>
    </>
  );
};
