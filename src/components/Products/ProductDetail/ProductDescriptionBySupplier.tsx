import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 60%;

  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #e53e3e;
  text-align: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Label = styled.span`
  font-weight: bold;
`;

const PriceContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Price = styled.span`
  font-size: 1.5rem;
  color: #38a169;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: #3182ce ;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

// Product Data (Simulating API Response)
const product = {
  modelNumber: "BTL-21400-SSR",
  material: "PU",
  size: "L26*W10*H6 (cm)",
  weight: "0.6kg",
  shoulderStrap: "1",
  packing: "Carton",
  moq: "1",
  leadTime: "7-15 working days",
  prices: {
    "1-9": "$6.03",
    "10-99": "$5.63",
    "100-999": "$5.48",
    "1000+": "$5.24",
  },
};

const ProductDetails = () => {
  return (
    <Container>
      <Title>Product Description</Title>
      <ProductInfo>
        <InfoItem>
          <Label>Model Number:</Label> <span>{product.modelNumber}</span>
        </InfoItem>
        <InfoItem>
          <Label>Main Material:</Label> <span>{product.material}</span>
        </InfoItem>
        <InfoItem>
          <Label>Size:</Label> <span>{product.size}</span>
        </InfoItem>
        <InfoItem>
          <Label>Weight:</Label> <span>{product.weight}</span>
        </InfoItem>
        <InfoItem>
          <Label>Shoulder Strap:</Label> <span>{product.shoulderStrap}</span>
        </InfoItem>
        <InfoItem>
          <Label>Packing:</Label> <span>{product.packing}</span>
        </InfoItem>
        <InfoItem>
          <Label>MOQ:</Label> <span>{product.moq}</span>
        </InfoItem>
        <InfoItem>
          <Label>Production Lead Time:</Label> <span>{product.leadTime}</span>
        </InfoItem>
      </ProductInfo>

      <PriceContainer>
        <h3>Pricing</h3>
        <ul>
          {Object.entries(product.prices).map(([range, price]) => (
            <li key={range}>
              {range} pieces: <Price>{price}</Price>
            </li>
          ))}
        </ul>
      </PriceContainer>

      <ButtonGroup>
        <Button>Add to Cart</Button>
        <Button>Chat Now</Button>
      </ButtonGroup>
    </Container>
  );
};

export default ProductDetails;
