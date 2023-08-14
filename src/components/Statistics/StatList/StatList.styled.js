import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;
function getBackgroundColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: white;
  font-weight: bold;
  background-color: ${getBackgroundColor};
`;
