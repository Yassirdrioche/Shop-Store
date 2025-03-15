import React, { Suspense } from "react";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
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
  return (
    <>
      <div className="line_prog"></div>

      <BtnScrollTop />
      <CustomCursor />
      <SmoothScroll />
      <Router>
        <ScrollToTop />
        <AuthProvider>
          {" "}
          {/* Wrap the application in AuthProvider */}
          <SideBar />
          <div>
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
                <div className="py-10 min-h-screen relative z-50  bg-neutral-200 grid place-content-center">
                  <Circles
                    height="80"
                    width="80"
                    color="#00000"
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
                <Route path="/login" element={<Login />} />{" "}
                {/* Add route for Login */}
                <Route path="/checkout" element={<Checkout />} />{" "}
                {/* Add route for Checkout */}
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="*" element={<NotFound />} /> {/* 404 Page */}
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </AuthProvider>{" "}
        {/* Close AuthProvider */}
      </Router>
    </>
  );
};

export default App;
