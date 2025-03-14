import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"; // Import toast for notifications
import prods from "../data/products"; // Adjust the import path

// Create the context
export const AppContext = createContext();

// Create the context provider
export const AppProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false); // Sidebar toggle state
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState(false); // Sidebar toggle state

  const toggleSidebar = () => {
    setIsToggled(!isToggled); // Function to toggle sidebar
  };

  // Load cart, wishlist, and filters from localStorage or initialize as empty/default
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

  const [products, setProducts] = useState(prods); // Original products

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // Add a product to the cart
  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      setCart([...cart, { ...product, quantity: 1 }]); // Add product with quantity 1
      toast.success(`${product.name} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.warning(`${product.name} is already in the cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    // toast.error(`${product.name} removed from cart!`, {
    //   position: "bottom-right",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  // Filter products based on current filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    return matchesCategory && matchesPrice;
  });

  // Add or remove a product from the wishlist
  const toggleWishlist = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    if (isProductInWishlist) {
      // Remove from wishlist
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== product.id)
      );
      toast.error(`${product.name} removed from wishlist!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Add to wishlist
      setWishlist([...wishlist, product]);
      toast.success(`${product.name} added to wishlist!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist, // Provide wishlist state
        products, // Provide original products
        filteredProducts, // Provide filtered products
        filters,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        updateFilters,
        toggleWishlist, // Provide the toggleWishlist function
        isToggled, // Provide the sidebar toggle state
        toggleSidebar, // Provide the function to toggle sidebar
        isFilterSideBarOpen,
        setIsFilterSideBarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
