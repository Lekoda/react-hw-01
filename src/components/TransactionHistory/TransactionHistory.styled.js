import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  padding: 5px;
  width: 750px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  width: 350px;
  padding: 15px;
  background-color: rgb(22, 176, 193);
  border-right: 1px solid white;
  color: white;
  text-transform: uppercase;
`;

export const TableData = styled.td`
  width: 350px;
  height: 50px;
  text-align: center;
  border: 1px solid lightgrey;
  color: grey;

  :nth-child(1) {
    text-transform: capitalize;
  }
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: rgb(229, 229, 229);
  }
`;
