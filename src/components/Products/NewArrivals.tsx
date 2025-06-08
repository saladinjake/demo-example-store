import React, { ReactNode } from 'react';
import { Product } from '../../contexts/NewArrivalProductContext';
import styled from 'styled-components';
import Flex from '../UIElements/Flex';
import Input from '../UIElements/Input';
interface ProductGridProps {
  children: ReactNode;
  filter:any;
  setFilter: (val:any) => void;
}

interface ProductGridItemProps {
  product: Product;
  
  children: (product: Product) => ReactNode;  // render prop for custom rendering
}

function ProductGrid({ children , filter, setFilter}: ProductGridProps) {
  return (
    <>
 <Flex justifyContent='end'>
   <input
          type="text"
          placeholder="Search products..."
          value={filter}
          name="filter"
          onChange={(e: any) => setFilter(e.target.value)}
          className="mb-4 p-2 border rounded w-full max-w-sm"
        />
 </Flex>
      <Flex direction='row' gap="10px 20px" my="10" mx="16">
        {children}
      </Flex>
    </>

  );
}

function ProductGridItem({ product, children }: ProductGridItemProps) {
  return <ProductCardWrapper>{children(product)}</ProductCardWrapper>;
}

ProductGrid.Item = ProductGridItem;

export default ProductGrid;


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