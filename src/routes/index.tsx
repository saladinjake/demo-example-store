import { Routes, Route, Link,  } from "react-router-dom";
import { Header } from "../components/Nav"
import { lazy } from "react"
const HomePageModule = lazy(() => import("../modules/Home"))
export const RouteOutlets = () => {

    return (
        <>
          <Header />
         <Routes>
          <Route exact path="/" element={<HomePageModule/>} />
          <Route path="/products" element={<>Products page</>} />
          <Route path="/cart" element={<>Cart page</>} />
          <Route path="/login" element={<>Login</>} />
        </Routes>

        </>
    )
}