import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartItem from "../../components/CartItem/CartItem";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import illustrationCart from "../../assets/picture/illustrationCart.png";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items to proceed to checkout.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen z-50 relative bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 z-[-1]
  [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
  bg-[length:20px_20px] opacity-30"
      ></div>
      <div className="max-w-7xl mx-auto">
        {/* Cart Header */}

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-9 text-center">
            <img
              src={illustrationCart}
              alt="Empty cart"
              className="w-full max-w-md mb-8"
              loading="lazy"
            />
            <p className="text-xl text-neutral-700 mb-6">Your cart is empty.</p>
            <Link
              to="/shop"
              className="bg-gradient-to-r from-neutral-600 to-neutral-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              Go To Shop
              <Icon
                icon="mdi:arrow-right"
                className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
            {" "}
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Icon
                  icon="mdi:cart-outline"
                  className="w-10 h-10 text-neutral-900"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Your Cart
                </h2>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="text-neutral-900">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="text-neutral-900">$0.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-600">Taxes</span>
                    <span className="text-neutral-900">$0.00</span>
                  </div>

                  <div className="border-t border-neutral-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-semibold text-lg">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-4 rounded-lg mt-8 transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
