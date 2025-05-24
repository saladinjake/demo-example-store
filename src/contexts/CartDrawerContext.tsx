import { useReducer, createContext, ReactNode, useContext } from "react";


const LOCAL_STORAGE_KEY = "cart";
const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
const getCustomizeCardState = () => {
  if (!localStorage.getItem("customizeCardState")) {
    return null;
  }
  return JSON.parse(localStorage.getItem("customizeCardState"));
};

const initialState = getCustomizeCardState()
  ? getCustomizeCardState()
  : {
      showDrawer: false,
      showAbandonedCart: true,
      showRecentCart: true,
      showWishlist: true,
      
    };

const CustomizeCartContext = createContext({
  showDrawer: false,
  showAbandonedCart: true,
  showRecentCart: true,
  showWishlist: true,
      
  dispatch: null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return {
        ...state,
        showDrawer: true,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        showDrawer: false,
      };
    case "HIDE_CARD":
      localStorage.setItem(
        "customizeCardState",
        JSON.stringify({
          ...state,
          [action.key]: false,
          showDrawer: false,
        }),
      );

      return {
        ...state,
        [action.key]: false,
      };
    case "SHOW_CARD":
      localStorage.setItem(
        "customizeCardState",
        JSON.stringify({
          ...state,
          [action.key]: true,
          showDrawer: false,
        }),
      );

      return {
        ...state,
        [action.key]: true,
      };

     // cart features
      case "ADD_ITEM": {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        return state.filter((item) => item.id !== id);
      }
      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    case "CLEAR_CART": {
      return [];
    } 
    default:
      return state;
  }
};

const CustomizeCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  return (
    <CustomizeCartContext.Provider value={{ ...state, dispatch, cart, addItem, removeItem, updateQuantity, clearCart  }}>
      {children}
    </CustomizeCartContext.Provider>
  );
};

const useCustomizeCart = () => useContext(CustomizeCartContext);

export { CustomizeCartProvider, useCustomizeCart };
