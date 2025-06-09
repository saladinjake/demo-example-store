import { useNavigate } from "react-router-dom"
import styled from "styled-components"
export const HeroBanner = () => {
    const navigate = useNavigate()
    return (
        <HeroWrapper>
            <h4>Shop with Confidence</h4>
            <h2>Spring Board Merchant</h2>
            <h1>Affordable  products</h1>
            <p>Save more with coupons & up to 70% off!</p>
            <CtaButton onClick={() => navigate("/products-explorer")} >Shop Now</CtaButton>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`

 background: #E3E6F3;
    background-image: url(images/mobanner6.jpg);
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


#hero h4 {
    padding-bottom: 15px;
}

#hero h1 {
    color: #088178;
}

`

const CtaButton = styled.button`
 
    background-image: url(images/button.png);
    background-color: transparent;
    color: #088178;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;

`