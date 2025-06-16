import { useCart } from "../../../contexts/CartDrawerContext";
import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3{
   font-size: 20px
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px
`;

const Total = styled(SummaryRow)`
  font-weight: bold;
  font-size: 22px;
`;

const OrderSummary = () => {
 const { cart }  = useCart()
   const subtotal = cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
    const shipping = cart.reduce((acc: any, item: any) => acc + item.shipping, 0);
    const discount = cart.reduce((acc: any, item: any) => acc + item.discount, 0);
    const total = subtotal + shipping - discount;
  return (
    <SummaryContainer>
      <h3>Order Summary ({cart.length} variations)</h3>
      <SummaryRow>
        <span>Item Subtotal</span>
        <span>USD {subtotal.toFixed(2)}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Estimated Shipping</span>
        <span>USD {shipping.toFixed(2)}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Shipping Promotion</span>
        <span style={{ color: "red" }}>- USD {discount.toFixed(2)}</span>
      </SummaryRow>
      <Total>
        <span>Subtotal</span>
        <span>USD {total.toFixed(2)}</span>
      </Total>

      <h4>Protections for this Order</h4>
      <p>✅ On-time Dispatch Guarantee</p>
      <p>✅ Secure Payments</p>
      <p>✅ Standard Refund Policy</p>
    </SummaryContainer>
  );
};

export default OrderSummary;
