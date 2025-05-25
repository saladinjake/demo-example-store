import React, { createContext, useState, useEffect, useContext } from "react";

const WishlistContext = createContext({ wishlist: [], addToWishlist: (item:any)=>{}, removeFromWishlist:  (item:any)=>{}, isInWishlist:  (item:any)=>{} });

const WISHLIST_STORAGE_KEY = "my_ecommerce_wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode}) {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(product: any) {
    setWishlist((prev: any) => {
      if (prev.find((item: any ) => item.id === product.id)) return prev; // no duplicates
      return [...prev, product];
    });
  }

  function removeFromWishlist(productId: string | number) {
    setWishlist((prev: any) => prev.filter((item: any) => item.id !== productId));
  }

  function isInWishlist(productId: string | number) {
    return wishlist.some((item: any) => item.id === productId);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
