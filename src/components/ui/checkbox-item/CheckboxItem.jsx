import { useState } from 'react';
import { VisuallyHiddenInput } from '../../styled/visually-hidden-input';
import { CheckboxLabel } from './styles';

export const ChecboxItem = (props) => {
  const {
    name,
    addToBasket = Function.prototype,
    id,
    price,
    handleOnClickProduct,
  } = props;

  const [filter, setFilter] = useState(false);

  const handleChange = (item) => {
    setFilter(!filter);
    addToBasket(item);
  };

  const handleSwiper = (id) => {
    if (!filter) {
      handleOnClickProduct(id);
    }
  };

  return (
    <article>
      <label>
        <VisuallyHiddenInput
          checked={filter}
          onChange={() => handleChange({ id, name, price })}
          type="checkbox"
        />
        <CheckboxLabel
          onClick={() => handleSwiper(id)}
          $isChecked={filter}
        >
          {name}
        </CheckboxLabel>
      </label>
    </article>
  );
};
