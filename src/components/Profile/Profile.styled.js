import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 120px;
  border-radius: 50%;
  background-color: grey;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const Details = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(191, 190, 190);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: rgb(243, 243, 243);
`;

export const StatItem = styled.li`
  display: flex;
  width: 120px;
  height: 100px;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;

  font-size: 16px;
  font-weight: bold;
`;

export const Label = styled.span`
  color: rgb(191, 190, 190);
`;

export const Quantity = styled.span`
  color: black;
`;
