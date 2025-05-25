import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"
import { Column, FormBox, AuthLayout}  from "./"
import {registerValidations }  from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
const SignUp = () => {
    const navigate = useNavigate(); 
  const { user,  signup, logout } = useAuth(); 
  const [editable,setEditable] = useState(true)

    const [credentials, setCredentials]  = useState({
      email:"",
      confirmPassword:"",
      password:""

    })
  
   const [error, setError] = useState("");    

    const { values, handleChange, handleSubmit, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: registerValidations,
      onSubmit() {},
    });


    
  const handleSendToApi = (e: any) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setError("Email and password required");
      return;
    }
    
    if (values.password && values.confirmPassword &&  (values.password !==values.confirmPassword)) {
      setError("Password mismatch");
      return;
    }
     const success = signup(values);
    
    if (success) {
      navigate("/");
    } else {
      setError("Login failed");
    }
  };

    return (
        <AuthLayout>
           <Column>
                     <Flex direction="column" mt="10" justifyContent="center" alignItems="center">
           
                       <Box mt="4">       

                      
                       </Box>
                
           </Flex>
           </Column>
           <Column>
               <FormBox>
b                    <Flex direction="column" mt="10" justifyContent="center" alignItems="center">
                       
                       <Box mt="4">        <a href="#"><img src="images/logo.png" className="logo" alt="Shop" /></a></Box>
                    <Box mb="4" mt="4">
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
                width="330px"
              />
                        </Box>


                        
                       <Box mb="2">
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
                width="330px"
              />
                        </Box>
                                       <Box mb="2">
                        <Input
                required
                label="Confirm Password"
                isLoading={false}
                disabled={!editable}
                name="confirmPassword"
                type="password"
                value={values?.password}
                onChangePure={handleChange}
                error={hasError("confirmPassword", touched, errors)}
                message={hasError("confirmPassword", touched, errors)}
                placeholder="************"
                width="330px"
              />
                        </Box>


                </Flex>
   <Flex ml="16" justifyContent="between" mr="6">
                        <p>
        {"Already have an account?"}{" "}</p>


        </Flex>
                       <Flex mb="16" justifyContent="end"  mr="20">
               <Box mb="4"><Button  color="primary" variant="outline">Register</Button></Box>
                     </Flex>
            </FormBox>


           </Column>
        </AuthLayout>
    )
}

export default SignUp