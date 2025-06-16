import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"

import { registerValidations } from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
const ChangePassword = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [editable, setEditable] = useState(true)

  const [credentials, setCredentials] = useState({
    email: "",
    confirmPassword: "",
    password: ""

  })

  const [error, setError] = useState("");

  const { values, handleChange, handleSubmit, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: registerValidations,
      onSubmit() { },
    });



  const handleSendToApi = (e: any) => {
    e.preventDefault();

  };

  return (
    <Container>
      <LeftColumn>
        {/* <h1>Left Side Content</h1> */}
      </LeftColumn>

      <RightColumn>
        <FormCard>
          <Title>Sign Up</Title>
          <form>

            <Box py="4">

              <Input
                required
                label="Password"
                isLoading={false}
                disabled={!editable}
                name="password"
                type="password"
                value={values?.password}
                onChangePure={handleChange}
                error={hasError("password", touched, errors)}
                message={hasError("password", touched, errors)}
                placeholder="************"
                width="100%"
              />
            </Box>


            <Box py="4">
              <Input
                required
                label="Confirm Password"
                isLoading={false}
                disabled={!editable}
                name="password"
                type="password"
                value={values?.password}
                onChangePure={handleChange}
                error={hasError("confirmPassword", touched, errors)}
                message={hasError("confirmPassword", touched, errors)}
                placeholder="************"
                width="100%"
              /></Box>
            <Box py="4">
              <Button type="submit" width="100%" color="primary" variant="outline">Sign Up</Button>

            </Box>
          </form>
        </FormCard>
      </RightColumn>
    </Container>
  )
}

export default ChangePassword









// Container: flex row on large, column on small
const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

// Left column hidden on small screens
const LeftColumn = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

// Right column always visible, full width on small
const RightColumn = styled.div`
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

// Form Card styling
const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
