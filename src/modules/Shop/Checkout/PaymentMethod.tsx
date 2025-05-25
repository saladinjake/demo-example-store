import React, {useState} from "react";
import styled from "styled-components";
import AddCardPreferenceModal from "./AddCardPreferenceModal"
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Styled Components
const PaymentSection = styled.div`


  padding: 20px;
  border-radius: 8px;
  background: #fff;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const PaymentMethod = styled.div`
  margin-bottom: 20px;
`;

const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  justify-content: flex-end
`;

const PaymentIcon = styled.img`
  width: 40px;
  height: 25px;
`;

const ItemsContainer = styled.div`
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;


const DiscountText = styled.span`
  color: red;
`;

const ProceedButton = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #e64a19;
  }
`;

const PaymentComponent = ({ onNext, onPrevious}) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
  return (
    <PaymentSection>
      {/* Payment Method */}
      <PaymentMethod>
        <SectionTitle>Payment method</SectionTitle>
        <label>
          <input type="radio" name="payment" onClick={() => setShowModal(true)} /> Add a new card
        </label>
        <PaymentOptions>
          <FaCcVisa/>
          <FaCcMastercard />
          <FaCcPaypal />
        </PaymentOptions>
        <label>
          <input type="radio" name="payment" onClick={()=> navigate("/other-payment-method")}  /> Other payment methods
        </label>
      </PaymentMethod>

      {/* Items Section */}
      <ItemsContainer>
        <SectionTitle>Items and delivery options</SectionTitle>
        <p><strong>Sold by:</strong> Baoding Bateli Luggage Manufacturing Co., Ltd.</p>
        <p><strong>Delivery by:</strong> Mar 27 | <DiscountText>USD 43.97</DiscountText> USD 23.97</p>

        <Item>
          <ItemImage src="/sampleProduct.jpg" alt="Product" />
          <ItemDetails>
            <p><strong>Leather Exquisite Trendy Shoulder Bag</strong></p>
            <p>Color: White | Size: M</p>
            <p><strong>USD 6.03 / piece</strong></p>
          </ItemDetails>
        </Item>
      </ItemsContainer>
      <AddCardPreferenceModal showModal={showModal} setShowModal={setShowModal}/>

    </PaymentSection>
  );
};

export default PaymentComponent;
