import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cart, toggleSidebar, isToggled, isFilterSideBarOpen, wishlist } =
    useContext(AppContext);
  const { user, logout } = useContext(AuthContext);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  // Memoize click outside handler
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  // Memoize mouse move handler
  const handleMouseMove = useCallback((e) => {
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
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Memoize logout function
  const handleLogout = useCallback(() => {
    setIsLoggingOut(true);
    setTimeout(() => {
      logout();
      setIsDropdownOpen(false);
      setIsLoggingOut(false);
      navigate("/login");
    }, 1500);
  }, [logout, navigate]);

  // Memoize header classes to avoid recalculating on every render
  const headerClasses = useMemo(() => {
    const baseClasses = [
      "fixed md:w-[80%] w-[90%] z-[9999] top-3 rounded-l-full rounded-r-full",
      "transition-all duration-300 px-4",
      isToggled || isFilterSideBarOpen ? "translate-x-[200%]" : "translate-x-0",
    ];

    if (isScrolled) {
      baseClasses.push(
        "shadow-lg bg-black bg-opacity-20 text-white backdrop-blur-lg"
      );
    } else {
      baseClasses.push("bg-neutral-100");
    }

    return baseClasses.join(" ");
  }, [isScrolled, isToggled, isFilterSideBarOpen]);

  // Memoize profile button classes
  const profileButtonClasses = useMemo(
    () =>
      `flex items-center p-2 focus:outline-none rounded-full ${
        isScrolled
          ? "bg-neutral-200 text-neutral-950"
          : "bg-neutral-950 text-white"
      }`,
    [isScrolled]
  );

  // Memoize navigation links to avoid recreating them on every render
  const navLinks = useMemo(
    () => [
      { to: "/", text: "Home" },
      { to: "/shop", text: "Shop" },
      {
        to: "/cart",
        text: "Cart",
        badge: cart.length > 0 ? cart.length : null,
      },
      {
        to: "/wishlist",
        text: "Wishlist",
        badge: wishlist.length > 0 ? wishlist.length : null,
      },
    ],
    [cart.length, wishlist.length]
  );

  return (
    <section className="container mx-auto flex justify-center">
      <header className={headerClasses} ref={headerRef}>
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
          <Link to="/" className="text-2xl font-bold flex items-center">
            <div className="logo">FUTUSHOP</div>
          </Link>

          {/* Navigation Links */}
          <nav className="md:flex hidden gap-10 text-lg font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-zinc-600 flex items-center relative"
              >
                {link.text}
                {link.badge && (
                  <span className="bg-neutral-700 text-white text-xs rounded-full p-0.5 w-4 flex justify-center items-center h-4 absolute -top-3 left-[0.5rem]">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Profile Icon with Dropdown */}
          <div className="relative hidden md:block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={profileButtonClasses}
            >
              <Icon icon="ep:user" className="w-7 h-7 hover:text-zinc-600" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 overflow-hidden transform ease-in-out">
                {user ? (
                  <>
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-neutral-200">
                      <div className="flex items-center space-x-3">
                        <Icon
                          icon="ep:user"
                          className="w-6 h-6 text-neutral-700"
                        />
                        <div>
                          <p className="text-sm font-medium text-neutral-700">
                            {user.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-neutral-700 hover:bg-neutral-300 transition-all duration-200"
                      disabled={isLoggingOut}
                    >
                      {isLoggingOut ? (
                        <div className="flex items-center space-x-3">
                          <span>Logging out</span>
                          <Icon
                            icon="eos-icons:three-dots-loading"
                            className="w-5 h-5"
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
                    className="w-full px-4 py-3 flex items-center space-x-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-all duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Icon
                      icon="mdi:login"
                      className="w-5 h-5 text-neutral-700"
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
  );
};

export default Header;
