

import ShoppingCart from "./ShoppingCart"
import { CartProvider } from "../../../contexts/CartDrawerContext";
import { WishlistProvider } from "../../../contexts/WishlistContext";
import { Header } from "../../../components/Nav";
const CartPage = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Header/>
        <ShoppingCart />
      </WishlistProvider>
    </CartProvider>
  )
}

export default CartPage




