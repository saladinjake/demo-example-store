export const useLocalStorage = (key, initialValue) => {
  const [store, setStoreData] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue);
  const setValue = (value) => {
    setStoreData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [stored, setValue];
};
