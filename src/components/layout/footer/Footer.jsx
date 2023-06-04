import { StyledFooter } from './styles';
import { Logo } from '../../ui/logo/Logo';
import { Copyright } from '../../ui/copyright/Copyright';

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Copyright />
    </StyledFooter>
  );
};
