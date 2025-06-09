import ProductDetailScreen from "../../../components/Products/ProductDetail";
import { CartProvider } from "../../../contexts/CartDrawerContext";



const LandingPage = () => {

  return (
    <CartProvider>
      <ProductDetailScreen/>
    </CartProvider>

  )
}

export default LandingPage




