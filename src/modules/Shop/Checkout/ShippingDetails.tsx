import Grid from "../../../components/UIElements/Grid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../../../components/UIElements/Flex";
import { useAuth } from "../../../contexts/AuthContext";
import useForm, { hasError } from "../../../hooks/useForm";
import Input from "../../../components/UIElements/Input";
import model from "../../../hooks/useForm/utilities/model";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  & input{
    padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  }
`;


const Button = styled.button`
  padding: 20px;
  background: orange;
  color: #fff;
 
  cursor: pointer;
  margin-top: 10px;
  width: 300px;
  border-radius: 50px;
  border: 2px solid orange;
  font-size: 20px;
`;


const shippingValdation = (values: any) => {
    const errors = {
        // ...model("email")(values.email)("isRequired|isEmail"),
        // ...model("password")(values.password)("isRequired|min:2"),
        ...model("firstName")(values.firstName)("isRequired|min:2"),
        ...model("lastName")(values.lastName)("isRequired|min:2"),
        ...model("phone")(values.phone)("isRequired|min:2"),
        ...model("address")(values.address)("isRequired|min:2"),
        ...model("city")(values.city)("isRequired|min:2"),
        ...model("state")(values.state)("isRequired|min:2"),
        ...model("postalCode")(values.postalCode)("isRequired|min:2"),

    };

    return errors;
}
const ShippingDetails = ({ onNext, handleProceed }: { onNext: () => void, handleProceed: () => any }) => {

    const initialState = {
        country: "Nigeria",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",

        //for auto registration of guest acc
        email: "",
        password: "",


    }

    const { values, handleChange, errors, touched, invalid } =
        useForm({
            initialValues: initialState,
            validations: shippingValdation,
            onSubmit() { },
        });



    // handle automatic guest registraton under the hood
    const { user, signup } = useAuth()

    const handleSendToApi = () => {
        if (invalid == false) {
            if (!user) {
                // register guest user then proceed to next step
                signup(values.email, values.password)
                handleProceed()
                onNext()
                return
            }
        }
        handleProceed()
        onNext()
        return
    }
    console.log(hasError("firstName", touched, errors))
    return (
        <Form>
            <Grid templateColumn={"repeat(2,1fr)"}
                gap="45px 29px">

                {!user && (
                    <>

                        <Grid.Item columnStart="1" columnEnd="-1">
                            <Flex gap="20px" justifyContent="start" direction="column">

                                <label>Please Login if you currently have an account. As a guest user we will automatically create an account for you before proceeding to checkout</label>

                            </Flex>


                        </Grid.Item>



                        <Grid.Item columnStart="1" columnEnd="-1">
                            <label>Email and Password</label>

                        </Grid.Item>

                        <Grid.Item>
                            <Flex gap="20px" justifyContent="start" direction="column">
                                <Input
                                    label="Email"
                                    name="email"
                                    value={values.email}
                                    onChangePure={handleChange}
                                    placeholder="Email" />
                            </Flex>
                        </Grid.Item>

                        <Grid.Item>
                            <Flex gap="20px" justifyContent="start" direction="column">
                                <Input label="Password" name="password" value={values.password} type="password" onChangePure={handleChange} placeholder="Password" />
                            </Flex>
                        </Grid.Item>
                    </>
                )}
                <Grid.Item columnStart="1" columnEnd="-1">
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <label>Country / Region</label>
                        <Input label="Country" value={values.country} onChangePure={handleChange} 
              error={hasError("country", touched, errors)}
              message={hasError("country", touched, errors)} />
                    </Flex>
                </Grid.Item>



                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <Input label="Phone Number" name="phone" value={values.phone}
                            onChangePure={handleChange} placeholder="+234 XXXXXXXX"

                            error={hasError("phone", touched, errors)}
                            message={hasError("phone", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <Input label="City" name="city" value={values.city}
                            onChangePure={handleChange} placeholder="City"

                            error={hasError("city", touched, errors)}
                            message={hasError("city", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <Input label="State/Province" name="state" value={values.state}
                            onChangePure={handleChange} placeholder="State / Province"

                            error={hasError("state", touched, errors)}
                            message={hasError("state", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>


                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <Input label="Postal Code" name="postalCode" value={values.postalCode}
                            onChangePure={handleChange} placeholder="Postal Code"

                            error={hasError("postalCode", touched, errors)}
                            message={hasError("postalCode", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>

                <Grid.Item columnStart="1" columnEnd="-1">
                    <label>First Name and Last Name</label>

                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <Input label="First Name" name="firstName"
                            value={values.firstName}
                            onChangePure={handleChange}
                            placeholder="First Name"

                            error={hasError("firstName", touched, errors)}
                            message={hasError("firstName", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <Input label="Last Name" name="lastName"
                            value={values.lastName} onChangePure={handleChange}
                            placeholder="Last Name"

                            error={hasError("lastName", touched, errors)}
                            message={hasError("lastName", touched, errors)}
                        />
                    </Flex>
                </Grid.Item>


                <Grid.Item columnStart="1" columnEnd="-1">
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <Input label="Address" name="address"
                            value={values.address} onChangePure={handleChange}

                            error={hasError("address", touched, errors)}
                            message={hasError("address", touched, errors)}
                            placeholder="Street Address or P.O. Box" />
                    </Flex>
                </Grid.Item>




            </Grid>
            <Button disabled={invalid} type="button" onClick={handleSendToApi}>Proceed to Payment</Button>
        </Form>
    );
};

export default ShippingDetails;
