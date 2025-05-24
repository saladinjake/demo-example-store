import styled from "styled-components"
import Input from "../../components/UIElements/Input"
import Flex from "../../components/UIElements/Flex"
import Box from "../../components/UIElements/Box"
import Button from "../../components/UIElements/Button"
import { useState } from "react"
import { Column, FormBox, AuthLayout}  from "./"
import {registerValidations }  from "./validations";
import useForm, { hasError } from "../../hooks/useForm";

const ForgotPassword = () => {

    const [credentials, setCredentials]  = useState({
      password:""

    })
     const [editable,setEditable] = useState(true)
    

    const { values, handleChange, handleSubmit, errors, touched, invalid } =
    useForm({
      initialValues: credentials,
      validations: registerValidations,
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
b                    <Flex direction="column" mt="10" justifyContent="center" alignItems="center">
                       
                       <Box mt="4">        <a href="#"><img src="images/logo.png" className="logo" alt="Shop" /></a></Box>
                    

                        
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
        {"I Remember my account?"}{" "}</p>


        </Flex>
                       <Flex mb="18" justifyContent="end"  mr="20">
               <Box mb="4"><Button  color="primary" variant="outline">Reset</Button></Box>
                     </Flex>
            </FormBox>


           </Column>
        </AuthLayout>
    )
}

export default ForgotPassword