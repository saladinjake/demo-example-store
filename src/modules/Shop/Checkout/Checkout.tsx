import React, { useState } from "react";
import styled from "styled-components";
import ShippingDetails from "./ShippingDetails";
import PaymentMethod from "./PaymentMethod";
// import Confirmation from "./Confirmation";
import OrderSummary from "./OrderSummary";
import { useAuth } from "../../../contexts/AuthContext";

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

  padding: 20px;

   background: #fff;
  border-radius: 10px;
  box-shadow: -50px 50px 25px rgba(0, 0, 0, .08)
`;

const Accordion = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  padding: 25px;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "15px" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handlePrevious = () => setActiveStep((prev) => prev - 1);
  const { user} = useAuth()

  const [canProceed, setCanProceed] = useState(false)
  return (
    <CheckoutContainer>
      <MainSection>
        <Accordion>
          <AccordionHeader onClick={() => setActiveStep(1)}>Shipping Details</AccordionHeader>
          <AccordionContent isOpen={activeStep === 1}>
            <ShippingDetails handleProceed={() => setCanProceed(true)} onNext={() => user && canProceed && handleNext()} />
          </AccordionContent>
        </Accordion>
        <Accordion>
          <AccordionHeader onClick={() => canProceed && setActiveStep(2)}>Payment Method</AccordionHeader>
          <AccordionContent isOpen={activeStep === 2}>
            <PaymentMethod onNext={handleNext} onPrevious={handlePrevious} />
          </AccordionContent>
        </Accordion>
        <Accordion>
          <AccordionHeader onClick={() => canProceed && setActiveStep(3)}>Confirmation & Order Completion</AccordionHeader>
          <AccordionContent isOpen={activeStep === 3}>
            {/* <Confirmation onPrevious={handlePrevious} /> */}
          </AccordionContent>
        </Accordion>
      </MainSection>

      <Sidebar>
        <OrderSummary />
      </Sidebar>
    </CheckoutContainer>
  );
};

export default Checkout;
