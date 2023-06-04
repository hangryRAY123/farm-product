import { StyledByuPage } from './styles';
import { Form } from '../../blocks/form/Form';
import { ProductList } from '../../blocks/product-list/ProductList';
import { products } from '../../../mocks/products';
import { useState } from 'react';

export const BuyPage = () => {
  const [order, setOrder] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (id) => {
    swiperRef.slideTo(id, 0);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
      };
      setOrder([...order, newItem]);
    } else {
      setOrder(order.filter((e) => e.id !== item.id));
    }
  };

  return (
    <StyledByuPage>
      {products && products.length ? (
        <>
          <Form
            products={products}
            addToBasket={addToBasket}
            order={order}
            handleOnClickProduct={handleOnClickProduct}
          />
          <ProductList
            products={products}
            order={order}
            setSwiperRef={setSwiperRef}
          />
        </>
      ) : (
        'Продукты были слишком вкусные и их разобрали.'
      )}
    </StyledByuPage>
  );
};
