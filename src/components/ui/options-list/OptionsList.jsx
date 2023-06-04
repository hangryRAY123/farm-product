import {
  Options,
  OptionsItem,
  OptionsTitle,
} from './styles';

export const OptionsList = ({ list = [] }) => {
  return (
    <Options>
      {list.map((option, index) => (
        <OptionsItem key={index}>
          <OptionsTitle>{option.property}:</OptionsTitle>{' '}
          {option.value}
        </OptionsItem>
      ))}
    </Options>
  );
};
