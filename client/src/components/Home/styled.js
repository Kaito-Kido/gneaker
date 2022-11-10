import styled, { keyframes } from "styled-components/macro";

const animate = keyframes`
0% {
  transform: scaleX(1.03);
  transform: scaleY(1.03);
}

50% {
  transform: scaleX(1);
  transform: scaleY(1);
}

100% {
  transform: scaleX(1.03);
  transform: scaleY(1.03);
}`;

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  padding: 0 20px;
  max-width: 760px;
  margin: 0 auto;

  ::before {
    content: "";
    background-color: #f6c90e;
    display: block;
    position: fixed;
    width: 800%;
    height: 900%;
    animation: ${animate} 20s ease-in-out infinite;
    border-radius: 50%;
    aspect-ratio: 1;
    top: 50%;
    left: -260%;
    z-index: -1;
  }

  @media only screen and (max-width: 800px) {
    height: auto;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const CartTitle = styled.div`
  width: 100%;
  margin: 16px 0;
  font-size: 24px;
  font-weight: 700;
  color: #303841;
  position: relative;
  span {
    float: right;
  }
`;

export const CartBody = styled.div`
  height: calc(100% - 98px);
  position: relative;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const CartEmpty = styled.p`
  font-size: 14px;
`;
