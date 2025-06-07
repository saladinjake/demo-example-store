import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  role: 'user' | 'admin' | 'vendor';
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (username: string, password: string) => Promise<boolean>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'demo-shop-auth-user';

const mockUsers: User[] = [
  { id: '1', name: 'Alice', role: 'admin' },
  { id: '2', name: 'Bob', role: 'user' },
  { id: '3', name: 'Charlie', role: 'driver' },
];


const mockCheckCredentials = (username: string, password: string): User | null => {
  if (!username || !password) return null;
  const found = mockUsers.find((u) => u.name.toLowerCase() === username.toLowerCase());
  return found || null;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = mockCheckCredentials(username, password);
        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(foundUser));
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const signup = (data: any) =>{
      return login(data.email, data.password)
  }
  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
