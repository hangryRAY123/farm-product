import styled from 'styled-components';

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: ${(props) => `${props.$fS}px`};
  line-height: ${(props) => `${props.$lH}px`};
  color: #333333;
  max-width: ${(props) => props.$maxW};
  margin: 0;
`;
