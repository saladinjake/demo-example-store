import styled from "styled-components"
import { useCart } from "../../contexts/CartDrawerContext";
import { useNavigate } from "react-router-dom";

export function ProductSkeleton() {
  return (
    <div className="">
     
    </div>
  );
}
export const ProductCard = ({ imageUrl, brand, name,  price, id }: {
    imageUrl: string, brand: string, name: string,  price : string | number, id: string | number
}) => {
     const { addItem }= useCart()
     const navigate = useNavigate()
    return (
         <ProductCardWrapper onClick={()=> navigate(`/products-explorer/${id}`)}>
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
                <a href="#" onClick={(e)=>{
                  e.preventDefault()

                  addItem({ imageUrl, brand, name,  price })

                }}><i className="fas fa-shopping-cart cart"></i></a>
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