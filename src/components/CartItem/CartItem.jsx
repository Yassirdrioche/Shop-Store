import React from "react";
import { Icon } from "@iconify/react"; // Import Iconify for icons

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  // Handle quantity increase
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  // Handle quantity decrease
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4 flex justify-between items-center gap-2 flex-wrap">
      <img src={item.image} className="h-24 w-24" alt="" />
      {/* Product Name */}
      <h3 className="text-xl font-semibold text-gray-900 ">{item.name}</h3>

      {/* Price */}
      <p className="text-lg text-gray-700 ">${item.price}</p>

      {/* Quantity Update Section */}
      <div className="flex items-center justify-between  gap-4">
        <p className="text-gray-600">Quantity: </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="p-1 text-white bg-black transition-colors duration-200"
          >
            <Icon icon="mdi:minus" className="w-5 h-5 " />
          </button>
          <span className="text-lg font-semibold text-gray-900">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="p-1 text-white bg-black transition-colors duration-200"
          >
            <Icon icon="mdi:plus" className="w-5 h-5 " />
          </button>
        </div>
      </div>

      {/* Total Price for This Item */}
      <p className="text-lg font-semibold text-gray-900 ">
        Total: ${(item.price * item.quantity).toFixed(2)}
      </p>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className=" flex items-center justify-center  bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition-colors duration-200"
      >
        <Icon icon="mdi:delete-outline" className="w-5 h-5" />
        <span></span>
      </button>
    </div>
  );
};

export default CartItem;
