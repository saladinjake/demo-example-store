import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Product = {
  id?: string | number;
  name: string;
  price: number | string;
  description: string;
  thumbnail: string;
  brand: string;
  shipping: string | number;
  discount: string | number
};

interface ProductContextType {
  filter: string;
  setFilter: (filter: string) => void;
  products:  any;
  setProducts: (products: any) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState<any[]>([]);

  return (
    <ProductContext.Provider value={{ filter, setFilter, products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProductContext must be used within ProductProvider');
  return ctx;
};
