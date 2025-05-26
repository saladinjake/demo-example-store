// components/ProductDetailsPage.js
import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../UIElements/Flex";
import Box from "../../UIElements/Box";

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
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

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
    </GlassmorphicWrapper>
  );
};

export default ProductDetailsSectionA;





















// import React from "react";
// import styled from "styled-components";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import Slider from "react-slick";

// // Styled Components
// const ProductPage = styled.div`
//   display: flex;
//   gap: 20px;
//   padding: 20px;
 
//   margin: auto;
// `;

// const Sidebar = styled.div`
//   flex: 1;
//   .slick-slide img {
//     width: 100%;
//     border-radius: 10px;
//   }
// `;

// const ProductInfo = styled.div`
//   flex: 2;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const Vendor = styled.p`
//   color: gray;
//   font-size: 14px;
// `;

// const PriceSection = styled.div`
//   margin: 15px 0;
//   font-size: 18px;
// `;

// const VariationSection = styled.div`
//   display: flex;
//   gap: 10px;
//   margin: 10px 0;
// `;

// const ColorBox = styled.div<{selected?: boolean}>`
//   width: 30px;
//   height: 30px;
//   border-radius: 5px;
//   background-color: ${(props) => props.color};
//   cursor: pointer;
//   border: ${(props) => (props.selected ? "2px solid black" : "none")};
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const Button = styled.button<{bg?: string}>`
//   padding: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 5px;
//   border: none;
//   background: ${(props) => props.bg || "#ff6f00"};
//   color: ${(props) => (props.bg ? "#fff" : "#000")};
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const ProductDetail = () => {
//   const colors = ["#ffffff", "#000000", "#d32f2f", "#673ab7", "#ff4081"];
//   const images = [
//     "/sampleProduct.jpg",
//     "/sampleProduct.jpg",
//     "/sampleProduct.jpg",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <ProductPage>
//       {/* Sidebar for Images */}
//       <Sidebar>
//         {/* <Slider {...settings}> */}
//         <img className="slick-slide" key={"0000"} src={"/sampleProduct.jpg"} alt={`Product`} />
//           {images.map((img, index) => (
//             <img key={index} src={img} alt={`Product ${index + 1}`} />
//           ))}
//         {/* </Slider> */}
//       </Sidebar>

//       {/* Product Details */}
//       <ProductInfo>
//         <Title>Leather Exquisite Shoulder Bag</Title>
//         <Vendor>Baoding Bateli Luggage Manufacturing Co. Ltd. - Verified</Vendor>
        
//         <PriceSection>
//           <p>1-9 pieces: <strong>$6.03</strong></p>
//           <p>10-99 pieces: <strong>$5.63</strong></p>
//           <p>100+ pieces: <strong>$5.48</strong></p>
//         </PriceSection>

//         <p><strong>Sample price:</strong> $6.03</p>

//         {/* Variations */}
//         <VariationSection>
//           {colors.map((color, idx) => (
//             <ColorBox key={idx} color={color} />
//           ))}
//         </VariationSection>

//         {/* Buttons */}
//         <Buttons>
//           <Button>
//             <AiOutlineShoppingCart /> Add to Cart
//           </Button>
//           <Button bg="gray">
//             <AiOutlineHeart /> Wishlist
//           </Button>
//         </Buttons>
//       </ProductInfo>
//     </ProductPage>
//   );
// };

// export default ProductDetail;
