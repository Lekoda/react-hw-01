import { Label } from './StatItem.styled';
import { Percentage } from './StatItem.styled';

export const StatItem = ({ label, percentage }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};
