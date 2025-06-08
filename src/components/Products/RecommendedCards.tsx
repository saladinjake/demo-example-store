import { ReactNode, createContext, useContext } from 'react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductContext = createContext<Product | null>(null);

export function ProductCard({ product, children }: { product: Product; children: ReactNode }) {
  return (
    <ProductContext.Provider value={product}>
      <div className="">{children}</div>
    </ProductContext.Provider>
  );
}

ProductCard.Image = function Image() {
  const product = useContext(ProductContext)!;
  return <img src={product.image} alt={product.name} className=" object-cover rounded" />;
};

ProductCard.Title = function Title() {
  const product = useContext(ProductContext)!;
  return <h2 className=" mt-2">{product.name}</h2>;
};

ProductCard.Description = function Description() {
  const product = useContext(ProductContext)!;
  return <p className="text-sm text-gray-600">{product.description}</p>;
};

ProductCard.Price = function Price() {
  const product = useContext(ProductContext)!;
  return <div className="text-primary font-semibold mt-2">${product.price.toFixed(2)}</div>;
};
