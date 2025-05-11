import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Add custom CSS for the cursor
import logoBlack from "../../assets/picture/logo.png";
import logoWhite from "../../assets/picture/logo_white.png";

const Header = () => {
  const { cart, toggleSidebar, isToggled, isFilterSideBarOpen, wishlist } =
    useContext(AppContext); // Access cart state
  const { user, logout } = useContext(AuthContext);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State for lazy logout
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Handle click outside dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const isInsideHeader =
          e.clientX >= headerRect.left &&
          e.clientX <= headerRect.right &&
          e.clientY >= headerRect.top &&
          e.clientY <= headerRect.bottom;

        setIsCursorVisible(isInsideHeader);

        if (isInsideHeader) {
          setCursorPosition({
            x: e.clientX - headerRect.left,
            y: e.clientY - headerRect.top,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Lazy logout with delay
  const handleLogout = () => {
    setIsLoggingOut(true); // Start lazy logout
    setTimeout(() => {
      logout(); // Perform logout after delay
      setIsDropdownOpen(false); // Close dropdown
      setIsLoggingOut(false); // Reset lazy logout state
      navigate("/login");
    }, 1500); // 1.5-second delay
  };

  return (
    <>
      <section className="container mx-auto flex justify-center">
        <header
          className={`fixed md:w-[70%] w-[90%] z-[9999] top-3 rounded-l-full rounded-r-full transition-all duration-300  px-4 ${
            isScrolled
              ? "shadow-lg bg-black bg-opacity-20 text-white backdrop-blur-lg"
              : "bg-neutral-200 "
          }
          ${
            isToggled || isFilterSideBarOpen
              ? " translate-x-[200%]"
              : "translate-x-0"
          }`}
          ref={headerRef}
        >
          {/* Custom Cursor */}
          {isCursorVisible && (
            <div
              className="custom-cursor"
              style={{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              }}
            ></div>
          )}

          {/* Header Content */}
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold  flex items-center">
              <div className="logo">Shopeino</div>
            </Link>

            {/* Navigation Links */}
            <nav className="md:flex hidden gap-10 text-lg font-semibold ">
              <Link to="/" className=" hover:text-zinc-600 flex items-center ">
                Home
              </Link>
              <Link
                to="/shop"
                className=" hover:text-zinc-600 flex items-center "
              >
                Shop
              </Link>
              <Link
                to="/cart"
                className=" hover:text-zinc-600 flex items-center  relative"
              >
                Cart
                {cart.length > 0 && (
                  <span className=" bg-neutral-700 text-white text-xs rounded-full  p-0.5 w-4 flex justify-center items-center h-4 absolute -top-3 left-[0.5rem] ">
                    {cart.length}
                  </span>
                )}
              </Link>
              <Link
                to="/wishlist"
                className=" hover:text-zinc-600 flex items-center  relative"
              >
                Wishlist
                {wishlist.length > 0 && (
                  <span className=" bg-neutral-700 text-white text-xs rounded-full  p-0.5 w-4 flex justify-center items-center h-4 absolute -top-3 left-[0.5rem] ">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </nav>

            {/* Profile Icon with Dropdown */}
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center p-2 focus:outline-none rounded-full ${
                  isScrolled
                    ? "bg-neutral-200 text-neutral-950 "
                    : " bg-neutral-950 text-white"
                }`}
              >
                <Icon
                  icon="ep:user"
                  className={`w-7 h-7 ${
                    isScrolled ? "  " : ""
                  } hover:text-zinc-600 `}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 overflow-hidden transform  ease-in-out">
                  {user ? (
                    <>
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <Icon
                            icon="ep:user"
                            className="w-6 h-6 text-neutral-700"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-neutral-700 hover:bg-neutral-300 transition-all duration-200"
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
                              className="w-5 h-5 text-neural-700"
                            />
                            <span>Logout</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Icon
                        icon="mdi:login"
                        className="w-5 h-5 text-gray-700"
                      />
                      <span>Login</span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleSidebar} className="text-lg md:hidden">
              <Icon
                icon="material-symbols:menu"
                className={`w-8 h-8 ${isScrolled ? "text-white" : ""}`}
              />
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
