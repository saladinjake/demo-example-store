import styled from "styled-components"
import { useAuth } from "../contexts/AuthContext"
export const Header = () => {
    const { user} = useAuth()

    return (

     <HeaderWraper>
        <a href="#"><img src="images/logo.png" className="logo" alt="Shop" /></a>
        <div>
            <Menu>
                <MenuItem><a className="active" href="/">Home</a></MenuItem>
                <MenuItem><a href="/products-explorer">Shop</a></MenuItem>
                <MenuItem><a href="/login">Login</a></MenuItem>
                <MenuItem><a href="/register">Signup</a></MenuItem>
                <MenuItem id="lg-bag"><a href="/cart"><i className="far fa-shopping-bag"></i></a></MenuItem>

                {user && <MenuItem id="lg-bag">Welcome back {user.name}</MenuItem>} 
                <a href="#" id="close"><i className="far fa-times"></i></a>
            </Menu>
        </div>
        <div id="mobile">
            <a href="/cart"><i className="far fa-shopping-bag"></i></a>
            <i id="bar" className="fas fa-outdent"></i>
        </div>
    </HeaderWraper>
    )
}


const HeaderWraper = styled.section`

    display: flex;
    aMenuItemgn-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: #fff; /*#E3E6F3;*/
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    z-index: 999;
    position: sticky;
    top: 0;


#close {
    display: none;
}

#mobile {
    display: none;
    aMenuItemgn-items: center;
}

`


const Menu =styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuItem =styled.li`

&   {
    list-style: none;
    padding: 0 20px;
    position: relative;
}

&   a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s ease; 
}

&   a:hover,
&   a.active {
    color: #f60;
}

&   a:hover::after,
&   a.active::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #f60;
    position: absolute;
    bottom: -4px;
    left: 20px;
}
`