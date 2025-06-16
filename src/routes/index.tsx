import { Routes, Route, Link, } from "react-router-dom";

import { lazy } from "react"
import { PrivateRoute } from "./Private"
import ForgotPasswordForm from "../modules/Auth/ForgotPassword";
const HomePageModule = lazy(() => import("../modules/Home"))
const Login = lazy(() => import("../modules/Auth"))
const SignUp = lazy(() => import("../modules/Auth/SignUp"))
const Shop = lazy(() => import("../modules/Shop"))
const ProductDetail = lazy(() => import("../modules/Shop/ProductInfo"))
const Cart = lazy(() => import("../modules/Shop/Cart"))
const WishList = lazy(() => import("../modules/Shop/Wishlist"))
const CheckoutPage = lazy(() => import("../modules/Shop/Checkout"))
const CheckoutAlternative = lazy(() => import("../modules/Shop/Checkout/OtherPaymentMethods"))

export const RouteOutlets = () => {

  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomePageModule />} />
        <Route path="/products-explorer" element={<Shop />} />
        <Route path="/products-explorer/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
        <Route path="/other-payment-method" element={<CheckoutAlternative />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-psssword" element={<ForgotPasswordForm />} />
      </Routes>

    </>
  )
}