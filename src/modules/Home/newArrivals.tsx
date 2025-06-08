import React, { Fragment, useEffect } from 'react';
import ProductGrid from '../../components/Products/NewArrivals';
import { ProductProvider, useProductContext, Product } from '../../contexts/NewArrivalProductContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MOCK_PRODUCTS: Product[] = [
  { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "$22.44", brand: "Rock town" },
  { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "$22.44", brand: "Mtv" },
  { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "$22.44", brand: "Roswell" },
  { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "$22.44", brand: "Bonjo" },
  { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "$22.44", brand: "Dior" },
  { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "$22.44", brand: "Sven" },
  { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "$22.44", brand: "Resses" },
  { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "$22.44", brand: "Jess" },

]

function NewArrivalsProductsSection({ title, subTitle }: { title: string; subTitle: string }) {
  const { filter, setFilter, products, setProducts } = useProductContext();
const navigate = useNavigate()
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


      <ProductLisingWrapper>
        <h2>{title}</h2>
        <p>{subTitle}</p>
    
        <ProductGrid filter={filter} setFilter={setFilter}>
              <Container>          {filtered.map((product) => (
            <ProductGrid.Item key={product.id} product={product}>
              {(product) => (
                <div onClick={() => navigate(`/products-explorer/${product.id}`)}>
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
                </div>
              )}
            </ProductGrid.Item>
          ))}
          </Container>

        </ProductGrid>

      </ProductLisingWrapper>
    </>
  );
}

export function NewArrivalsListPage({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <ProductProvider>
      <NewArrivalsProductsSection title={title} subTitle={subTitle} />
    </ProductProvider>
  );
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