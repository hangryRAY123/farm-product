import { StyledHeader } from './styles';
import { Logo } from '../../ui/logo/Logo';
import { Nav } from '../../layout/nav/Nav';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};
