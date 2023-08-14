import { StatItem } from '../StatItem/StatItem';

export const StatList = ({ items }) => {
  return (
    <ul class="stat-list">
      {items.map(item => (
        <li class="item" key={item.id}>
          <StatItem {...items} />
        </li>
      ))}
    </ul>
  );
};
