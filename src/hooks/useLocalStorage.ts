
import { useState } from "react";
export const useLocalStorage = (key:string, initialValue: any) => {

  let value = localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
  const [store, setStoreData] = useState(() => JSON.parse(value) || initialValue);
  const setValue = (value:any) => {
    setStoreData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [store, setValue];
};
