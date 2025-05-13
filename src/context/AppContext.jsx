import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import prods from "../data/products";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState(false);

  // State initialization with localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : { category: "all", minPrice: 0, maxPrice: 1000 };
  });

  const [products] = useState(prods); // Original products (no need to setProducts if they never change)

  // Save states to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        filters.category === "all" || product.category === filters.category;
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [products, filters]);

  // Memoized total calculation
  const calculateTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Callbacks for stable function references
  const toggleSidebar = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (!isProductInCart) {
        toast.success(`${product.name} added to cart!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        toast.warning(`${product.name} is already in the cart!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return prevCart;
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const updateFilters = useCallback((newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, []);

  const toggleWishlist = useCallback((product) => {
    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some(
        (item) => item.id === product.id
      );
      if (isProductInWishlist) {
        toast.error(`${product.name} removed from wishlist!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        toast.success(`${product.name} added to wishlist!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return [...prevWishlist, product];
      }
    });
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      cart,
      wishlist,
      products,
      filteredProducts,
      filters,
      addToCart,
      removeFromCart,
      updateQuantity,
      calculateTotal,
      updateFilters,
      toggleWishlist,
      isToggled,
      toggleSidebar,
      isFilterSideBarOpen,
      setIsFilterSideBarOpen,
      setCart,
    }),
    [
      cart,
      wishlist,
      products,
      filteredProducts,
      filters,
      addToCart,
      removeFromCart,
      updateQuantity,
      calculateTotal,
      updateFilters,
      toggleWishlist,
      isToggled,
      toggleSidebar,
      isFilterSideBarOpen,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
