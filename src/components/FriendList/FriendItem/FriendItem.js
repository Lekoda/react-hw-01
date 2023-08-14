import { Status } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status>{isOnline}</Status>
      <img src={avatar} alt={name + "'s avatar"} width="48" />
      <p>{name}</p>
    </>
  );
};
