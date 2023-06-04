import { StyledButton } from './styles';

export const Button = ({
  link,
  minW = '100%',
  onClick,
  disabled,
  children
}) => {
  return (
    <StyledButton
      $minW={minW}
      {...(link
        ? { to: link }
        : {
            as: 'button',
            type: 'button',
            onClick,
            disabled,
          })}
    >
      {children}
    </StyledButton>
  );
};
