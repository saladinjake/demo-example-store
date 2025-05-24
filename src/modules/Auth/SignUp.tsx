import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import { useState } from "react"
import { Column, FormBox, AuthLayout}  from "./"
import validations from "./validations";
import useForm, { hasError } from "../../hooks/useForm";

const SignIn = () => {

    const [credentials, setCredentials]  = useState({
      email:"",
      confirmPassword:"",
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
b                    <Flex direction="column" mt="10" justifyContent="center" alignItems="center">
                       
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


                    <Box mb="2">
                       <Input
                         label="Password"
                         type="password"
                         value={credentials.confirmPassword}
                         placeholder="****"
                         name="email"
                         width="330px" required />
                    </Box>
             
                </Flex>
  <Flex justifyContent="end" >
                <Button color="primary" variant="outline">Register</Button>
                </Flex>
            </FormBox>


           </Column>
        </AuthLayout>
    )
}
