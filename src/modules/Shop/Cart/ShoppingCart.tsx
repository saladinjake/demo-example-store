// ShoppingCart.js

import styled from "styled-components";

import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import { useCart } from "../../../contexts/CartDrawerContext";
import EmptyCart from "./components/CartEmpty";
import { useState } from "react";
import { Footer } from "../../../components/Footer";

// Sample cart data
let cartData = [
  {
    id: 1,
    vendor: "Baoding Bateli Luggage Manufacturing Co., Ltd.",
    product: {
      name: "Leather Exquisite Trendy Shoulder Bag",
      image: "/images/products/f1.jpg",
      color: "White",
      size: "M",
      price: 6.03,
      quantity: 1,
      deliveryDate: "Mar 27",
    },
    shipping: 43.97,
    discount: 20.0,
  },
  {
    id: 1,
    vendor: "Baoding Bateli Luggage Manufacturing Co., Ltd.",
    product: {
      name: "Leather Exquisite Trendy Shoulder Bag",
      image: "/images/products/f2.jpg",
      color: "White",
      size: "M",
      price: 6.03,
      quantity: 1,
      deliveryDate: "Mar 27",
    },
    shipping: 43.97,
    discount: 20.0,
  },
];

const ShoppingCart = () => {

  const [uiDemo,] = useState(false)
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  console.log(cart, ">>>>>>>>")
  //const total = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  cartData = uiDemo ? cartData : cart


  if (cart.length === 0)
    return <EmptyCart message="Your shopping cart is empty." />;
  return (
    <>
    <Container>
        <CartSection>
          <Title>Shopping cart</Title>
          <SelectAll>
            <input type="checkbox" /> Select all variations ({cartData.length})
          </SelectAll>
          {cartData.map((item) => (
            <CartItem
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              clearCart={clearCart}
              key={item.id} item={item} />
          ))}
        </CartSection>
        <OrderSummary cart={cartData} />
       

    </Container>
     <Footer/>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 100%;
  margin: auto;
  box-shadow: -50px 50px 25px rgba(0, 0, 0, .08);
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const CartSection = styled.div`

  
  width: 70%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SelectAll = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;



export default ShoppingCart;
