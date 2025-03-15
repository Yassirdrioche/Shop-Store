import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const navigate = useNavigate();
  const { cart, setCart } = useContext(AppContext);

  // Check localStorage for user data on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user data from localStorage
    }
  }, []);

  const login = (userData) => {
    setUser(userData); // Set user data on login
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
    navigate("/"); // Navigate to home page after login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    localStorage.removeItem("user"); // Remove user data from localStorage
    setCart([]);
    navigate("/login"); // Navigate to home page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
