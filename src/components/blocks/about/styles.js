import styled from 'styled-components';
import aboutImage from '../../../assets/about.svg'

export const StyledAbout = styled.section`
  background-color: #d8ecfe;
  color: #000000;
  padding: 183px 90px;
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 446px;
    height: 446px;
    background-color: #c4e2ff;
    border-radius: 50%;
    right: 0;
    margin-right: 90px;
    top: 0;
    margin-top: 76px;
  }

  &::after {
    position: absolute;
    content: '';
    width: 273px;
    height: 607px;
    background-repeat: no-repeat;
    background-image: url(${aboutImage});
    top: 0;
    right: 0;
    margin-top: 57px;
    margin-right: 177px;
  }
`;

