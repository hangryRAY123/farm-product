import { Main } from './styles';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MainPage } from '../../pages/main-page/MainPage';
import { BuyPage } from '../../pages/buy-page/BuyPage';
import { Routes, Route } from 'react-router-dom';

export const PageWrapper = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};
