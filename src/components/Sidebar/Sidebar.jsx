import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import logoWhite from "../../assets/picture/logo_white.png";

const Sidebar = () => {
  const { isToggled, toggleSidebar } = useContext(AppContext);
  const { user, logout } = useContext(AuthContext);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State for lazy logout
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  // Handle click outside dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsProfileDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lazy logout with delay
  const handleLogout = () => {
    setIsLoggingOut(true); // Start lazy logout
    setTimeout(() => {
      logout(); // Perform logout after delay
      setIsProfileDropdownOpen(false); // Close dropdown
      setIsLoggingOut(false); // Reset lazy logout state
      navigate("/login"); // Redirect to login page
    }, 1500); // 1.5-second delay
  };

  return (
    <>
      {/* Overlay */}
      {isToggled && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black bg-opacity-60 backdrop-blur-2xl shadow-2xl
         transition-transform duration-300 z-[999] ${
           isToggled ? "translate-x-0" : "-translate-x-full"
         }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 bg-opacity-60 hover:bg-opacity-80 transition-colors duration-200"
        >
          <Icon icon="material-symbols:close" className="w-6 h-6 text-white" />
        </button>

        {/* Sidebar Header */}
        <Link
          to="/"
          className="text-2xl text-white pl-5 font-bold  flex items-center"
        >
          <div className="logo">FUTSHOP</div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            to="/"
            className="flex items-center p-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
          >
            <Icon icon="mdi:home-outline" className="w-6 h-6 text-white" />
            <span className="ml-3 text-white font-medium">Home</span>
          </Link>
          <Link
            to="/shop"
            className="flex items-center p-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
          >
            <Icon icon="mdi:store-outline" className="w-6 h-6 text-white" />
            <span className="ml-3 text-white font-medium">Shop</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center p-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
          >
            <Icon icon="mdi:cart-outline" className="w-6 h-6 text-white" />
            <span className="ml-3 text-white font-medium">Cart</span>
          </Link>
          <Link
            to="/wishlist"
            className="flex items-center p-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
          >
            <Icon icon="mdi:heart-outline" className="w-6 h-6 text-white" />
            <span className="ml-3 text-white font-medium">Wishlist</span>
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="w-full flex items-center p-3 rounded-lg hover:bg-neutral-900 transition-colors duration-200"
            >
              <Icon icon="mdi:account-outline" className="w-6 h-6 text-white" />
              <span className="ml-3 text-white font-medium">Profile</span>
            </button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="ml-12 mt-2 w-48 bg-neutral-800 rounded-lg shadow-lg z-50 overflow-hidden">
                {user ? (
                  <>
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-neutral-700">
                      <div className="flex items-center space-x-3">
                        <Icon
                          icon="mdi:account-circle-outline"
                          className="w-6 h-6 text-white"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {user.name}
                          </p>
                          <p className="text-xs text-  neutral-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-white hover:bg-neutral-700 transition-colors duration-200"
                      disabled={isLoggingOut} // Disable button while logging out
                    >
                      {isLoggingOut ? (
                        <div className="flex items-center space-x-3">
                          <span>Logging out</span>
                          <Icon
                            icon="eos-icons:three-dots-loading"
                            className="w-5 h-5 "
                          />
                        </div>
                      ) : (
                        <>
                          <Icon
                            icon="mdi:logout"
                            className="w-5 h-5 text-white"
                          />
                          <span>Logout</span>
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-white hover:bg-neutral-700 transition-colors duration-200"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    <Icon icon="mdi:login" className="w-5 h-5 text-white" />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-center text-sm text-white">
            &copy;{new Date().getFullYear()} FUTSHOP. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
