import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: {},
  login: (data:any) =>{},
  logout:()=>{},
  signup: (data:any) =>{},
});

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (credentials: any) => {
    const fakeUser = { email: credentials.email, id: Date.now().toString() };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    return true;
  };

  const signup = (credentials: any) => {
    return login(credentials);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
