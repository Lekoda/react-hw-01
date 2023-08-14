import styled from 'styled-components';

const getStatus = props => (props.isOnline ? 'green' : 'red');

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border: transparent;
  border-radius: 50%;
  /* background-color: red; */
  background-color: ${getStatus};
`;

export const Avatar = styled.img`
  padding: 5px;
  border: transparent;
  border-radius: 10px;
  background-color: brown;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
