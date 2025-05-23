import { Routes, Route, Link } from "react-router-dom";

export const RouteOutlets = () => {

    return (
         <Routes>
          <Route exact path="/" element={<>Home</>} />
          <Route path="/products" element={<>Products page</>} />
          <Route path="/cart" element={<>Cart page</>} />
          <Route path="/login" element={<>Login</>} />
        </Routes>
    )
}