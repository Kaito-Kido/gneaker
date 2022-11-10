import React from "react";
import { Container, Logo } from "./styled";
const Cart = ({ children }) => {
  return (
    <Container>
      <Logo src="nike.png" alt="nike" />
      {children}
    </Container>
  );
};

export default Cart;
