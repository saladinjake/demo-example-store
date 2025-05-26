import React, { useState } from "react";
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

const VariationContainer = styled.div`
  margin-top: 20px;
`;

const VariationButton = styled.button`
  background: ${(props) => (props.selected ? "#3182ce" : "#ccc")};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#3182ce" : "#e53e3e")};
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

// Product Data
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
  variations: [
    { id: 1, name: "Black", image: "/path-to-black.jpg" },
    { id: 2, name: "Beige", image: "/path-to-beige.jpg" },
    { id: 3, name: "Brown", image: "/path-to-brown.jpg" },
  ],
};

const ProductDetails = () => {
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);

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

      <VariationContainer>
        <h3>Choose a Variation</h3>
        {product.variations.map((variation) => (
          <VariationButton
            key={variation.id}
            selected={selectedVariation.id === variation.id}
            onClick={() => setSelectedVariation(variation)}
          >
            {variation.name}
          </VariationButton>
        ))}
      </VariationContainer>

      <ButtonGroup>
        <Button primary>Add to Cart</Button>
        <Button>Chat Now</Button>
      </ButtonGroup>
    </Container>
  );
};

export default ProductDetails;
