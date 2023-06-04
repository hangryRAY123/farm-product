import { Button } from '../../ui/button/Button';
import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const pageUrl = useLocation().pathname;
  const links = [
    {
      to: '/',
      item: (
        <Button minW="260px" link="/">
          Главная
        </Button>
      ),
    },
    {
      to: '/buy',
      item: (
        <Button minW="260px" link="/buy">
          Купить
        </Button>
      ),
    },
  ];

  return (
    <nav>
      <ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <li key={link.to}>{link.item}</li>
          ))}
      </ul>
    </nav>
  );
};
