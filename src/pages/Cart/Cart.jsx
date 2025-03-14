import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartItem from "../../components/CartItem/CartItem";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import illustrationCart from "../../assets/picture/illustrationCart.png";
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
      <div className="flex items-center space-x-3 my-20 ">
        <Icon icon="mdi:cart-outline" className="w-10 h-10" /> {/* Cart Icon */}
        <h2 className="text-4xl font-bold text-neutral-900 ">Your Cart</h2>
      </div>
      <div className="container mx-auto">
        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="text-center  flex justify-center flex-wrap items-center ">
            <img src={illustrationCart} alt="" className="w-72 h-72" />

            <article>
              <p className="mt-4 text-xl text-neutral-700">
                Your cart is empty.
              </p>
              <Link to={"/shop"}>
                <button className="bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-900 text-lg group text-white px-6 py-3 mt-7 rounded-lg flex items-center gap-2 hover:bg-neutral-700  hover:shadow-lg transition-all duration-300">
                  Go To Shop
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-6 h-6 group-hover:translate-x-4 transition-all duration-300"
                  />
                </button>
              </Link>
            </article>
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
