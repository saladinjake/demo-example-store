import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  background: #fff;
  max-width: 1000px;
 
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const VariationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const VariationImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  border:  2px solid #e53e3e;
  &:hover {
    border: 2px solid #e53e3e;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #e53e3e;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #38a169;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  flex: 1;
  background:  #3182ce";
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Product Data
const product = {
  title: "Fashion Hot Sale Handbag",
  modelNumber: "PM 21400326",
  material: "PU",
  qty: "50 (68*44*87 cm)",
  moq: "1 pc",
  priceTiers: {
    "1-9": "$6.03",
    "10-99": "$5.63",
    "100-999": "$5.48",
    "1000+": "$5.24",
  },
  variations: [
    { id: 1, name: "Bright Red", image: "/sampleProduct.jpg" },
    { id: 2, name: "Black", image: "/sampleProduct.jpg" },
    { id: 3, name: "Blue", image: "/sampleProduct.jpg" },
  ],
};

const ProductDisplay = () => {
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);

  return (
    <Container>
      {/* Image Section */}
      <ImageSection>
        <MainImage src={selectedVariation.image} alt="Main Product" />
        <VariationGrid>
          {product.variations.map((variation) => (
            <VariationImage
              key={variation.id}
              src={variation.image}
              alt={variation.name}
              // selected={selectedVariation.id === variation.id}
              onClick={() => setSelectedVariation(variation)}
            />
          ))}
        </VariationGrid>
      </ImageSection>

      {/* Product Details Section */}
      <DetailsSection>
        <Title>{product.title}</Title>
        <p>Model: {product.modelNumber}</p>
        <p>Material: {product.material}</p>
        <p>Quantity: {product.qty}</p>
        <p>MOQ: {product.moq}</p>

        <Price>Starting from {product.priceTiers["1-9"]}</Price>

        <ButtonGroup>
          <Button>Add to Cart</Button>
          <Button>Chat Now</Button>
        </ButtonGroup>
      </DetailsSection>
    </Container>
  );
};

export default ProductDisplay;
