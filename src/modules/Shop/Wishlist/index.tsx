

import { WishlistProvider } from "../../../contexts/WishlistContext";
import WishBag from "./WishList";
const CartPage = () => {
  return (
      <WishlistProvider>
        <WishBag />
      </WishlistProvider>
    
  )
}

export default CartPage




