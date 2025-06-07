import { Order, OrdersAction } from './types';

export function ordersReducer(state: Order[], action: OrdersAction): Order[] {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, action.payload];

    case 'UPDATE_STATUS':
      return state.map((order) =>
        order.id === action.payload.id
          ? { ...order, status: action.payload.status }
          : order
      );

    case 'CLEAR_ORDERS':
      return [];

    default:
      return state;
  }
}
