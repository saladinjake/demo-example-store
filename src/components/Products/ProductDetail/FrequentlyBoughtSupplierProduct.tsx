import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useCart } from "../../../contexts/CartDrawerContext";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  margin-top:20px;
  font-size: 26px;
   @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
   
      font-size: 20px;
      margin-top:10px;
    
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  background: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const Price = styled.p`
  color: #e53e3e;
  font-weight: bold;
`;

// Dummy Data Generator
export const generateProducts = (count: number) => {
  return Array.from({ length: count }, (_, index) => {
    const id = Math.floor((Math.random() * 8 + 1))
    const thumbnail =`/images/products/f${Math.floor((Math.random() * 8 + 1))}.jpg`;
    return ({
      id,
      name: `Product ${index + 1}`,
      thumbnail,
      image: `/images/products/f${Math.floor((Math.random() * 8 + 1))}.jpg`,
      price: `${(Math.random() * 10 + 5).toFixed(2)}`,
      shipping:1.1,
      discount: 1,
      description: `Sample Description`
    })
  });
};

export const ProductListLoadMore = ({ title = "", initialLoad = 10 }) => {
  const [products, setProducts] = useState(generateProducts(initialLoad));
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const {addItem } = useCart()

  // Load More Products on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {
            setProducts((prev) => [...prev, ...generateProducts(10)]);
            if (products.length >= 300) setHasMore(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, products]);

  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <Price>{product.price}</Price>
            <button
             style={{
              padding: "10px",
              background:"#fafafa",
              color:"#000",
              border:"none"
             }}
            onClick={()=> addItem({...product, imageUrl: product.image})}>Add to cart</button>
          </ProductCard>
        ))}
      </ProductGrid>
      {hasMore && <div ref={loaderRef} style={{ height: 20, marginTop: 20 }} />}
    </div>
  );
};

const DisplayScrollLoadMore = () => {
  return (
    <Container>
      <ProductListLoadMore title="Frequently Bought Together" />
      <ProductListLoadMore title="Supplier's Popular Products" />
    </Container>
  );
};

export default DisplayScrollLoadMore;
