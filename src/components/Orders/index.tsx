import { ReactNode, useReducer } from 'react';
import { ordersReducer } from './OrderReducer';
import { Order, OrdersAction } from './types';

type Props = {
  children: (args: {
    orders: Order[];
    dispatch: React.Dispatch<OrdersAction>;
  }) => ReactNode;
  initialOrders?: Order[];
};

export default function OrdersManager({ children, initialOrders = [] }: Props) {
  const [orders, dispatch] = useReducer(ordersReducer, initialOrders);

  return <>{children({ orders, dispatch })}</>;
}
