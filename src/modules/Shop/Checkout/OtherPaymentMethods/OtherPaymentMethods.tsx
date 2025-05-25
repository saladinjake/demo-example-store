import React, { useState } from "react";
import styled from "styled-components";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa";

// premium ui


// Styled Components
const PaymentContainer = styled.div`
  
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
`;

const Accordion = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const AccordionHeader = styled.div<{active: boolean}>`
  background: ${(props) => (props.active ? "#ffe0e0" : "#f9f9f9")};
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;

const AccordionContent = styled.div<{active: boolean}>`
  max-height: ${(props) => (props.active ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${(props) => (props.active ? "15px" : "0")};
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  background: #f8f8f8;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const PayButton = styled.button`
  background-color:#f0ad4e;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #f0ad4e
  }
`;

const PaymentComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PaymentContainer>
      <SectionTitle>Resurge Payment Order</SectionTitle>

      {/* Card Payment Accordion */}
      <Accordion>
        <AccordionHeader active={activeIndex === 0} onClick={() => toggleAccordion(0)}>
          <div>
            <input type="radio" name="payment" checked={activeIndex === 0} readOnly /> Credit/Debit Card
          </div>
          <PaymentIcons>
            <FaCcVisa size={24} />
            <FaCcMastercard size={24} />
            <FaCcAmex size={24} />
          </PaymentIcons>
        </AccordionHeader>
        <AccordionContent active={activeIndex === 0}>
          <PaymentForm>
            <Input type="text" placeholder="Card number *" />
            <Row>
              <Input type="text" placeholder="Given name(s) *" />
              <Input type="text" placeholder="Surname *" />
            </Row>
            <Row>
              <Input type="text" placeholder="MM / YY *" />
              <Input type="password" placeholder="CVV / CVC *" />
            </Row>
            <CheckboxLabel>
              <input type="checkbox" /> Remember this card
            </CheckboxLabel>
            <PayButton>Pay Now</PayButton>
          </PaymentForm>
        </AccordionContent>
      </Accordion>

      {/* PayPal Accordion */}
      <Accordion>
        <AccordionHeader active={activeIndex === 1} onClick={() => toggleAccordion(1)}>
          <div>
            <input type="radio" name="payment" checked={activeIndex === 1} readOnly /> PayPal
          </div>
          <FaCcPaypal size={24} />
        </AccordionHeader>
        <AccordionContent active={activeIndex === 1}>
          <p>You'll be redirected to PayPal to complete your payment.</p>
          <PayButton>Proceed with PayPal</PayButton>
        </AccordionContent>
      </Accordion>

      {/* Apple Pay Accordion */}
      <Accordion>
        <AccordionHeader active={activeIndex === 2} onClick={() => toggleAccordion(2)}>
          <div>
            <input type="radio" name="payment" checked={activeIndex === 2} readOnly /> Apple Pay
          </div>
          <FaCcApplePay size={24} />
        </AccordionHeader>
        <AccordionContent active={activeIndex === 2}>
          <p>Use Apple Pay for a seamless checkout.</p>
          <PayButton>Pay with Apple Pay</PayButton>
        </AccordionContent>
      </Accordion>

      {/* Google Pay Accordion */}
      <Accordion>
        <AccordionHeader active={activeIndex === 3} onClick={() => toggleAccordion(3)}>
          <div>
            <input type="radio" name="payment" checked={activeIndex === 3} readOnly /> Google Pay
          </div>
          <FaGooglePay size={24} />
        </AccordionHeader>
        <AccordionContent active={activeIndex === 3}>
          <p>Use Google Pay for fast and secure payments.</p>
          <PayButton>Pay with Google Pay</PayButton>
        </AccordionContent>
      </Accordion>
    </PaymentContainer>
  );
};







export default PaymentComponent





