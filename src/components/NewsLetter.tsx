
import styled from "styled-components"
export const NewsLetterSection = () => {

    return (
         <NewLetterContainer>
        <div>
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <SubscribeForm>
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
        </SubscribeForm>
    </NewLetterContainer>
    )
}

const NewLetterContainer = styled.section`
    margin: 1px 0;
     padding: 40px 80px;
   display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #eaeaea;

& h4 {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
}

& p {
    font-size: 14px;
    font-weight: 600;
    color: #818EA0;
}

& p span{ 
    color: #ffbd27;
}

`

const SubscribeForm = styled.form`

    display: flex;
    width: 40%;


& input {
    height: 3.125rem;
    padding: 0 1.25rem;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

& button {
    background-color: #f60;
    color: #fff;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width:100px;

}




`