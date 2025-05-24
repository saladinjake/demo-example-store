import styled from "styled-components"


import Box from "../../components/UIElements/Box"
import Skeleton from "../../components/UIElements/Skeleton"

export function ProductSkeleton() {
  return (
    <div className="border rounded p-4 shadow animate-pulse">
      <Skeleton
       width="22%"
       height="100px"

       color="#eaeaea"
      />
      <Skeleton
       width="100%"
       height="10px"
       color="#eaeaea"
      />

        <Skeleton
       width="100%"
       height="10px"
       color="#eaeaea"
      />

        <Skeleton
       width="100%"
       height="10px"
       color="#eaeaea"
      />
    </div>
  );
}
export const ProductCard = ({ imageUrl, brand, name,  price }) => {
    return (
         <ProductCardWrapper>
                <img src={imageUrl} alt="" />
                <div className="detailInformation">
                    <span>{brand}</span>
                    <h5>{name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{price}</h4>
                </div>
                <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
            </ProductCardWrapper>
    )
}





const ProductCardWrapper = styled.div`


    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;


    &:hover {
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
    }

& img {
    width: 100%;
    border-radius: 20px;   
}

& .detailInformation {
    text-align: start;
    padding: 10px 0;
}

& .detailInformation span {
    color: #606063;
    font-size: 12px;
}

& .detailInformation h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}

& .detailInformation i {
    font-size: 12px;
    color: rgb(243, 181, 25);
}

& .detailInformation h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}

& .cart {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border: 1px solid #cce7d0;
    position: absolute;
    bottom: 20px;
    right: 10px;
}

`