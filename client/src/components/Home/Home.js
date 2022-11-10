import React, { useEffect, useState } from "react";
import { CartBody, CartEmpty, CartTitle, MainContainer } from "./styled";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import axios from "axios";
import BuyItem from "../BuyItem/BuyItem";
import { shoes } from "./shoes";
export const Home = () => {
  const [state, setState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/");
        setState(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const postData = async (data) => {
    await axios.post("/api/update", data);
  };

  const IncreaseItem = (id) => {
    let count = state[id - 1] + 1;
    const arr = [...state.slice(0, id - 1), count, ...state.slice(id)];
    setState(arr);
    try {
      postData(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const DecreaseItem = (id) => {
    if (state[id - 1] > 0) {
      let count = state[id - 1] - 1;
      const arr = [...state.slice(0, id - 1), count, ...state.slice(id)];
      setState(arr);
      try {
        postData(arr);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const DeleteItem = (id) => {
    if (state[id - 1] > 0) {
      const arr = [...state.slice(0, id - 1), 0, ...state.slice(id)];
      setState(arr);
      try {
        postData(arr);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    const CheckCart = () => {
      for (let i = 0; i < state.length; i++) {
        if (state[i] !== 0) {
          return false;
        }
      }
      return true;
    };
    const Total = () => {
      let count = 0;
      for (let i = 0; i < state.length; i++) {
        count = count + state[i] * shoes[i].price;
      }
      return count.toFixed(2);
    };
    const check = CheckCart();
    setIsEmpty(check);
    const total = Total();
    setSum(total);
  }, [state, shoes]);

  return (
    <MainContainer>
      <Cart>
        <CartTitle>Our Products</CartTitle>
        <CartBody>
          {shoes.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                color={item.color}
                increase={IncreaseItem}
                state={state}
              />
            );
          })}
        </CartBody>
      </Cart>
      <Cart>
        <CartTitle>
          Your Cart<span>${sum}</span>
        </CartTitle>
        <CartBody>
          {isEmpty && <CartEmpty>Your cart is empty</CartEmpty>}
          {shoes.map((item) => {
            if (state[item.id - 1] > 0) {
              return (
                <BuyItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  increase={IncreaseItem}
                  decrease={DecreaseItem}
                  deleteItem={DeleteItem}
                  state={state}
                />
              );
            }
          })}
        </CartBody>
      </Cart>
    </MainContainer>
  );
};
