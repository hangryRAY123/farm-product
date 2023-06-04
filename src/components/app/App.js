import { GlobalStyle } from './styles';
import { PageWrapper } from '../layout/page-wrapper/PageWrapper';
import { HashRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <PageWrapper />
      </Router>
    </>
  );
};
