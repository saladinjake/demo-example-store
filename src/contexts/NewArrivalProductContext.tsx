import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Product = {
  id?: string | number;
  name: string;
  price: number | string;
  description: string;
  thumbnail: string;
  brand: string;
};

interface ProductContextType {
  filter: string;
  setFilter: (filter: string) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

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
