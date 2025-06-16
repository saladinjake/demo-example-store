import React from "react";
import styled from "styled-components";

const Container = styled.div`

  font-family: Arial, sans-serif;
  padding: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 1px solid #ddd;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceSection = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 10px;
`;

const PriceTier = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  background-color: orange; 
  color: white;
`;

const ExpandableSection = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const ProductLeadInfoPage = () => {
  return (
    <Container>
      {/* Product Attributes */}
      <ProductInfo>
        <h3>Product Details</h3>
        <InfoRow>
          <span>Shape:</span> <strong>Pillow</strong>
        </InfoRow>
        <InfoRow>
          <span>Main Material:</span> <strong>PU</strong>
        </InfoRow>
        <InfoRow>
          <span>Style:</span> <strong>Fashion</strong>
        </InfoRow>
        <InfoRow>
          <span>Gender:</span> <strong>Women</strong>
        </InfoRow>
      </ProductInfo>

      {/* Pricing Section */}
      <PriceSection>
        <h3>Pricing</h3>
        <PriceTier>
          <span>1 - 9 pieces:</span> <strong>US$6.03</strong>
        </PriceTier>
        <PriceTier>
          <span>10 - 99 pieces:</span> <strong>US$5.63</strong>
        </PriceTier>
        <PriceTier>
          <span>100 - 999 pieces:</span> <strong>US$5.48</strong>
        </PriceTier>
        <PriceTier>
          <span>1000+ pieces:</span> <strong>US$5.24</strong>
        </PriceTier>
      </PriceSection>

      {/* Actions */}
      <Buttons>
        <Button>Start Order</Button>
        <Button>Add to Cart</Button>
        <Button>Chat Now</Button>
      </Buttons>

      {/* Lead Time & Customization */}
      <ExpandableSection>
        <h3>Lead Time</h3>
        <p>Estimated delivery date: May 8</p>
      </ExpandableSection>

      <ExpandableSection>
        <h3>Customization</h3>
        <p>Contact supplier for custom orders</p>
      </ExpandableSection>
    </Container>
  );
};

export default ProductLeadInfoPage;
