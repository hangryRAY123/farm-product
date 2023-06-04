import { StyledDescription } from './styles';

export const Description = ({
  children,
  fS = 18,
  lH = 27,
  maxW = '100%',
}) => {
  return (
    <StyledDescription $fS={fS} $lH={lH} $maxW={maxW}>
      {children}
    </StyledDescription>
  );
};
