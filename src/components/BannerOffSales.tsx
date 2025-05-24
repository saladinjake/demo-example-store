import styled from "styled-components"
import Flex from "./UIElements/Flex"
import Button from "./UIElements/Button"
export const OffSalesDiscountBanner = () => {
    return (
        <Flex justifyContent="between">
          <DiscountBanner>
        <Discount>
            <h4>crazy deals</h4>
            <h2>Easy sales of products </h2>
            <span>The best manufactured products</span>
            <Button  color="primary" variant="outline" >Collection</Button>
        </Discount>
        <Discount>
            <h4>Santa Sales</h4>
            <h2>upcoming season</h2>
            <span>Double savings for low prices for quality products</span>
            <Button  color="primary" variant="outline" >Collection</Button>
        </Discount>
    </DiscountBanner>
    </Flex>
    )
}


const DiscountBanner = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;



& h4{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
}

& h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 800;
}

& span  {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 15px;
}

`


const Discount = styled.div`
  
 width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    background-image: url(images/banners/b17.jpg);
    background-size: cover;
    background-position: center;
    
    height: 50vh;
    padding: 30px;
&:hover button{
    background-color: #088178;
    border: 1px solid #088178;
}

&:nth-child(2) {
    background-image: url(images/banners/b16.jpg);
}

`