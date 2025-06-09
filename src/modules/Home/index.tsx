import { Fragment } from "react"
import { HeroBanner } from "../../components/Hero"
import { BannerAdsSales } from "../../components/BannerFlashSales"
import { Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/ProductList"
import { OffSalesDiscountBanner } from "../../components/BannerOffSales"
import { NewsLetterSection } from "../../components/NewsLetter"
import { NewArrivalsListPage } from "./newArrivals"
import { CartProvider } from "../../contexts/CartDrawerContext"
const HomeModule = () => {
  return (
    <CartProvider>
      <Fragment>
        <HeroBanner />

        <BannerAdsSales />

        <NewArrivalsListPage title="New Products " subTitle="T-shirts Collection For Men" />
        <OffSalesDiscountBanner />
        <NewsLetterSection />
        <Footer />

      </Fragment>
    </CartProvider>

  )
}

export default HomeModule