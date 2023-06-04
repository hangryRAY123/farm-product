import styled, { css } from 'styled-components';
import checkbox from '../../../assets/checkbox.svg';

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkbox});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: #f7f7f7;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
