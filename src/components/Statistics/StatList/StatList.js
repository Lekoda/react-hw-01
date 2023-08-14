import { StatItem } from '../StatItem/StatItem';
import { List } from './StatList.styled';
import { Item } from './StatList.styled';

export const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <StatItem label={label} percentage={percentage} />
        </Item>
      ))}
    </List>
  );
};
