import React, { useEffect } from 'react';
import ProductGrid from './NewArrivals';
import { ProductProvider, useProductContext, Product } from '../../contexts/NewArrivalProductContext';

// Mock products (load this from localStorage or API in real app)
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Laptop', price: 1200, description: 'A fast laptop', thumbnail: '/img/laptop.png', brand: 'electronics' },
  { id: '2', name: 'Sneakers', price: 150, description: 'Comfort shoes', thumbnail: '/img/sneakers.png', brand: 'fashion' },
  // more products...
];

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
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm"
      />

      <ProductGrid>
        {filtered.map((product) => (
          <ProductGrid.Item key={product.id} product={product}>
            {(product) => (
              <>
                <img src={product.thumbnail} alt={product.name}  />
                <h3 className="font-semibold">{product.name}</h3>
                <p>${product.price}</p>
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
