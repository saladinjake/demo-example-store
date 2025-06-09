import React, { useEffect } from 'react';
import ProductGrid from './NewArrivals';
import { ProductProvider, useProductContext, Product } from '../../contexts/NewArrivalProductContext';
import styled from 'styled-components';
// Mock products (load this from localStorage or API in real app)
const MOCK_PRODUCTS: Product[] = [
 { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "22.44", brand: "Rock town", shipping: 2.22, discount:1 },
  { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "22.44", brand: "Mtv" ,shipping: 2.22, discount:1},
  { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "22.44", brand: "Roswell", shipping: 2.22, discount:1},
  { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "22.44", brand: "Bonjo" ,shipping: 2.22, discount:1},
  { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "22.44", brand: "Dior" ,shipping: 2.22, discount:1},
  { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "22.44", brand: "Sven",shipping: 2.22, discount:1 },
  { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "22.44", brand: "Resses" ,shipping: 2.22, discount:1},
  { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "22.44", brand: "Jess",shipping: 2.22, discount:1 },

]

function ProductsListInner() {
  const { filter, setFilter, products, setProducts } = useProductContext();

  useEffect(() => {
    // Load products from mock data or localStorage:
    setProducts(MOCK_PRODUCTS);
  }, [setProducts]);

  // Apply filter:
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <SearchBox
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      
      />

      <ProductGrid filter={filter} setFilter={setFilter}>
        {filtered.map((product) => (
          <ProductGrid.Item key={product.id} product={product}>
            {(product) => (
              <>
                <img src={product.thumbnail} alt={product.name}  />
                <h3 className="font-semibold">{product.name}</h3>
                <p>{product.price}</p>
              </>
            )}
          </ProductGrid.Item>
        ))}
      </ProductGrid>
    </>
  );
}

export default function ProductsListPage() {
  return (
    <ProductProvider>
      <ProductsListInner />
    </ProductProvider>
  );
}


const SearchBox =styled.input`
padding: 10px;
width:100%;

max-width:330px;

`