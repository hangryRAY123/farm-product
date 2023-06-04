import { StyledAbout } from './styles';
import { TitleLevel, Title } from '../../ui/title/Title';
import { Description } from '../../ui/description/Description';

export const About = () => {
  return (
    <StyledAbout>
      <Title level={TitleLevel.H1} maxW={'630px'} mB={24}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <Description maxW='530px'>
        Все продукты изготавливаются под заказ. Фермеры
        начинают готовить продукты за день до отправки
        заказа клиентам. Именно поэтому мы принимаем заказы
        заранее и доставляем продукты максимально свежими.
      </Description>
    </StyledAbout>
  );
};
