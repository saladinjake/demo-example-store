import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { ToastNotiier } from "../components/Toast";
const CartContext = createContext({
  cart: [],
  addItem: (product: any) => { },
  removeItem: (id: string | number) => { },
  updateQuantity: (id: any, quantity: number) => { },
  clearCart: () => { },
  // setShowTost: (val:boolean) => void
});

const LOCAL_STORAGE_KEY = "cart";
const initialState: any = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find((item: any) => item.id === action.payload.id);
      if (exists) {
        return state.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM": {
      return state.filter((item: any) => item.id !== action.payload);
    }
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        return state.filter((item: any) => item.id !== id);
      }
      return state.map((item: any) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: any }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [toastType, setToastType] = useState<"success" | "warning" | "info" | "error">("info")
  const [showToast, setShowToast] = useState(false)
  const [message, setMessage] = useState("")
  const displayToast = () => {
    setShowToast(true)
       setTimeout(()=> setShowToast(false), 3000)
  
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (product: any) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setMessage("Success! Your Item was added to cart.")
    setToastType("success")
    displayToast()
  }
  const removeItem = (id: string | number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    setMessage("Success! Your Item was removed from cart.")
    setToastType("success")
    displayToast()
  }
  const updateQuantity = (id: string | number, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
      <ToastNotiier message={message} type={toastType} display={showToast} />
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
