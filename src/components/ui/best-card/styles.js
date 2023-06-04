import styled from 'styled-components';

export const StyledCard = styled.article`
  max-width: 540px;
  padding: 20px;
  background-color: #e1edce;
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$image});
  }
`;

export const StyledProduct = styled.span`
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  background-color: #88aa4d;
  max-width: 178px;
  text-align: center;
  margin-left: 72px;
`;
