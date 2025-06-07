import { ReactNode } from 'react';
import { ProductCard } from './RecommendedCards';
export const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'Product One',
    description: 'This is a great product.',
    price: 19.99,
    image: '/placeholder.png',
  },
  {
    id: 'p2',
    name: 'Product Two',
    description: 'Another cool item.',
    price: 29.99,
    image: '/placeholder.png',
  },
];


type Product = typeof MOCK_PRODUCTS[number];

type Props = {
  children: (products: Product[]) => ReactNode;
};

 function ProductFetcher({ children }: Props) {
  // Simulate fetching from localStorage or backend
  const products = MOCK_PRODUCTS;

  return <>{children(products)}</>;
}













export default function Recommendations() {
  return (
    <div>
      <h1>All Products</h1>
      <ProductFetcher>
        {(products) => (
          <div>
            {products.map((product) => (
              <ProductCard key={product.id} product={product}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Description />
                <ProductCard.Price />
              </ProductCard>
            ))}
          </div>
        )}
      </ProductFetcher>
    </div>
  );
}
