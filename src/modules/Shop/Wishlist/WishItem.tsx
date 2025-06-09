// CartItem.js
import styled from "styled-components";


const CartItem = ({ item, 
  removeItem, 
  }:{item:any, removeItem: any, }) => {
  
  return (
    <ItemContainer >
      <Checkbox type="checkbox" />
      <ProductDetails>
        <Vendor>{item?.vendor || "Test Vendor"}</Vendor>
        <ProductInfo>
          <img src={item.imageUrl} alt={item.name} />
          <div>
            <ProductName>{item.name}</ProductName>
            <Details>
              Color: {item.color || "Same as selected"}, Size: {item.size ||"Medium"}
            </Details> 
            {/* <Price>US${item.price.toFixed(2)}</Price> */}
          </div>
        </ProductInfo>
        
        <FlexEnd>
          
        <QuantitySelector>
          <button
        className={` ${
          "bg-red-600 text-white" 
        }`}
        onClick={() =>
          removeItem(item.id)         }
      >
        {"Remove" }
      </button>
        </QuantitySelector>
      
      
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
    width: 120px;
   border-radius: 10px;
    font-size: 14px;
    
  }
`;


const FlexEnd =styled.div`
 display:flex;
  justify-content: flex-end;
`

export default CartItem;
