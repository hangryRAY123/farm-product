import styled from 'styled-components';

export const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  background-color: #d8ecfe;
  padding: 4px 8px;
  max-width: 140px;
  text-align: center;
  margin-top: auto;
`;

export const ProductImage = styled.img`
  object-fit: cover;
`;
