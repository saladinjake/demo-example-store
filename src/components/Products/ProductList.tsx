import styled from "styled-components"
import { ProductCard } from "./ProductCard"
import { useState, useEffect } from "react"
import { useSearchInputDebounce } from "../../hooks/useDebounce"



export const ProductListing = ({ title, subTitle }: { title: string, subTitle: string }) => {
    //fall back when network request fails
    const products =[
  { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "$22.44", brand: "Rock town" },
  { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "$22.44", brand: "Mtv" },
  { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "$22.44", brand: "Roswell" },
  { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "$22.44", brand: "Bonjo" },
  { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "$22.44", brand: "Dior" },
  { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "$22.44", brand: "Sven" },
  { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "$22.44", brand: "Resses" },
  { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "$22.44", brand: "Jess" },

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
                        id={item.id}
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