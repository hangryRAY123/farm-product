import { StyledMainPage } from './styles';
import { About } from '../../blocks/about/About';
import { BenefitsList } from '../../blocks/best-list/BestList';

export const MainPage = () => {
  return (
    <StyledMainPage>
      <About />
      <BenefitsList />
    </StyledMainPage>
  );
};
