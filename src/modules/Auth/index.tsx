import styled from "styled-components"

const SignIn = () => {
    return (
        <AuthLayout>
           <Column>A</Column>
           <Column>
               <FormBox>
b
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
 width: 80%;
 height: 400px;

`


export default SignIn