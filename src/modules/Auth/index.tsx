import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"
import {loginValidations }  from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
const SignIn = () => {
  const [editable,setEditable] = useState(true)
    const [credentials, setCredentials]  = useState({
      email:"",
      password:""
    })

    const { values, handleChange, handleSubmit, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: loginValidations,
      onSubmit() {},
    });
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
                  <Flex direction="column" mt="10" justifyContent="center" alignItems="center">
                       
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
                       </Flex>


                       <Flex ml="16" justifyContent="between" mr="6">
                        <p>
        {"Don't have an account?"}{" "}</p>

<p>
        {"Forgot Password?"}{" "}</p>


        </Flex>
                       <Flex mb="18" justifyContent="end"  mr="20">
               <Box mb="4"><Button  color="primary" variant="outline">Login</Button></Box>
                     </Flex>
                </FormBox>


           </Column> 
        </AuthLayout>
    )
}

export const AuthLayout = styled.div`
   display:flex;
   flex-direction: row;
   justify-content:space-between;
   height: 100vh;

`
export const Column =styled.div<{backgroundColor: string}>`
  width:50%;
  background: ${({backgroundColor}) => backgroundColor ? backgroundColor: "#fafafa"}
  display: flex;
  flex-direction: column;
`

export const FormBox = styled.form`
 box-shadow: -50px 50px 25px rgba(0, 0, 0, .08);
 margin-top:50px;
 width: 70%;



`


export default SignIn