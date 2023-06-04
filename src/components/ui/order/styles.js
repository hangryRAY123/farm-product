import styled from 'styled-components';

export const StyledOrder = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const OrderInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;

  ::placeholder {
    color: #333333;
  }
`;

export const OrderValue = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  margin-top: 8px;
  margin-bottom: 32px;
`;
