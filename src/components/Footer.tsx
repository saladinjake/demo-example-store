import styled from "styled-components"
export const Footer = () => {


    const aboutUs = [
        {name:"About us", url:"#"},
        {name:"Delivery Information", url:"#"},
        {name:"Privacy Policy", url:"#"},
        {name:"Contact Us", url:"#"},
        {name:"Terms & Conditions", url:"#"}
    ];

    const myAccounts = [
        {name:"Sign In", url:"#"},
        {name:"View Cart", url:"#"},
        {name:"Wishlist", url:"#"},
        {name:"Order Tracking", url:"#"},
        {name:"Refunds and Faqs", url:"#"},
        
    ]
    return (

         <FooterWrapper>
        <Column>
            <img className="logo" src="images/logo.png" alt="" />
            <h4>Contact</h4>
            <p><strong>Address:</strong> Lagos Nigeria</p>
            <p><strong>Phone:</strong> +234 8130870 ---</p>
            <p><strong>Hours:</strong> 7:00 - 8:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </Column>
        <Column>
            <h4>About</h4>
          {aboutUs.map(item => <a href={item.url}>{item.name}</a>)}  
        </Column>
        <Column>
            <h4>My Account</h4>
            {myAccounts.map(item => <a href={item.url}>{item.name}</a>)}
        </Column>
        <Column className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="images/pay/app.jpg" alt="" />
                <img src="images/pay/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateway</p>
            <img src="images/pay/pay.png" alt="" />
        </Column>
        <div className="copyright">
            <p>Created By Victor | All Rights Reserved | &#169; 202</p>
        </div>
    </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
 padding: 40px 80px;
 background: #E3E6F3;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;



& .logo {
    margin-bottom: 30px;
}

& h4 {
    font-size: 14px;
    padding-bottom: 20px;
}

& p {
    font-size: 13px;
    margin: 0 0 8px 0;
}

& a {
    font-size: 13px;
    text-decoration: none;
    color: #222;
    margin: 0 0 10px 0;
}

& .follow {
    margin-top: 20px;
}

& .follow i{
    color: #465b52;
    padding-right: 4px;
    cursor: pointer;
}

& .install .row img{
    border: 1px solid #088178;
    border-radius: 6px;
    margin: 10px 0 15px 0;
}

& .follow i:hover,
& a:hover {
    color: #088178;
}

& .copyright {
    width: 100%;
    text-align: center;
}
`

const Column = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;


`