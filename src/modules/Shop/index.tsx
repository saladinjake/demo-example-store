import { Fragment } from "react"

import { BannerAdsSales } from "../../components/BannerFlashSales"
import {Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/Store"
import { OffSalesDiscountBanner } from "../../components/BannerOffSales"
import { NewsLetterSection } from "../../components/NewsLetter"

const HomeModule =  () => {
     
    return (
   <Fragment>
      
      <BannerAdsSales/>
 
      <ProductListing title="Featured Products " subTitle="T-shirts Collection For Men"/>
      <OffSalesDiscountBanner/>
      <NewsLetterSection/>
      <Footer/>

     
      

    </Fragment>

    )
}

export default HomeModule