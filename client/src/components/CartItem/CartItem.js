import React from "react";
import {
  ItemDes,
  ItemName,
  ShopButton,
  ItemPrice,
  ShopItemButton,
  ShopItem,
  ItemImage,
} from "./styled";

const CartItem = ({
  id,
  image,
  name,
  description,
  price,
  color,
  increase,
  state,
}) => {
  const styles = {
    backgroundColor: color,
  };

  return (
    <ShopItem>
      <ItemImage style={styles}>
        <img src={image} alt="img"></img>
      </ItemImage>
      <ItemName>{name}</ItemName>
      <ItemDes>{description}</ItemDes>
      <ShopButton>
        <ItemPrice>${price}</ItemPrice>
        <ShopItemButton onClick={() => increase(id)}>
          {state[id - 1] <= 0 && "ADD TO CART"}
          {state[id - 1] > 0 && <img src="/check.png" alt="check" />}
        </ShopItemButton>
      </ShopButton>
    </ShopItem>
  );
};

export default CartItem;
