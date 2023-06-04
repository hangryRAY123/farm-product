import {
  StyledBestList,
  BestList,
  BestItem,
} from './styles';
import { BestCard } from '../../ui/best-card/BestCard';
import { Button } from '../../ui/button/Button';
import { bestList } from '../../../mocks/best-list';
import { Title, TitleLevel } from '../../ui/title/Title';

export const BenefitsList = () => {
  return (
    <StyledBestList>
      {bestList?.length ? (
        <>
          <Title level={TitleLevel.H2}>
            Почему фермерские продукты лучше?
          </Title>
          <BestList>
            {bestList.map((e) => (
              <BestItem key={e.id}>
                <BestCard {...e} />
              </BestItem>
            ))}
          </BestList>
          <Button minW="260px" link="/buy">
            Купить
          </Button>
        </>
      ) : null}
    </StyledBestList>
  );
};
