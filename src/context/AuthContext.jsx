import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const navigate = useNavigate();
  const login = (userData) => {
    setUser(userData); // Set user data on login
    navigate("/"); // Navigate to home page after login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
