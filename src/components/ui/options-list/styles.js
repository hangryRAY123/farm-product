import styled from 'styled-components';

export const Options = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const OptionsItem = styled.li`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionsTitle = styled.span`
  font-weight: bold;
`;
