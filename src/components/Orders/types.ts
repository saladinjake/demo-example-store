export type Order = {
  id: string;
  items: { id: string; name: string; quantity: number; price: number }[];
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  date: string;
};

export type OrdersAction =
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_STATUS'; payload: { id: string; status: Order['status'] } }
  | { type: 'CLEAR_ORDERS' };
