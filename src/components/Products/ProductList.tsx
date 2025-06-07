import styled from "styled-components"
import { ProductCard } from "./ProductCard"
import { useState, useEffect } from "react"
import { useSearchInputDebounce } from "../../hooks/useDebounce"



export const ProductListing = ({ title, subTitle }: {title: string, subTitle: string}) => {
    //fall back when network request fails
     const products = [
        {name:"Rock Town T-shirt", thumbnail:"/images/products/f1.jpg", price:"$22.44", brand:"Rock town"},
        {name:"Cardilac T-shirt", thumbnail:"/images/products/f2.jpg", price:"$22.44", brand:"Mtv"},
        {name:"Rosewell T-shirt", thumbnail:"/images/products/f3.jpg", price:"$22.44", brand:"Roswell"},
        {name:"Bonjo T-shirt", thumbnail:"/images/products/f4.jpg", price:"$22.44", brand:"Bonjo"},
        {name:"Dior T-shirt", thumbnail:"/images/products/f5.jpg", price:"$22.44", brand:"Dior"},
        {name:"Sven T-shirt", thumbnail:"/images/products/f6.jpg", price:"$22.44", brand:"Sven"},
        {name:"Resses T-shirt", thumbnail:"/images/products/f7.jpg", price:"$22.44", brand:"Resses"},
        {name:"Jessklan T-shirt", thumbnail:"/images/products/f8.jpg", price:"$22.44", brand:"Jess"},
        
    ]

   
    
    return (
        <ProductLisingWrapper>
             <h2>{title}</h2>
        <p>{subTitle}</p>
            <Container>
                
         {products.map(item => {
            return <ProductCard 
             price={item.price}
             name={item.name}
             brand={item.brand} 
             imageUrl={item.thumbnail}
             /> 
         })}
         </Container>
        </ProductLisingWrapper>
    )
}

const ProductLisingWrapper = styled.section`
    text-align: left;
     padding: 40px 80px;
`
const Container = styled.div`
     display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;

`