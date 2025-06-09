// components/ProductDetailsPage.js
import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../UIElements/Flex";
import Box from "../../UIElements/Box";
import { useParams } from "react-router-dom";
import { defaultData } from "../../../api/services/products.api";
import { useCart } from "../../../contexts/CartDrawerContext";

// Glassmorphic Background
const GlassmorphicWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Large Product Image
const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

// Thumbnails for Product Views
const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 5px;
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Controls for Size and Color
const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const SizeControl = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const ColorControl = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorOption = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ShippingInfo = styled.div`
  width: 35%;
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
    & h3{
      font-size: 20px;
      margin-top:10px;
    }
  }


   & h3{
      font-size: 20px;
      margin-top:20px;
    }
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


const ProductDetailsSectionA = () => {
 const product =  {
   images:["/images/products/f1.jpg", "/images/products/f2.jpg","/images/products/f3.jpg","/images/products/f4.jpg"],
   sizes:['small','medium','xl', 'l'],
   colors:['red','yellow', 'black']
  }  
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState<any>( parseInt(id) <= product.images[0].length ? product.images[parseInt(id) -1]: product.images[0]);

  const productInfo = defaultData.find(item => item.id ==id) || defaultData[0];
const { addItem } = useCart()
  return (
    
    <GlassmorphicWrapper>
      <Flex justifyContent="start" direction="row" gap="20px">
        <ProductImage src={selectedImage} alt="P  roduct" />
        <ThumbnailContainer>
          {product.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Product Thumbnail ${index}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </ThumbnailContainer>
       
      </Flex>

      {/* <Controls>
        <h3>Select Size</h3>
        <SizeControl>
          {product.sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </SizeControl> */}

        {/* <h3>Select Color</h3>
        <ColorControl>
          {product.colors.map((color, index) => (
            <ColorOption key={index} color={color} />
          ))}
        </ColorControl>
      </Controls> */}

 {/* Shipping Section */}
      <ShippingInfo>
        <h3>Shipping</h3>
        <p>EMS (Economy)</p>
        <p>Shipping fee: US$39.36 for 1 piece</p>
        <p>Guaranteed delivery by May 8</p>
        {/* <Button>Start Order</Button> */}
        <Button onClick={()=>  addItem({...productInfo, imageUrl: productInfo.thumbnail, })}>Add to Cart</Button>

        <h3>Protections for this product</h3>
        <p><strong>Delivery via Fake Alibaba Logistics</strong></p>
        <p>Expect your order to be delivered before scheduled dates or receive a 10% delay compensation.</p>
        <p><strong>Secure Payments</strong></p>
        <p>Every payment on Alibaba.com is secured with strict SSL encryption and PCI DSS data protection protocols.</p>
        <p><strong>Standard Refund Policy</strong></p>
        <p>Claim a refund if your item is missing or arrives with defects.</p>
      </ShippingInfo>
    </GlassmorphicWrapper>
  );
};

export default ProductDetailsSectionA;

















