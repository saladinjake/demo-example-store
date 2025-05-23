
import { Fragment } from "react"
import styled from "styled-components"
export const BannerAdsSales = () => {
    return (
        <Fragment>
            <FlashSales>
                <AdBox>
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </AdBox>
                <AdBox>
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2023</h3>
                </AdBox>
                <AdBox>
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </AdBox>
            </FlashSales>

        </Fragment>

    )
}


const FlashSales = styled.section`
 padding: 40px 80px;
 margin:30px;


& {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 80px;   
}

& h2 {
    color: #000;
    font-weight: 900;
    font-size: 22px;

    
}

&  h3 {
    color: #ec544e;
    font-weight: 800;
    font-size: 15px;
}


`



const AdBox =styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    background-image: url(images/banners/mobanner8.jpg);
    background-size: cover;
    background-position: center;
    min-width: 30%;
    height: 30vh;
    padding: 30px;
    margin-bottom: 20px;


&:nth-child(2) {
    background-image: url(images/banners/mobanner12.jpg);
}

&:nth-child(3) {
    background-image: url(images/banners/mobanner10.jpg);
}
`