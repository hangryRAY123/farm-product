import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  padding: 0;
  min-height: 60px;
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 18px;
  min-width: ${(props) => props.$minW};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: #ffffff;
  background-color: #fc9b27;
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: #f35714;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
