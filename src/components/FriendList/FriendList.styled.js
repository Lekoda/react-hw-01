import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 350px;
  padding: 10px 15px;

  border: 1px solid white;
  border-radius: 2px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
