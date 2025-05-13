import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setCart } = useContext(AppContext);

  // Initialize user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Memoized login function with error handling
  const login = useCallback(
    (userData) => {
      try {
        const serializedUser = JSON.stringify(userData);
        localStorage.setItem("user", serializedUser);
        setUser(userData);
        navigate("/", { replace: true });
      } catch (error) {
        console.error("Failed to save user data", error);
      }
    },
    [navigate]
  );

  // Memoized logout function with cleanup
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    setCart([]);
    navigate("/login", { replace: true });
  }, [navigate, setCart]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: !!user,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
