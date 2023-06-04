import { StyledLogo, LogoText } from './styles';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';

export const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
};
