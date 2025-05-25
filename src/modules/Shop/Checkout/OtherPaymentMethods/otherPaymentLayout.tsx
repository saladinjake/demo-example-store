import React, { useState } from "react";
import styled from "styled-components";
import OrderSummary from "../OrderSummary";
import PaymentComponent from "./OtherPaymentMethods";
const CheckoutContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  gap: 20px;
  padding: 20px;
`;

const MainSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
`;


const Checkout = () => {
  

  return (
    <CheckoutContainer>
      <MainSection>
      <PaymentComponent/>
      </MainSection>

      {/* Sidebar */}
      <Sidebar>
        <OrderSummary />
      </Sidebar>
    </CheckoutContainer>
  );
};

export default Checkout;
