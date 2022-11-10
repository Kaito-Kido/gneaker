import React from "react";
import {
  CartItem,
  CartItemAction,
  CartItemButton,
  CartItemCount,
  CartItemImage,
  CartItemLeft,
  CartItemName,
  CartItemNumber,
  CartItemPrice,
  CartItemRemove,
  CartItemRight,
} from "./styled";

const BuyItem = ({
  id,
  image,
  name,
  price,
  color,
  increase,
  decrease,
  deleteItem,
  state,
}) => {
  const styles = {
    backgroundColor: color,
  };
  return (
    <div className={id}>
      <CartItem>
        <CartItemLeft>
          <CartItemImage style={styles}>
            <img src={image} alt="image" />
          </CartItemImage>
        </CartItemLeft>
        <CartItemRight>
          <CartItemName>{name}</CartItemName>
          <CartItemPrice>${price}</CartItemPrice>
          <CartItemAction>
            <CartItemCount>
              <CartItemButton onClick={() => decrease(id)}>
                <img src="minus.png" alt="minus"></img>
              </CartItemButton>
              <CartItemNumber>{state[id - 1]}</CartItemNumber>
              <CartItemButton onClick={() => increase(id)}>
                <img src="plus.png" alt="plus" />
              </CartItemButton>
            </CartItemCount>
            <CartItemRemove onClick={() => deleteItem(id)}>
              <img src="trash.png" alt="delete" />
            </CartItemRemove>
          </CartItemAction>
        </CartItemRight>
      </CartItem>
    </div>
  );
};

export default BuyItem;
