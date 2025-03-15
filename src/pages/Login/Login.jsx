import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext
import { toast } from "react-toastify"; // For notifications
import { Icon } from "@iconify/react"; // For icons
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errors, setErrors] = useState({}); // State for validation errors
  const [passwordStrength, setPasswordStrength] = useState(0); // State for password strength

  // Validate username
  const validateUsername = (username) => {
    if (!username.trim()) {
      return "Username is required.";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters long.";
    }
    if (/\d/.test(username)) {
      return "Username should not contain numbers.";
    }
    return null;
  };

  // Validate password and calculate strength
  const validatePassword = (password) => {
    let strength = 0;

    if (password.length >= 8) strength += 1; // Minimum length
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[0-9]/.test(password)) strength += 1; // Number
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1; // Special character

    setPasswordStrength((strength / 5) * 100); // Convert to percentage

    if (!password.trim()) {
      return "Password is required.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (usernameError || passwordError) {
      setErrors({
        username: usernameError,
        password: passwordError,
      });
      return;
    }

    setIsLoading(true); // Start loading

    // Simulate login (replace with actual authentication logic)
    setTimeout(() => {
      const userData = { name: username }; // Example user data
      login(userData); // Call login function with user data
      setIsLoading(false); // Stop loading
      toast.success("Login successful!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1500); // Simulate a 1.5-second delay
  };

  return (
    <div className="flex min-h-screen bg-neutral-900 border-b border-neutral-200 login relative z-50">
      {/* Left Side: Image */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/91/16/9b/91169b15543600d72fad0dbf05d8b0d4.jpg')",
        }}
      >
        {/* Optional: Add overlay or text on the image */}
        <div className="h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Welcome Back
          </h1>
        </div>
      </div>

      {/* Right Side: Transparent Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 mt-16">
        <div className="w-full max-w-md bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transform transition-all duration-500 ">
          {/* Header */}
          <div className="text-center mb-8">
            <Icon
              icon="material-symbols-light:login"
              className="w-16 h-16 mx-auto text-white mb-4"
            />
            <h1 className="text-3xl font-bold text-white">Login</h1>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors({
                      ...errors,
                      username: validateUsername(e.target.value),
                    });
                  }}
                  className={`w-full px-4 py-2 bg-neutral-800 border ${
                    errors.username ? "border-red-500" : "border-neutral-700"
                  } rounded-lg focus:ring-2 focus:ring-neutral-100 focus:border-neutral-100 transition-all text-white`}
                  required
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: validatePassword(e.target.value),
                    });
                  }}
                  className={`w-full px-4 py-2 bg-neutral-800 border ${
                    errors.password ? "border-red-500" : "border-neutral-700"
                  } rounded-lg focus:ring-2 focus:ring-neutral-100 focus:border-blue-500 transition-all text-white`}
                  required
                />
                {/* Password Strength Progress Bar */}
                <div className="w-full bg-neutral-700 rounded-full h-1 mt-2 overflow-hidden">
                  <div
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: `${passwordStrength}%`,
                      backgroundColor:
                        passwordStrength < 40
                          ? "red"
                          : passwordStrength < 70
                          ? "orange"
                          : "green",
                    }}
                  ></div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-neutral-100 focus:ring-offset"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="ml-2">Logging in</span>
                  <Icon
                    icon="eos-icons:three-dots-loading"
                    className="w-5 h-5"
                  />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
