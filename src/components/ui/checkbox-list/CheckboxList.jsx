import { StyledCheckboxList } from './styles';
import { ChecboxItem } from '../checkbox-item/CheckboxItem';

export const CheckboxList = ({
  products,
  addToBasket,
  handleOnClickProduct,
}) => {
  return (
    <StyledCheckboxList>
      {products?.length ? (
        <>
          {products.map((e) => (
            <li key={e.id}>
              <ChecboxItem
                {...e}
                addToBasket={addToBasket}
                handleOnClickProduct={handleOnClickProduct}
              />
            </li>
          ))}
        </>
      ) : null}
    </StyledCheckboxList>
  );
};
