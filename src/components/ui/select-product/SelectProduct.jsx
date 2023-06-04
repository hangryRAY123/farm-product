import { StyledSelectProduct } from './styles';
import { Title, TitleLevel } from '../title/Title';
import { CheckboxList } from '../checkbox-list/CheckboxList';

export const SelectProduct = ({
  products,
  addToBasket,
  handleOnClickProduct,
}) => {
  return (
    <StyledSelectProduct>
      <Title level={TitleLevel.H4} mB={27}>
        Выберите продукты
      </Title>
      <CheckboxList
        products={products}
        addToBasket={addToBasket}
        handleOnClickProduct={handleOnClickProduct}
      />
    </StyledSelectProduct>
  );
};
