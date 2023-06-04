import styled from 'styled-components';
import { TitleLevel } from './Title';

export const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 700;

  max-width: ${(props) => props.$maxW}};

  margin-left: ${(props) => {
    let marginLeft = `${props.$mL}px`;
    if (props.$mL === undefined) {
      marginLeft = '0';
    }
    return marginLeft;
  }};

  margin-top: ${(props) => {
    let marginTop = `${props.$mT}px`;
    if (props.$mT === undefined) {
      marginTop = '0';
    }
    return marginTop;
  }};

  margin-bottom: ${(props) => `${props.$mB}px`};

  line-height: ${(props) => {
    let lineHeight = '20px';
    if (props.$level === TitleLevel.H1) {
      lineHeight = '51px';
    }
    if (props.$level === TitleLevel.H2) {
      lineHeight = '41px';
    }
    if (props.$level === TitleLevel.H3) {
      lineHeight = '31px';
    }
    if (props.$level === TitleLevel.H4) {
      lineHeight = '27px';
    }
    return lineHeight;
  }};

  font-size: ${(props) => {
    let fontSize = '20px';
    if (props.$level === TitleLevel.H1) {
      fontSize = '44px';
    }
    if (props.$level === TitleLevel.H2) {
      fontSize = '36px';
    }
    if (props.$level === TitleLevel.H3) {
      fontSize = '24px';
    }
    if (props.$level === TitleLevel.H4) {
      fontSize = '18px';
    }
    return fontSize;
  }};
`;
