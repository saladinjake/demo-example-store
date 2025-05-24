import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"
import validations from "./validations";
import useForm, { hasError } from "../../hooks/useForm";
const SignIn = () => {

    const [credentials, setCredentials]  = useState({
      email:"",

      password:""

    })
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
                        label="Username"
                        type="text"
                         value={credentials.email}
                         placeholder="Johndoe@yourEmail.com"
                       name="email"
                        width="330px"
                        
                        required
                        />
                        </Box>


                        
                       <Box mb="2">
                       <Input
                        label="Password"
                        type="password"
                         value={credentials.password}
                         placeholder="****"
                       name="email"
                        width="330px" required />
                        </Box>
                       </Flex>
                       <Flex mb="8" justifyContent="end" mt="8" mr="20">
  <Button mb="8" color="primary" variant="outline">Login</Button>
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