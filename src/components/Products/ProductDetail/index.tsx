import ProductDetailsSectionA from "./productDetail"
import ProductDetailsSectionB from "./ProductDescription"
import ProductLeadInfoPage from "./MoreProductInfoLead"
import FrequentlyBoughtSupplierProducts from "./FrequentlyBoughtSupplierProduct"
import RelatedSearches from "./RelatedSearch"
// import ProductDetailsRelatedSection from "./RelatedProduct"


const ProductDetailsPage = () => {
    return (
      <div >
        <ProductDetailsSectionA />
         {/* <ProductDetailsSectionB  /> 
         <ProductLeadInfoPage/>
        */}
         <FrequentlyBoughtSupplierProducts/>
         <RelatedSearches/>
        {/* <ProductDetailsRelatedSection product={product} /> */}
      </div>
    );
  };
  
  export default ProductDetailsPage;
  