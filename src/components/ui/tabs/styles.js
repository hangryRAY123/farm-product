import styled from 'styled-components';

export const TitleList = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const TabButton = styled.button`
  font-family: 'Inter', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 8px 12px;
  background-color: ${(props) =>
    props.active ? '#88AA4D' : 'none'};
  color: ${(props) => (props.active ? '#ffffff' : 'none')};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  max-height: 105px;
  overflow-y: overlay;
`;
