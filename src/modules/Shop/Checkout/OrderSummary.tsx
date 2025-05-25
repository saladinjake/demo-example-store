import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled(SummaryRow)`
  font-weight: bold;
  font-size: 1.2em;
`;

const OrderSummary = () => {
  return (
    <SummaryContainer>
      <h3>Order Summary (1 Item)</h3>
      <SummaryRow>
        <span>Item Subtotal</span>
        <span>USD 6.03</span>
      </SummaryRow>
      <SummaryRow>
        <span>Estimated Shipping</span>
        <span>USD 43.97</span>
      </SummaryRow>
      <SummaryRow>
        <span>Shipping Promotion</span>
        <span style={{ color: "red" }}>- USD 20.00</span>
      </SummaryRow>
      <Total>
        <span>Subtotal</span>
        <span>USD 30.00</span>
      </Total>

      <h4>Protections for this Order</h4>
      <p>✅ On-time Dispatch Guarantee</p>
      <p>✅ Secure Payments</p>
      <p>✅ Standard Refund Policy</p>
    </SummaryContainer>
  );
};

export default OrderSummary;
