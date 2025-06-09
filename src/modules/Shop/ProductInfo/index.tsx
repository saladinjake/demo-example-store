import ProductDetailScreen from "../../../components/Products/ProductDetail";
import { CartProvider } from "../../../contexts/CartDrawerContext";
import { Header } from "../../../components/Nav";


const LandingPage = () => {

  return (
    <CartProvider>
      <Header/>
      <ProductDetailScreen/>
    </CartProvider>

  )
}

export default LandingPage




