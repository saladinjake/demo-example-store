// CartItem.js
import React, { useState } from "react";
import styled from "styled-components";
import { useWishlist } from "../../../../contexts/WishlistContext";


const CartItem = ({ item, 
  removeItem, 
  updateQuantity, 
  clearCart }:{item:any, removeItem: any, updateQuantity: any, clearCart: any}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist: any = isInWishlist(item.id);
  return (
    <ItemContainer >
      <Checkbox type="checkbox" />
      <ProductDetails>
        <Vendor>{item?.vendor || "Sloovi Sales"}</Vendor>
        <ProductInfo>
          <img src={item?.imageUrl} alt={item.name} />
          <div>
            <ProductName>{item.name}</ProductName>
            <Details>
              Color: {item?.color || "Same as Selected"}, Size: {item?.size ||"Medium"}
            </Details> 
            <Price>US${ Number(item?.price).toFixed(2)}</Price>
          </div>
        </ProductInfo>
        
        <FlexEnd>
          <button
       style={{
        background: inWishlist ?  "#f6f6f6": "red",
        marginRight:"10px",
        padding:"10px",
        color: inWishlist ?  "#fff": "#000",
        
       }}
        onClick={() =>
          inWishlist ? removeFromWishlist(item.id) : addToWishlist(item)
        }
      >
        {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
        <QuantitySelector>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() =>           //updateQuantity(item.id, parseInt(quantity) || 1)
 
            setQuantity(quantity + 1)
            }>+
             
            </button>
        </QuantitySelector>
        <DeleteButton>&#128465;</DeleteButton>
      
        </FlexEnd>
        </ProductDetails>
    </ItemContainer>
  );
};

// Styled Components
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;

`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const Vendor = styled.h4`
  font-size: 14px;
  color: gray;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Details = styled.p`
  font-size: 14px;
  color: gray;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #d9534f;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
   background: #eee;
  
  border-radius: 10px;

  button {
    background: #eee;
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    width: 50px;
   border-radius: 10px;
    font-size: 14px;
    
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: red;
  width:30px;

 
`;

const FlexEnd =styled.div`
 display:flex;
  justify-content: flex-end;
`

export default CartItem;
