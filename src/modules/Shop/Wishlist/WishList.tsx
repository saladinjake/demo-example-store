// ShoppingCart.js

import styled from "styled-components";

import WishItem from "./WishItem";
import OrderSummary from "../Cart/components/OrderSummary";
import EmptyCart from "../Cart/components/CartEmpty";

import { useWishlist } from "../../../contexts/WishlistContext";
import { useCart } from "../../../contexts/CartDrawerContext";

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

const WishBag = () => {

  const { wishlist, removeFromWishlist } = useWishlist()
  const { cart} = useCart()

  if (wishlist.length === 0)
    return <EmptyCart message="Your wishlist is empty." />;

  return (
    <Container>
      <CartSection>
        <Title>Wish List</Title>

        {wishlist.map((item: any) => (
          <WishItem
            removeItem={removeFromWishlist}

            key={item.id} item={item} />
        ))}
      </CartSection>
      <OrderSummary cart={cart} />
    </Container>
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

export default WishBag;
