import { StyledCard, StyledProduct } from './styles';
import { Title, TitleLevel } from '../title/Title';
import { Description } from '../description/Description';

export const BestCard = (props) => {
  const { product, title, text, image } = props;
  return (
    <StyledCard $image={image}>
      {product === 'Фермерские продукты' ? (
        <StyledProduct>{product}</StyledProduct>
      ) : (
        <StyledProduct
          style={{ backgroundColor: '#F75531' }}
        >
          {product}
        </StyledProduct>
      )}
      <Title level={TitleLevel.H4} mB={20} mT={6} mL={72}>
        {title}
      </Title>
      <Description>{text}</Description>
    </StyledCard>
  );
};
