import React, { Suspense, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Sidebar/Sidebar";
import SmoothScroll from "./utils/LenisProvider";
import CustomCursor from "./utils/customCursor/CustomCursor";
import ScrollToTop from "./utils/ScrollToTop";
import BtnScrollTop from "./utils/BtnScrollTop";
import { Circles } from "react-loader-spinner";
import Checkout from "./pages/Checkout/Checkout";

// Lazy-loaded components
const Home = React.lazy(() => import("./pages/Home/Home"));
const Shop = React.lazy(() => import("./pages/Shop/Shop"));
const ProductDetails = React.lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Wishlist = React.lazy(() => import("./pages/Wishlist/Wishlist"));
const BlogDetails = React.lazy(() => import("./pages/Blog/BlogDetails"));
const Login = React.lazy(() => import("./pages/Login/Login"));

const App = () => {
  // Ensure scroll to top on initial load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    // Prevent browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="line_prog"></div>
      <BtnScrollTop />
      <CustomCursor />
      <SmoothScroll />
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <SideBar />
          <div className="flex-1">
            <Header />
            <ToastContainer
              position="bottom-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Suspense
              fallback={
                <div className="min-h-screen z-50 relative bg-neutral-200 grid place-content-center">
                  <Circles
                    height="80"
                    width="80"
                    color="#000000"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              }
            >
              <Routes>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
