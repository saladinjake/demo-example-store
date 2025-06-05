import React, { useEffect } from 'react';
import ProductGrid from '../../components/Products/NewArrivals';
import { ProductProvider, useProductContext, Product } from '../../contexts/NewArrivalProductContext';

const MOCK_PRODUCTS: Product[] =[
    { description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "$22.44", brand: "Rock town" },
    { description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "$22.44", brand: "Mtv" },
    { description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "$22.44", brand: "Roswell" },
    { description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "$22.44", brand: "Bonjo" },
    { description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "$22.44", brand: "Dior" },
    { description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "$22.44", brand: "Sven" },
    { description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "$22.44", brand: "Resses" },
    { description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "$22.44", brand: "Jess" },

  ]

function NewArrivalsProductsSection() {
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
                <img src={product.thumbnail} alt={product.name} className="" />

                <div className="detailInformation">
                    <span>{product.brand}</span>
                    <h5>{product.name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{product.price}</h4>
                </div>
              </>
            )}
          </ProductGrid.Item>
        ))}
      </ProductGrid>
    </>
  );
}

export function NewArrivalsListPage() {
  return (
    <ProductProvider>
      <NewArrivalsProductsSection />
    </ProductProvider>
  );
}
