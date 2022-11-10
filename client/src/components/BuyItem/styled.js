import styled from "styled-components/macro";

export const CartItem = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const CartItemLeft = styled.div`
  flex: 0;
`;

export const CartItemImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 34px;

  img {
    display: block;
    width: 140%;
    transform: rotate(-28deg) translateY(-40px);
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
  }
`;

export const CartItemRight = styled.div`
  flex: 1;
`;

export const CartItemName = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const CartItemPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const CartItemAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CartItemCount = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CartItemButton = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 100%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  user-select: none;
  background-color: #eee;

  &:hover {
    background-color: #ddd;
  }

  img {
    height: 9px;
    width: 9px;
  }
`;

export const CartItemNumber = styled.div`
  font-size: 14px;
  margin: 0 8px;
  width: 20px;
  text-align: center;
`;

export const CartItemRemove = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  user-select: none;
  background-color: #f5c80e;

  &:hover {
    background-color: #f8d43f;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
  }

  img {
    height: 18px;
    width: 18px;
  }
`;
