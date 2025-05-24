import { Routes, Route, Link,  } from "react-router-dom";
import { Header } from "../components/Nav"
import { lazy } from "react"
const HomePageModule = lazy(() => import("../modules/Home"))
const Login = lazy(() => import("../modules/Auth"))
const SignUp = lazy(() => import("../modules/Auth/SignUp"))
const Shop =  lazy(() => import("../modules/Shop"))
export const RouteOutlets = () => {

    return (
        <>
          <Header />
         <Routes>
          <Route exact path="/" element={<HomePageModule/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<>Cart page</>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/register" element={<SignUp/>} />
        </Routes>

        </>
    )
}