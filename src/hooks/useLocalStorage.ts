
import { useState } from "react";
export const useLocalStorage = (key:string, initialValue: any) => {
  const [store, setStoreData] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue);
  const setValue = (value:any) => {
    setStoreData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [store, setValue];
};
