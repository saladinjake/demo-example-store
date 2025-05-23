import { useState } from "react";
export const useAuth = () => {

  const userTemp = localStorage.getItem('user')
  const [user, setUser] = useState(() => JSON.parse(userTemp));
  const login = (data: any) => { localStorage.setItem('user', JSON.stringify(data)); setUser(data); };
  const logout = () => { localStorage.removeItem('user'); setUser(null); };
  return { user, login, logout };
};
