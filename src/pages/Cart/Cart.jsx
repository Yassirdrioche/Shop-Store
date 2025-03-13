import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartItem from "../../components/CartItem/CartItem";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } =
    useContext(AppContext);

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Proceed to Checkout" button click
  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items to proceed to checkout.");
      return;
    }
    navigate("/checkout"); // Redirect to the checkout page
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Cart Header */}
      <div className="container mx-auto mt-16">
        <div className="flex items-center space-x-3 mb-8">
          <Icon icon="mdi:cart-outline" className="w-8 h-8" /> {/* Cart Icon */}
          <h1 className="text-3xl font-bold ">Your Cart</h1>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              icon="mdi:cart-remove"
              className="w-16 h-16 text-neutral-700 mx-auto"
            />
            <p className="mt-4 text-xl text-neutral-700">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Cart Items */}
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

            {/* Right Column: Total Price */}
            <div className="lg:col-span-1">
              <div className="p-6 bg-white rounded-xl shadow-lg sticky top-16">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Order Summary
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-900">
                      ${calculateTotal().toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-900">$0.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Taxes</p>
                    <p className="text-gray-900">$0.00</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <p className="text-lg font-semibold text-gray-900">
                        Total
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${calculateTotal().toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleProceedToCheckout} // Add onClick handler
                  className="mt-6 w-full bg-black hover:bg-neutral-800 text-white py-3 px-6 rounded-lg transition-colors duration-300"
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
