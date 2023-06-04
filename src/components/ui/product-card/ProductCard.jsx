import {
  StyledProductCard,
  ContentWrapper,
  ProductPrice,
  ProductImage,
} from './styles';
import { Title, TitleLevel } from '../title/Title';
import { Tabs } from '../tabs/Tabs';
import { OptionsList } from '../options-list/OptionsList';

export const ProductCard = (props) => {
  const {
    name,
    description,
    price,
    weight,
    image,
    specifications,
    structure,
  } = props;

  const tabsList = [
    {
      title: 'Oписание',
      content: description,
    },
    {
      title: 'Характеристики',
      content: <OptionsList list={specifications} />,
    },
    {
      title: 'Свойства',
      content: <OptionsList list={structure} />,
    },
  ];

  return (
    <StyledProductCard>
      <ProductImage
        src={image}
        width='248'
        height='248'
        alt='{name}'
      />
      <ContentWrapper>
        <Title level={TitleLevel.H3} mB={16}>
          {name}
        </Title>
        <Tabs tabs={tabsList} />
        <ProductPrice>
          {price} руб. / {weight} гр.
        </ProductPrice>
      </ContentWrapper>
    </StyledProductCard>
  );
};
