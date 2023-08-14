import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border: transparent;
  border-radius: 50%;
  background-color: ${isOnline => (isOnline ? 'green' : 'red')};
`;
