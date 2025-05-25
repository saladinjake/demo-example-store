import React from "react";
import styled from "styled-components";

import Flex from "../../../../components/UIElements/Flex";
import Box from "../../../../components/UIElements/Box";
import { useNavigate } from "react-router-dom";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  color: #333;
`;

const CartIcon = styled.div`
  font-size: 200px;
  color: #eaeaea;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  margin: 15px 0;
`;

const CartText = styled.p`
  font-size: 16px;
  color: #555;
`;

const StartSourcingButton = styled.button`
  background: #ff6f00;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s;

  &:hover {
    background: #e65c00;
  }
`;

const EmptyCart = ({ message} : {message:string}) => {
  const navigate = useNavigate()
  return (
    <CartWrapper>
      <CartTitle>{message}</CartTitle>
    <Flex justifyContent="between" gap="30px 40px">
       <Box>
     
      <CartIcon />
    
       </Box>

       <Box mt="16">
       <CartText>You're protected on our platform:</CartText>
      <CartText>✔ Secure payment</CartText>
      <CartText>✔ Refund and returns</CartText>
      <CartText>✔ Reliable fulfillment</CartText>
      
       </Box>
    </Flex>
    
      <StartSourcingButton  onClick={()=> navigate("/shop")}>Start Sourcing</StartSourcingButton>
    </CartWrapper>
  );
};

export default EmptyCart;
