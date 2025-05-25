import { Routes, Route, Link,  } from "react-router-dom";
import { Header } from "../components/Nav"
import { lazy } from "react"
import { PrivateRoute } from "./Private" 
const HomePageModule = lazy(() => import("../modules/Home"))
const Login = lazy(() => import("../modules/Auth"))
const SignUp = lazy(() => import("../modules/Auth/SignUp"))
const Shop =  lazy(() => import("../modules/Shop"))
const Cart  = lazy(() => import("../modules/Shop/Cart"))
const WishList  = lazy(() => import("../modules/Shop/Wishlist"))
const CheckoutPage = lazy(()=> import("../modules/Shop/Checkout"))
const CheckoutAlternative = lazy(()=> import("../modules/Shop/Checkout/OtherPaymentMethods"))

export const RouteOutlets = () => {

    return (
        <>
          <Header />
         <Routes>
          <Route  path="/" element={<HomePageModule/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route
            path="/cart"
            element={ <Cart/>            }
          />
          <Route
            path="/wishlist"
            element={ <WishList/>            }
          />
           <Route
            path="/checkout"
            element={ <CheckoutPage/>            }
          />
           <Route
            path="/other-payment-method"
            element={ <CheckoutAlternative/>            }
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
        </Routes>

        </>
    )
}