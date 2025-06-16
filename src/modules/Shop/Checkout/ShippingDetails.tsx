import Grid from "../../../components/UIElements/Grid";
import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../../components/UIElements/Flex";
import { useAuth } from "../../../contexts/AuthContext";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
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

const ShippingDetails = ({ onNext }: { onNext: () => void }) => {
    const [form, setForm] = useState({
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


    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // handle automatic guest registraton under the hood
    const { user } = useAuth()
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
                                <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                            </Flex>
                        </Grid.Item>

                        <Grid.Item>
                            <Flex gap="20px" justifyContent="start" direction="column">
                                <Input name="lastName" value={form.password} type="password" onChange={handleChange} placeholder="Password" />
                            </Flex>
                        </Grid.Item>
                    </>
                )}
                <Grid.Item columnStart="1" columnEnd="-1">
                    <Flex gap="20px" justifyContent="start" direction="column">

                        <label>Country / Region</label>
                        <Input value="" />
                    </Flex>
                </Grid.Item>

                <Grid.Item columnStart="1" columnEnd="-1">
                    <label>First Name and Last Name</label>

                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
                    </Flex>
                </Grid.Item>


                <Grid.Item columnStart="1" columnEnd="-1">
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <label>Street Address</label>
                        <Input name="address" value={form.address} onChange={handleChange} placeholder="Street Address or P.O. Box" />
                    </Flex>
                </Grid.Item>



                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <label>Phone Number</label>
                        <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 XXXXXXXX" />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <label>City</label>
                        <Input name="city" value={form.city} onChange={handleChange} placeholder="City" />
                    </Flex>
                </Grid.Item>

                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <label>State / Province</label>
                        <Input name="state" value={form.state} onChange={handleChange} placeholder="State / Province" />
                    </Flex>
                </Grid.Item>


                <Grid.Item>
                    <Flex gap="20px" justifyContent="start" direction="column">
                        <label>Postal Code</label>
                        <Input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Postal Code" />
                    </Flex>
                </Grid.Item>

            </Grid>
            <Button type="button" onClick={onNext}>Proceed to Payment</Button>
        </Form>
    );
};

export default ShippingDetails;
