import styled from 'styled-components';

export const StyledBestList = styled.section`
  padding: 100px 90px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin: 64px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 20px;
`;

export const BestItem = styled.li`
  display: flex;
`;
