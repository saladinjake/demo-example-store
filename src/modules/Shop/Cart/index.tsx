

import ShoppingCart from "./ShoppingCart"
import { CartProvider } from "../../../contexts/CartDrawerContext";
import { WishlistProvider } from "../../../contexts/WishlistContext";
const CartPage = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <ShoppingCart />
      </WishlistProvider>
    </CartProvider>
  )
}

export default CartPage




