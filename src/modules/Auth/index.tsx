import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"
import { loginValidations } from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
const SignIn = () => {

  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [editable, setEditable] = useState(true)

  const [error, setError] = useState<string|null>("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const { values, handleChange, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: loginValidations,
      onSubmit() { },
    });



  const handleSendToApi =async () => {

    if (!values.email || !values.password) {
      setError("Email and password required");
      return;
    }

   
    setError(null);
    // setLoading(true);

    const success = await login(values.email, values.password);
    // setLoading(false);

    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
      <FormCard>
        <Title>Login</Title>
        <form>
          <Box py="4">
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

          </Box>
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

          <ForgotPassword href="#">Forgot password?</ForgotPassword>
          <Box py="4">
            <Button type="submit" width="100%" color="primary"
             disabled={invalid}
             loading={loading}
            variant="outline">  {loading ? 'Logging in...' : 'Login'}</Button>

          </Box>
        </form>
        <SocialButtons>
          <GoogleButton>
            <GoogleIcon />
            Google
          </GoogleButton>
          <FacebookButton>
            <FacebookIcon />
            Facebook
          </FacebookButton>
        </SocialButtons>
      </FormCard>
    </Container>



  )
}



export default SignIn

















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

  &:hover {
    text-decoration: underline;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const GoogleButton = styled(SocialButton)`
  background-color: #db4437;

  &:hover {
    background-color: #b3362c;
  }
`;

const FacebookButton = styled(SocialButton)`
  background-color: #1877f2;

  &:hover {
    background-color: #125dbf;
  }
`;

// Simple SVG icons for social buttons
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M21.805 10.023h-9.9v3.954h5.674c-.238 1.514-1.914 4.446-5.674 4.446-3.418 0-6.199-2.82-6.199-6.293s2.78-6.293 6.199-6.293c1.937 0 3.24.835 3.986 1.555l2.716-2.616C17.11 6.268 14.94 5.2 12.04 5.2 6.9 5.2 2.8 9.992 2.8 15.075s4.1 9.875 9.24 9.875c5.336 0 8.86-3.722 8.86-8.968 0-.61-.06-1.07-.095-1.859z"
      fill="#FFC107"
    />
    <path
      d="M6.681 13.474a5.651 5.651 0 010-3.153v-3.154h-3.88v3.15a8.16 8.16 0 000 6.196v3.15h3.88v-3.149z"
      fill="#FF3D00"
    />
    <path
      d="M12.04 19.95c2.636 0 4.853-.873 6.471-2.363l-3.108-2.9c-.872.62-2.045 1.06-3.362 1.06-2.584 0-4.766-1.742-5.55-4.088H3.59v2.569c1.57 3.1 4.873 5.722 8.45 5.722z"
      fill="#4CAF50"
    />
    <path d="M21.805 10.023h-9.9v3.954h5.674c-.238 1.514-1.914 4.446-5.674 4.446v3.15c3.924 0 7.243-2.576 8.88-6.023a8.18 8.18 0 00.02-6.527z" fill="#1976D2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M22.675 0h-21.35C.593 0 0 .594 0 1.326v21.348C0 23.407.593 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.588l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .594 23.407 0 22.675 0z"
      fill="white"
    />
  </svg>
);
