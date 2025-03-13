import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext
import { toast } from "react-toastify"; // For notifications
import { Icon } from "@iconify/react"; // For icons

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="flex min-h-screen bg-neutral-900 border-b border-neutral-200">
      {/* Left Side: Image */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
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
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-100 focus:border-neutral-100 transition-all text-white"
                  required
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-100 focus:border-blue-500 transition-all text-white"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-900 text-white py-3 px-4 rounded-lg font-semibold  transition-all duration-300 focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Icon
                    icon="eos-icons:loading"
                    className="w-6 h-6 animate-spin"
                  />
                  <span className="ml-2">Logging in...</span>
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
