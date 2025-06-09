
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
const OrderSummary = ({ cart }:{cart: any}) => {
    const subtotal = cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
    const shipping = cart.reduce((acc: any, item: any) => acc + item.shipping, 0);
    const discount = cart.reduce((acc: any, item: any) => acc + item.discount, 0);
    const total = subtotal + shipping - discount;

    const navigate = useNavigate()

    return (
        <SummaryContainer >
            <Title>Order summary ({cart.length} variations)</Title>
            <Row>
                <span>Item subtotal</span>
                <span>US${subtotal.toFixed(2)}</span>
            </Row>
            <Row>
                <span>Shipping fee</span>
                <span>US${shipping.toFixed(2)}</span>
            </Row>
            <Row className="discount">
                <span>Shipping promotion</span>
                <span>-US${discount.toFixed(2)}</span>
            </Row>
            <TotalRow>
                <span>Subtotal excl. tax</span>
                <span>US${total.toFixed(2)}</span>
            </TotalRow>
            <CheckoutButton disabled={cart.length <=0} onClick={()=> navigate("/cart/checkout")}>Check out</CheckoutButton>
            <FooterText>You're protected on Octopusbay.com</FooterText>

            <Row >
                <span>Shipping & Fufilments by Octopus OceanBay</span>


            </Row>
            <Row >
                <span>Refunds & Returns</span>


            </Row>
            <Row >
                <span>Secured Payments</span>


            </Row>
        </SummaryContainer>
    );
};

// Styled Components
const SummaryContainer = styled.div`
  width: 30%;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -50px 50px 25px rgba(0, 0, 0, .08);

  
  
   @media (max-width: 767px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  
  &.discount span {
    color: red;
  }

  & span{
    color:#888;
  }
`;

const TotalRow = styled(Row)`
  font-size: 18px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background: orange;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
  text-align: center;
`;

export default OrderSummary;
