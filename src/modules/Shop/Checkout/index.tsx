
import Checkout from "./Checkout";
import { Header } from "../../../components/Nav";
import { CartProvider } from "../../../contexts/CartDrawerContext";
const CheckoutPage = () => {
  return (
    <CartProvider>
    <Header/>
      <Checkout/>
    </CartProvider>
  )
}
export default CheckoutPage