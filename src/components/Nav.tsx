import styled from "styled-components"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const { user } = useAuth()
const navigate = useNavigate()
    return (

        <HeaderWraper>
            {/*desktop*/}
            <a href="./"><img src="images/logo.png" className="logo" alt="Shop" /></a>
            <div>
                <Menu>
                    <MenuItem><a className="active" href="/">Home</a></MenuItem>
                    <MenuItem><a href="/products-explorer">Shop</a></MenuItem>
                    <MenuItem><a href="/login">Login</a></MenuItem>
                    <MenuItem><a href="/register">Signup</a></MenuItem>
                    <MenuItem id="lg-bag"><a href="/cart"><i className="far fa-shopping-bag"></i></a></MenuItem>

                    {user && <MenuItem id="lg-bag">
                        <button className="dropdown-button">
                            <div className="avatar avatar-md">
                                <img src="..." className="dropdown-standalone" />
                                <span className="badge status online"></span>
                            </div>
                        </button>
                        <ul className="dropdown-list">
                            <li><a href="#" >Welcome Back {user?.name}</a></li>

                            <li onClick={() => navigate("/cart")}><a href="#" >My Cart</a></li>
                            <li onClick={() => navigate("/wishlist")}><a href="#" >My Wishlists</a></li>
                            <li onClick={() => navigate("/orders")}><a href="#" >My Orders</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </MenuItem>

                    }
                    <a href="#" id="close"><i className="far fa-times"></i></a>
                </Menu>
            </div>
            {/*mobile*/}
            <div id="mobile">

                <input type="checkbox" id="side-toggle" className="side-toggle" />
                <label className="hamburger">&#9776;</label>

                <div className="side-drawer">
                    <label className="close-btn">&times;</label>
                    <nav className="drawer-menu">
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">Login</a>
                        <a href="#">Sign Up</a>
                    </nav>
                </div>

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


    .side-toggle {
  display: none;
}

.hamburger {
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  display: inline-block;
  background: #fafafa;
  color: black;
  border-radius: 0.375rem;
}

.side-drawer {
  position: fixed;
  top: 0;
  left: -100%;
  height: 100vh;
  width: 250px;
  background-color: #fff;
   box-shadow: 50px -50px 12px #fafafa;
  color: #444;
  padding: 1rem;
  transition: left 0.3s ease;
  z-index: 999;
}

.side-drawer .close-btn {
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  text-align: right;
}

.drawer-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.drawer-menu a {
  color: #444;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid #374151;
}

.drawer-menu a:hover {
  color: #333;
}


.side-toggle:checked + .hamburger + .side-drawer {
  left: 0;
}







.avatar {
  position: relative;
  display: inline-block;
  border-radius: 9999px;
  overflow: hidden;
  background:#eaeaea;
}

.avatar img {
  display: block;
  width: 100%;
  height: auto;
}

/* Sizes */
.avatar-sm { width: 32px; height: 32px; }
.avatar-md { width: 48px; height: 48px; }
.avatar-lg { width: 64px; height: 64px; }
.avatar-xl { width: 96px; height: 96px; }

/* Badge base */
.badge {
  position: absolute;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: bold;
  color: white;
}

/* Status Dot */
.status {
  width: 12px;
  height: 12px;
  top: 0;
  right: 0;
  border: 2px solid white;
}

/* Online/Offline status */
.status.online { background: #10b981; }   /* Green */
.status.offline { background: #ef4444; }  /* Red */
.status.busy { background: #f59e0b; }     /* Amber */

/* Count Badge */
.count {
  background: #ef4444;
  min-width: 16px;
  height: 16px;
  font-size: 0.65rem;
  padding: 0 4px;
  top: -4px;
  right: -4px;
  border: 2px solid white;
}







.dropdown-standalone {
  position: relative;
  display: inline-block;

}

.dropdown-button {
  padding: 1px;
  background: #fff;
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 12px;
  font-weight: normal
  }





.dropdown-list {
  position: absolute;
  top: 110%;
  left: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  display: none;
  z-index: 10;
  min-width: 160px;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
}

.dropdown-list li a {
  display: block;
  padding: 0.5rem 1rem;
  color: #111827;
  text-decoration: none;
  font-size: 12px;
  font-weight: normal
  }

.dropdown-list li a:hover {
  background: #f3f4f6;
}

.dropdown-standalone:hover .dropdown-list {
  display: block;
}


.dropdown-button:focus + .dropdown-list {
  display: block;
}

`


const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuItem = styled.li`

&   {
    list-style: none;
    padding: 0 20px;
    position: relative;
}

&   a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 200;
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