import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
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
const generateProducts = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: `/sampleProduct.jpg`,
    price: `$${(Math.random() * 10 + 5).toFixed(2)}`,
  }));
};

const ProductList = ({ title, initialLoad = 10 }) => {
  const [products, setProducts] = useState(generateProducts(initialLoad));
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

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
          </ProductCard>
        ))}
      </ProductGrid>
      {hasMore && <div ref={loaderRef} style={{ height: 20, marginTop: 20 }} />}
    </div>
  );
};

const App = () => {
  return (
    <Container>
      <ProductList title="Frequently Bought Together" />
      <ProductList title="Supplier's Popular Products" />
    </Container>
  );
};

export default App;
