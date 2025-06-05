import styled from "styled-components"
import { ProductCard, ProductSkeleton } from "./ProductCard"
import Flex from "../UIElements/Flex"
import Input from "../UIElements/Input"
import Box from "../UIElements/Box"
import { useState, useEffect, useRef, useCallback } from "react"
import { useSearchInputDebounce } from "../../hooks/useDebounce"
import { fetchProducts } from "../../api/services/products.api";
const PRODUCTS_PER_PAGE = 10;
export const ProductListing = ({ title, subTitle }) => {
     const products =[
        {description:"Sample Description",name:"Rock Town T-shirt", thumbnail:"/images/products/f1.jpg", price:"$22.44", brand:"Rock town"},
        {description:"Sample Description",name:"Cardilac T-shirt", thumbnail:"/images/products/f2.jpg", price:"$22.44", brand:"Mtv"},
        {description:"Sample Description",name:"Rosewell T-shirt", thumbnail:"/images/products/f3.jpg", price:"$22.44", brand:"Roswell"},
        {description:"Sample Description",name:"Bonjo T-shirt", thumbnail:"/images/products/f4.jpg", price:"$22.44", brand:"Bonjo"},
        {description:"Sample Description",name:"Dior T-shirt", thumbnail:"/images/products/f5.jpg", price:"$22.44", brand:"Dior"},
        {description:"Sample Description",name:"Sven T-shirt", thumbnail:"/images/products/f6.jpg", price:"$22.44", brand:"Sven"},
        {description:"Sample Description",name:"Resses T-shirt", thumbnail:"/images/products/f7.jpg", price:"$22.44", brand:"Resses"},
        {description:"Sample Description",name:"Jessklan T-shirt", thumbnail:"/images/products/f8.jpg", price:"$22.44", brand:"Jess"},
        
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
        try{

            const products: any = await fetchProducts();
            setAllProducts(products ? products : []);
       
        }catch(err){
        
        }finally {

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
          filtered = filtered.filter((p) =>
            p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        }
        setDisplayedProducts(filtered.slice(0, PRODUCTS_PER_PAGE));
        setPage(1);
    }, [allProducts, debouncedSearchTerm, categoryFilter]);

    // Lazy load more on scroll
    const loaderRef = useRef();
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
        <ProductLisingWrapper>
            <Flex justifyContent="between">
              <Box>

                <h2>{title}</h2>
        <p>{subTitle}</p>

              </Box>

              <Box>
                 <Input
                required
                label="Search"
                isLoading={false}
                name="password"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
               
                width="330px"
              />

              <Box ml="4">
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
              </Box>
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
             imageUrl={item.thumbnail} />
            )): 
            
             products.map(item => {
            return <ProductCard 
             price={item.price}
             name={item.name}
             brand={item.brand} 
             imageUrl={item.thumbnail}
             /> 
         })
            }
         
         </Container>

          {/* Loader div for lazy loading */}
      <div ref={loaderRef}></div>
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