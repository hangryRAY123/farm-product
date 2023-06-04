import { StyledTitle } from './styles';

export const TitleLevel = {
  H1: '1',
  H2: '2',
  H3: '3',
  H4: '4',
  H5: '5',
  H6: '6',
};

export const Title = ({
  level = 1,
  children,
  maxW = '100%',
  mB = 0,
  mT = 0,
  mL = 0,
}) => {
  return (
    <StyledTitle
      as={`h${level}`}
      $level={level}
      $maxW={maxW}
      $mB={mB}
      $mT={mT}
      $mL={mL}
    >
      {children}
    </StyledTitle>
  );
};
