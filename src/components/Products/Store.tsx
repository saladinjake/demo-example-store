import styled from "styled-components"
import { ProductCard, ProductSkeleton } from "./ProductCard"
import Flex from "../UIElements/Flex"

import Box from "../UIElements/Box"
import { useState, useEffect, useRef, useCallback } from "react"
import { useSearchInputDebounce } from "../../hooks/useDebounce"
import { fetchProducts } from "../../api/services/products.api";
// import { CartProvider } from "../../contexts/CartDrawerContext"


interface IList {
  title: string;
  subTitle: string
}


const PRODUCTS_PER_PAGE = 10;
export const ProductListing = ({ title, subTitle }: IList) => {

  const products = [
    { id: 1, description: "Sample Description", name: "Rock Town T-shirt", thumbnail: "/images/products/f1.jpg", price: "22.44", brand: "Rock town", shipping: 2.22, discount: 1 },
    { id: 2, description: "Sample Description", name: "Cardilac T-shirt", thumbnail: "/images/products/f2.jpg", price: "22.44", brand: "Mtv", shipping: 2.22, discount: 1 },
    { id: 3, description: "Sample Description", name: "Rosewell T-shirt", thumbnail: "/images/products/f3.jpg", price: "22.44", brand: "Roswell", shipping: 2.22, discount: 1 },
    { id: 4, description: "Sample Description", name: "Bonjo T-shirt", thumbnail: "/images/products/f4.jpg", price: "22.44", brand: "Bonjo", shipping: 2.22, discount: 1 },
    { id: 5, description: "Sample Description", name: "Dior T-shirt", thumbnail: "/images/products/f5.jpg", price: "22.44", brand: "Dior", shipping: 2.22, discount: 1 },
    { id: 6, description: "Sample Description", name: "Sven T-shirt", thumbnail: "/images/products/f6.jpg", price: "22.44", brand: "Sven", shipping: 2.22, discount: 1 },
    { id: 7, description: "Sample Description", name: "Resses T-shirt", thumbnail: "/images/products/f7.jpg", price: "22.44", brand: "Resses", shipping: 2.22, discount: 1 },
    { id: 8, description: "Sample Description", name: "Jessklan T-shirt", thumbnail: "/images/products/f8.jpg", price: "22.44", brand: "Jess", shipping: 2.22, discount: 1 },

  ]
  //debunce and load more
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const debouncedSearchTerm = useSearchInputDebounce(searchTerm, 500);

  const categories = ["all", ...new Set(allProducts.map((p: any) => p.brand))];
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const products: any = await fetchProducts();
        setAllProducts(products ? products : []);
      } catch (err) { }
      finally {
        setLoading(false);
      }
    }
    load()

  }, []);

  // Filter and search products
  useEffect(() => {
    let filtered = allProducts;
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p: any) => p.brand === categoryFilter);
    }
    if (debouncedSearchTerm) {
      filtered = filtered.filter((p: any) =>
        p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }
    setDisplayedProducts(filtered.slice(0, PRODUCTS_PER_PAGE));
    setPage(1);
  }, [allProducts, debouncedSearchTerm, categoryFilter]);

  // Lazy load more on scroll
  const loaderRef = useRef<HTMLDivElement | any>();
  const loadMore = useCallback(() => {
    const filtered = allProducts.filter((p: any) => {
      if (categoryFilter !== "all" && p.brand !== categoryFilter) return false;
      if (
        debouncedSearchTerm &&
        !p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
        return false;
      return true;
    });
    const nextPage = page + 1;
    const newProducts = filtered.slice(0, nextPage * PRODUCTS_PER_PAGE);
    setDisplayedProducts(newProducts);
    setPage(nextPage);
  }, [allProducts, categoryFilter, debouncedSearchTerm, page]);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loadMore, loading]);


  return (
    <>
      <ProductLisingWrapper>
        <Flex justifyContent="between">
          <Box>
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </Box>

          <Flex justifyContent="between">
            <Box mr="8" width="100px">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border p-2"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat[0].toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </Box>
            <SearchBox
              required
              name="password"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e: any) => setSearchTerm(e.target.value)}
            />
          </Flex>
        </Flex>
        <Container>


          {loading
            ? Array(PRODUCTS_PER_PAGE)
              .fill(0)
              .map((_, i) => <ProductSkeleton key={i} />)
            : displayedProducts.length > 0 ? displayedProducts.map((item: any) => (
              <ProductCard key={item.name} price={item.price}
                name={item.name}
                brand={item.brand}
                imageUrl={item.thumbnail}
                id={item.id}
                shipping={item.shipping}
                discount={item.discount}
              />
            )) :

              products.map(item => {
                return <ProductCard
                  price={item.price}
                  name={item.name}
                  brand={item.brand}
                  imageUrl={item.thumbnail}
                  id={item.id}

                  shipping={item.shipping}
                  discount={item.discount}
                />
              })
          }

        </Container>

        {/* Loader div for lazy loading */}
        <div ref={loaderRef}></div>
      </ProductLisingWrapper>
    </>
  )
}

const ProductLisingWrapper = styled.section`
    text-align: left;
     padding: 40px 80px;
     & select{
       padding: 13px;
       margin-top:30px;
       border: 1px solid #fafafa;
     }
`
const Container = styled.div`
     display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;

`







const SearchBox = styled.input`
padding: 10px;
width:100%;
height:40px;
border:1px solid #fafafa;
width:330px;
margin-top:30px;
border-radius: 20px
`

