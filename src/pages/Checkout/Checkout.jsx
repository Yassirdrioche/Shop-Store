import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DottedBg from "../../components/DottedBg";
import DottedBgWhite from "../../components/DottedBgWhite";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Checkout = () => {
  const { cart, calculateTotal, removeFromCart } = useContext(AppContext);
  const navigate = useNavigate();
  const sectionRef = useRef();
  const formRef = useRef();
  const summaryRef = useRef();

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

  const [isProcessing, setIsProcessing] = useState(false);

  // Animation setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".checkout-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".form-section", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(".summary-section", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

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
        theme: "dark",
      });
      setIsProcessing(false);
      return;
    }

    // Simulate processing with animation
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.3,
      repeat: 1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Payment processed successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    // Clear the cart after successful order
    cart.forEach((item) => removeFromCart(item.id));
    navigate("/order-confirmation");
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 lg:py-16 bg-neutral-900 relative z-50 overflow-hidden"
    >
      <DottedBgWhite />
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[100px]" />
      </div>

      <DottedBg opacity={0.05} />

      <div className="container mx-auto mt-16 relative z-10">
        {/* Futuristic Checkout Header */}
        <div className="checkout-header flex items-center space-x-3 mb-12">
          <h2 className="text-4xl font-bold  text-neutral-100">
            CHECKOUT TERMINAL
          </h2>
        </div>

        {/* Checkout Content */}
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              icon="mdi:cart-remove"
              className="w-16 h-16 text-neutral-400 mx-auto"
            />
            <p className="mt-4 text-xl text-neutral-300">Your cart is empty.</p>
            <button
              onClick={() => navigate("/shop")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Shipping and Payment Form */}
            <div className="lg:col-span-2 form-section">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Shipping Information */}
                <div className="bg-neutral-800/50 border border-neutral-700/30 p-6 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <Icon
                      icon="mdi:truck-delivery-outline"
                      className="w-6 h-6 text-purple-400 mr-2"
                    />
                    <h2 className="text-xl font-semibold text-white">
                      SHIPPING INFORMATION
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder=" "
                          value={shippingInfo.name}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          Full Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="address"
                          placeholder=" "
                          value={shippingInfo.address}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          Address
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="city"
                          placeholder=" "
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          City
                        </label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="state"
                          placeholder=" "
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          State
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="zip"
                          placeholder=" "
                          value={shippingInfo.zip}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          ZIP Code
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="country"
                          placeholder=" "
                          value={shippingInfo.country}
                          onChange={handleShippingChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-purple-400 transition-all">
                          Country
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-neutral-800/50 border border-neutral-700/30 p-6 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <Icon
                      icon="mdi:credit-card-chip-outline"
                      className="w-6 h-6 text-blue-400 mr-2"
                    />
                    <h2 className="text-xl font-semibold text-white">
                      PAYMENT INFORMATION
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder=" "
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                        required
                      />
                      <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-blue-400 transition-all">
                        Card Number
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder=" "
                          value={paymentInfo.expiryDate}
                          onChange={handlePaymentChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-blue-400 transition-all">
                          Expiry (MM/YY)
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="cvv"
                          placeholder=" "
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white peer"
                          required
                        />
                        <label className="absolute left-3 -top-2 px-1 bg-neutral-800 text-xs text-neutral-400 peer-focus:text-blue-400 transition-all">
                          CVV
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="submit-btn w-full mx-auto md:w-auto bg-gradient-to-r  bg-neutral-800 text-white py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <Icon
                        icon="eos-icons:loading"
                        className="w-5 h-5 mr-2 animate-spin"
                      />
                      PROCESSING PAYMENT...
                    </>
                  ) : (
                    "CONFIRM PAYMENT"
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1 summary-section">
              <div className="bg-neutral-800/50 border border-neutral-700/30 p-6 rounded-xl shadow-lg backdrop-blur-sm sticky top-16">
                <div className="flex items-center mb-6">
                  <Icon
                    icon="mdi:receipt-text-outline"
                    className="w-6 h-6 text-green-400 mr-2"
                  />
                  <h2 className="text-xl font-semibold text-white">
                    ORDER SUMMARY
                  </h2>
                </div>
                <div className="space-y-4">
                  {/* Cart Items */}
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b border-neutral-700/50 pb-3"
                    >
                      <div className="flex items-center">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-md object-cover mr-3"
                          />
                        )}
                        <div>
                          <p className="text-neutral-300">{item.name}</p>
                          <p className="text-xs text-neutral-200">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-neutral-100">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="border-t border-neutral-700 pt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-neutral-300">
                        TOTAL
                      </p>
                      <p className="text-xl font-bold text-white">
                        ${calculateTotal.toFixed(2)}
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
