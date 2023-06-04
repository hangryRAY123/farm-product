import {
  StyledOrder,
  OrderInput,
  OrderValue,
} from './styles';
import { Title, TitleLevel } from '../title/Title';
import { Description } from '../description/Description';
import { Button } from '../button/Button';
import { useState } from 'react';

export const Order = ({ order }) => {
  const [address, setAddress] = useState('');

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${order.map(
      (product) =>
        `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  const fullPrice = order.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  return (
    <StyledOrder>
      <Title level={TitleLevel.H4} mB={24}>
        Сделать заказ
      </Title>
      <OrderInput
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Введите адрес доставки"
        name="address"
        type="text"
      />
      <Description fS={14} lH={21}>
        Цена
      </Description>
      <OrderValue>{fullPrice} руб.</OrderValue>
      <Button
        onClick={handleBuyClick}
        disabled={!(order.length && address)}
      >
        Купить
      </Button>
    </StyledOrder>
  );
};
