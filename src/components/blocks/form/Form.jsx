import { StyledForm } from './styles';
import { SelectProduct } from '../../ui/select-product/SelectProduct';
import { Order } from '../../ui/order/Order';

export const Form = ({
  products,
  addToBasket,
  order,
  handleOnClickProduct,
}) => {
  return (
    <StyledForm>
      <SelectProduct
        products={products}
        addToBasket={addToBasket}
        handleOnClickProduct={handleOnClickProduct}
      />
      <Order order={order} />
    </StyledForm>
  );
};
