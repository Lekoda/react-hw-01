import { StatList } from '../StatList/StatList';
import { StatWrapper } from './Statisctics.styled';
import { Title } from './Statisctics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      {title && <Title>{title}</Title>}
      <StatList stats={stats} />
    </StatWrapper>
  );
};
