
import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "guest" | "user" | "vendor" | "admin";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// This would connect to a real backend in production
const MOCK_USERS = {
  admin: {
    id: "admin-1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin" as UserRole
  },
  vendor: {
    id: "vendor-1",
    name: "Vendor User",
    email: "vendor@example.com",
    password: "vendor123",
    role: "vendor" as UserRole
  },
  user: {
    id: "user-1",
    name: "Regular User",
    email: "user@example.com",
    password: "user123",
    role: "user" as UserRole
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  
  // Check local storage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    // In a real app, you would validate credentials with a backend
    const mockUserKey = role as keyof typeof MOCK_USERS;
    const mockUser = MOCK_USERS[mockUserKey];
    
    if (mockUser && mockUser.email === email && mockUser.password === password) {
      const { password: _, ...userWithoutPassword } = mockUser;
      setUser(userWithoutPassword);
      localStorage.setItem("authUser", JSON.stringify(userWithoutPassword));
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
