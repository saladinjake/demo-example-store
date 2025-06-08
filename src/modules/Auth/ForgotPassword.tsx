import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useEffect, useState } from "react"

import { registerValidations } from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
const ForgotPasswordForm = () => {
  
    const navigate = useNavigate();
    const {  user } = useAuth();

  const [credentials, setCredentials] = useState({
    password: ""

  })
  const [editable, setEditable] = useState(true)
  
   useEffect(()=>{
    
        if(user) navigate("/")
      },[user])


  const { values, handleChange, handleSubmit, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: registerValidations,
      onSubmit() { },
    });
  return (
    <Container>
      <FormCard>
        <Title>Forgot Password</Title>
        <form>
          <Input
            required
            label="Email"
            isLoading={false}
            disabled={!editable}
            name="email"
            value={values?.email}
            onChangePure={handleChange}
            error={hasError("email", touched, errors)}
            message={hasError("email", touched, errors)}
            placeholder="Enter Email"
            width="100%"
          />
          <ForgotPassword href="/login">Remember My Password?</ForgotPassword>
          <Button type="submit" color="primary" variant="outline">Send OTP</Button>
        </form>

      </FormCard>
    </Container>
  )
}

export default ForgotPasswordForm



const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const FormCard = styled.div`
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.8rem;
  color: #111827;
  text-align: center;
`;

const ForgotPassword = styled.a`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #3b82f6;
  cursor: pointer;
  text-align: right;
  text-decoration: none;
margin-top:10px;
margin-ottom:5px;
  &:hover {
    text-decoration: underline;
  }
`;
