import { ProfileWrapper } from './Profile.styled';
import { Description } from './Profile.styled';
import { Avatar } from './Profile.styled';
import { Name } from './Profile.styled';
import { Details } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatItem } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={username + "'s avatar"} />
        <Name>{username}</Name>
        <Details>@{tag}</Details>
        <Details>{location}</Details>
      </Description>
      <Stats>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileWrapper>
  );
};
