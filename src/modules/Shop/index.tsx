import { Fragment } from "react"

import { BannerAdsSales } from "../../components/BannerFlashSales"
import { Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/Store"
import { OffSalesDiscountBanner } from "../../components/BannerOffSales"
import { NewsLetterSection } from "../../components/NewsLetter"
import { CartProvider } from "../../contexts/CartDrawerContext"
import { Header } from "../../components/Nav"
const HomeModule = () => {

  return (
    <CartProvider>   <Fragment>
<Header/>
      <BannerAdsSales />

      <ProductListing title="Featured Products " subTitle="T-shirts Collection For Men" />
      <OffSalesDiscountBanner />
      <NewsLetterSection />
      <Footer />
    </Fragment>
    </CartProvider>

  )
}

export default HomeModule