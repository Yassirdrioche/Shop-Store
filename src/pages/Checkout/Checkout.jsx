import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const { cart, calculateTotal, removeFromCart } = useContext(AppContext);
  const navigate = useNavigate();

  // State for form inputs
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle form input changes
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !shippingInfo.name ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.state ||
      !shippingInfo.zip ||
      !shippingInfo.country ||
      !paymentInfo.cardNumber ||
      !paymentInfo.expiryDate ||
      !paymentInfo.cvv
    ) {
      toast.error("Please fill out all fields.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Process the order (simulate API call)
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear the cart after successful order
    cart.forEach((item) => removeFromCart(item.id));
    navigate("/");
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 lg:py-16 bg-neutral-100 relative z-50 ">
      <div className="container mx-auto mt-16">
        {/* Checkout Header */}
        <div className="flex items-center space-x-3 mb-8">
          <Icon icon="mdi:cart-check" className="w-8 h-8" />{" "}
          {/* Checkout Icon */}
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        {/* Checkout Content */}
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              icon="mdi:cart-remove"
              className="w-16 h-16 text-gray-400 mx-auto"
            />
            <p className="mt-4 text-xl text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Shipping and Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Shipping Information */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">
                    Shipping Information
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={shippingInfo.name}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={shippingInfo.zip}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={shippingInfo.country}
                      onChange={handleShippingChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">
                    Payment Information
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Expiry Date (MM/YY)"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-16">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {/* Cart Items */}
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <p className="text-gray-600">
                        {item.name} (x{item.quantity})
                      </p>
                      <p className="text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  {/* Total */}
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
