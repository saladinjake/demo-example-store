import { Fragment } from "react"
import { HeroBanner } from "../../components/Hero"
import {Footer } from "../../components/Footer"
import { ProductListing } from "../../components/Products/ProductList"
const HomeModule =  () => {
    return (
   <Fragment>
      <HeroBanner/>
      <ProductListing/>
      <Footer/>

    </Fragment>

    )
}

export default HomeModule