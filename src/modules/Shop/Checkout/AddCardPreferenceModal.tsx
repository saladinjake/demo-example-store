import { useCart } from "../../../contexts/CartDrawerContext";
import Grid from "../../../components/UIElements/Grid";
import React, { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


// Styled Modal
const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 800px;
  border-radius: 8px;
  position: relative;

  h3{
   margin-top:10px;
   font-size:20px;
   margin-bottom: 20px
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f8f8f8
`;

const ConfirmButton = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #e64a19;
  }
`;


export default function AddCardPreferenceModal({ showModal, setShowModal }) {
  const { clearCart } = useCart()
  const navigate = useNavigate()
  return (
    <ModalOverlay show={showModal}>
      <ModalContent>
        <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
        <h3>Add a new card</h3>
        <Grid templateColumn="repeat(2, 1fr)" gap="45px 30px">
          <Input type="text" placeholder="Card number *" />
          <Input type="text" placeholder="Given name(s) *" />
          <Input type="text" placeholder="Surname *" />
          <Input type="text" placeholder="MM / YY *" />
          <Input type="password" placeholder="CVV / CVC *" />
        </Grid>

        <label>
          <input type="checkbox" style={{ marginTop: "20px", marginBottom: "20px" }} /> Remember this card
        </label>
        <ConfirmButton onClick={() => {
          clearCart()
          alert("Fake payment completed. Here ends the demo")

          setTimeout(() => {

            navigate("/")
          }, 2000)
        }}>Confirm</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  )
}