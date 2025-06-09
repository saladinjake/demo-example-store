import React, { Fragment, useEffect, useState, useRef } from 'react';
import ProductGrid from '../../components/Products/NewArrivals';
import { ProductProvider, useProductContext, Product } from '../../contexts/NewArrivalProductContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartDrawerContext';
import { generateProducts } from '../../components/Products/ProductDetail/FrequentlyBoughtSupplierProduct';
const MOCK_PRODUCTS: Product[] = [
  { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "22.44", brand: "Rock town", shipping: 2.22, discount: 1 },
  { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "22.44", brand: "Mtv", shipping: 2.22, discount: 1 },
  { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "22.44", brand: "Roswell", shipping: 2.22, discount: 1 },
  { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "22.44", brand: "Bonjo", shipping: 2.22, discount: 1 },
  { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "22.44", brand: "Dior", shipping: 2.22, discount: 1 },
  { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "22.44", brand: "Sven", shipping: 2.22, discount: 1 },
  { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "22.44", brand: "Resses", shipping: 2.22, discount: 1 },
  { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "22.44", brand: "Jess", shipping: 2.22, discount: 1 },

]

function NewArrivalsProductsSection({ title, subTitle }: { title: string; subTitle: string }) {
  const { filter, setFilter, products, setProducts } = useProductContext();

  const { addItem } = useCart()
  const navigate = useNavigate()

  // FOR SIMPLE SMALL DISPLAY WHEN DEBUGGING UI
  useEffect(() => {
    // Load products from mock data or localStorage:
    const productPayLoads: any = generateProducts(10) || MOCK_PRODUCTS
    setProducts(productPayLoads);
  }, [setProducts]);



  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);


  // Load More Products on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {
            const newLoads: any = [...generateProducts(10)]
            setProducts((prev) => [...prev, ...newLoads]);
            if (products.length >= 300) setHasMore(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, products]);

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
                <div >
                  <img onClick={() => navigate(`/products-explorer/{product.id}`)} src={product.thumbnail} alt={product.name} className="" />

                  <div className="detailInformation" >
                    <span onClick={() => navigate(`/products-explorer/{product.id}`)}>{product.brand}</span>
                    <h5 onClick={() => navigate(`/products-explorer/{product.id}`)}>{product.name}</h5>
                    <div className="star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 onClick={() => navigate(`/products-explorer/{product.id}`)}>{product.price}</h4>

                    <a href="#" onClick={(e) => {
                      e.preventDefault()
                      addItem({
                        imageUrl: product.thumbnail,
                        brand: product.brand, name: product.name,
                        price: Number(product.price), id: product.id,
                        shipping: product.shipping, discount: product.discount
                      })
                    }}><i className="fas fa-shopping-cart cart">Add to cart</i></a>
                  </div>
                </div>
              )}
            </ProductGrid.Item>
          ))}
          </Container>

        </ProductGrid>
 {hasMore && <div ref={loaderRef} style={{ height: 20, marginTop: 20 }} />}
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

     
& .cart {
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border: 1px solid #cce7d0;
    position: absolute;
    bottom: 20px;
    right: 10px;
    text-align: center;
}
`
const Container = styled.div`
     display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;

`