import { StatList } from '../StatList/StatList';

export const Statistics = ({ title }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <StatList />
    </section>
  );
};
