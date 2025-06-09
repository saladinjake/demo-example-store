

import { WishlistProvider } from "../../../contexts/WishlistContext";
import WishBag from "./WishList";
import { Header } from "../../../components/Nav";
const CartPage = () => {
  return (
      <WishlistProvider>
        <Header/>
        <WishBag />
      </WishlistProvider>
    
  )
}

export default CartPage




