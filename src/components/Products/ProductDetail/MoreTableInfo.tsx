import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  width: 800px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td, th {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f8f8f8;
  }
`;

const PriceText = styled.p`
  font-size: 16px;
  color: #ff6600;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  ${(props) =>
    props.primary
      ? "background-color: #ff6600; color: white;"
      : "background-color: #f0f0f0; color: #333;"}

  &:hover {
    opacity: 0.8;
  }
`;

const ProductDetails = () => {
  return (
    <Container>
      {/* Lead Time */}
      <Section>
        <Title>Lead Time</Title>
        <Table>
          <thead>
            <tr>
              <th>Quantity (pieces)</th>
              <th>Lead time (days)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 10</td>
              <td>7</td>
            </tr>
            <tr>
              <td>11 - 300</td>
              <td>15</td>
            </tr>
            <tr>
              <td>301 - 1000</td>
              <td>25</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>To be negotiated</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Customization */}
      <Section>
        <Title>Customization</Title>
        <p>✔ Logo/Pattern (Min: 500 pieces)</p>
        <p>✔ Customized Packaging (Min: 500 pieces)</p>
        <p>✔ Graphic Customization (Min: 500 pieces)</p>
      </Section>

      {/* Pricing */}
      <Section>
        <Title>Pricing</Title>
        <Table>
          <tbody>
            <tr>
              <td>1 - 9 pieces</td>
              <td><PriceText>$6.03</PriceText></td>
            </tr>
            <tr>
              <td>10 - 99 pieces</td>
              <td><PriceText>$5.63</PriceText></td>
            </tr>
            <tr>
              <td>100 - 999 pieces</td>
              <td><PriceText>$5.48</PriceText></td>
            </tr>
            <tr>
              <td> 1000 pieces</td>
              <td><PriceText>$5.24</PriceText></td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Action Buttons */}
      <ButtonContainer>
        <Button >Start Order</Button>
        <Button>Add to Cart</Button>
        <Button>Chat Now</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ProductDetails;
