import { Fragment } from "react"
import { HeroBanner } from "../../components/Hero"
import { BannerAdsSales } from "../../components/BannerFlashSales"
import {Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/ProductList"
const HomeModule =  () => {
    return (
   <Fragment>
      <HeroBanner/>

      <BannerAdsSales/>
      <ProductListing/>
      <Footer/>

    </Fragment>

    )
}

export default HomeModule