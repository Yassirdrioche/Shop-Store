import React, { Suspense, useEffect, lazy } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Sidebar/Sidebar";
import ScrollToTop from "./utils/ScrollToTop";
import BtnScrollTop from "./utils/BtnScrollTop";
import { Bars } from "react-loader-spinner";

// Lazy-loaded components with prefetch
const Home = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Home/Home")
);
const Shop = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Shop/Shop")
);
const ProductDetails = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Cart/Cart")
);
const NotFound = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/NotFound/NotFound")
);
const Wishlist = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Wishlist/Wishlist")
);
const BlogDetails = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Blog/BlogDetails")
);
const Login = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Login/Login")
);
const Signup = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Signup/Signup")
);
const Checkout = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Checkout/Checkout")
);
const CustomCursor = lazy(() => import("./utils/customCursor/CustomCursor"));
const SmoothScroll = lazy(() => import("./utils/LenisProvider"));

const LoadingSpinner = () => (
  <div className="min-h-screen z-50 relative bg-neutral-200 grid place-content-center">
    <Bars height="50" width="50" color="#00000" visible={true} />
  </div>
);

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="line_prog"></div>
      <BtnScrollTop />
      <Suspense fallback={null}>
        {/* <CustomCursor /> */}
        <SmoothScroll />
      </Suspense>

      <Router>
        <ScrollToTop />
        <AuthProvider>
          <SideBar />
          <div className="flex-1">
            <Header />
            <ToastContainer
              position="bottom-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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
