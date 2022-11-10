import styled from "styled-components/macro";

export const ItemName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 25px 0 20px;
  line-height: 1.5;
`;

export const ItemDes = styled.div`
  font-size: 13px;
  color: #777;
  line-height: 1.8;
  margin-bottom: 20px;
`;

export const ShopButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ShopItemButton = styled.div`
  cursor: pointer;
  background-color: #f6c90e;
  font-weight: 700;
  font-size: 14px;
  box-sizing: border-box;
  width: auto;
  height: 46px;
  min-width: 46px;
  padding: 16px 20px;
  border-radius: 30px;
  transition: all 0.25s ease;
  user-select: none;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: #f8d43f;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ShopItem = styled.div`
  padding: 40px 0;

  &:first-child {
    padding-top: 0;
  }
`;

export const ItemImage = styled.div`
  border-radius: 30px;
  height: 380px;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* background-color: ; */

  img {
    display: block;
    width: 100%;
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
    transform: rotate(-24deg);
    margin-left: -16px;
  }

  @media only screen and (max-width: 320px) {
    height: 240px;
  }
`;
