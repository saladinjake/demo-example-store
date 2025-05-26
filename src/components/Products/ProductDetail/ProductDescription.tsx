import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Recommendations = styled.div`
  width: 60%;
`;

const ProductList = styled.div`
  display: flex;
  gap: 20px;
`;

const Product = styled.div`
  width: 150px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const ShippingInfo = styled.div`
  width: 35%;
`;

const Button = styled.button`
  background-color: #ff6f00;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductPage = () => {
  return (
    <Container>
      {/* Recommendations Section */}
      <Recommendations>
        <h3>Other recommendations for your business</h3>
        <ProductList>
          <Product>
            <img src="/sampleProduct.jpg" alt="Bag 1" width="100%" />
            <p>Summer Bag Girl 2022</p>
            <p>US$3.20</p>
            <p>Min. order: 1 piece</p>
          </Product>
          <Product>
            <img src="/sampleProduct.jpg" alt="Bag 2" width="100%" />
            <p>New Minimalist, Fashionable</p>
            <p>US$7.00</p>
            <p>Min. order: 1 piece</p>
          </Product>
          <Product>
            <img src="/sampleProduct.jpg" alt="Bag 3" width="100%" />
            <p>2022 Comfortable Storage Pu Purses</p>
            <p>US$10.40</p>
            <p>Min. order: 1 piece</p>
          </Product>
          <Product>
            <img src="/sampleProduct.jpg" alt="Bag 4" width="100%" />
            <p>New 2022 Beautiful Fashion Handbags</p>
            <p>US$7.46</p>
            <p>Min. order: 1 piece</p>
          </Product>
        </ProductList>
      </Recommendations>

      {/* Shipping Section */}
      <ShippingInfo>
        <h3>Shipping</h3>
        <p>EMS (Economy)</p>
        <p>Shipping fee: US$39.36 for 1 piece</p>
        <p>Guaranteed delivery by May 8</p>
        <Button>Start Order</Button>
        <Button>Add to Cart</Button>

        <h3>Protections for this product</h3>
        <p><strong>Delivery via Alibaba Logistics</strong></p>
        <p>Expect your order to be delivered before scheduled dates or receive a 10% delay compensation.</p>
        <p><strong>Secure Payments</strong></p>
        <p>Every payment on Alibaba.com is secured with strict SSL encryption and PCI DSS data protection protocols.</p>
        <p><strong>Standard Refund Policy</strong></p>
        <p>Claim a refund if your item is missing or arrives with defects.</p>
      </ShippingInfo>
    </Container>
  );
};

export default ProductPage;
