import { Fragment } from "react"

import { BannerAdsSales } from "../../components/BannerFlashSales"
import {Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/Store"
import { OffSalesDiscountBanner } from "../../components/BannerOffSales"
import { NewsLetterSection } from "../../components/Newsletter"
import { NewArrivalsListPage } from "./newArrivals"

const HomeModule =  () => {
     
    return (
   <Fragment>
      
      <BannerAdsSales/>
      <NewArrivalsListPage/>
      <ProductListing title="Featured Products " subTitle="T-shirts Collection For Men"/>
      <OffSalesDiscountBanner/>
      <NewsLetterSection/>
      <Footer/>

     
      

    </Fragment>

    )
}

export default HomeModule