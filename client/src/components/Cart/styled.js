import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 600px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
  border-radius: 30px;
  padding: 0 28px;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
    0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
    0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
    0 81px 81px rgba(0, 0, 0, 0.07);

  ::before {
    content: "";
    background-color: #f6c90e;
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 100%;
    top: -20%;
    left: -50%;
    z-index: -1;
  }

  @media only screen and (max-width: 800px) {
    margin: 20px auto;
  }

  @media only screen and (max-width: 480px) {
    width: 340px;
  }

  @media only screen and (max-width: 320px) {
    width: 300px;
    height: 480px;
    padding: 0 14px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 28px;
  display: block;
  margin: 12px 0;
`;
