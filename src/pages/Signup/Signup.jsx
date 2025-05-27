import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const float1Ref = useRef(null);
  const float2Ref = useRef(null);

  useEffect(() => {
    // Card animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
    );

    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.8 }
    );

    // Floating elements animation
    gsap.to(float1Ref.current, {
      y: -20,
      x: 10,
      rotate: 5,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
    gsap.to(float2Ref.current, {
      y: 20,
      x: -10,
      rotate: -5,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  const validateUsername = (username) => {
    if (!username.trim()) return "Username is required.";
    if (username.length < 3)
      return "Username must be at least 3 characters long.";
    if (/\d/.test(username)) return "Username should not contain numbers.";
    return null;
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required.";
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Email is invalid.";
    return null;
  };

  const validatePassword = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    setPasswordStrength((strength / 5) * 100);

    if (!password.trim()) return "Password is required.";
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    if (!/[0-9]/.test(password))
      return "Password must contain at least one number.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return "Password must contain at least one special character.";
    return null;
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      setErrors({
        username: usernameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const userData = { name: username, email };
      login(userData);
      setIsLoading(false);
      toast.success("Sign up successful!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-100 relative z-[10002] ">
      {/* Floating Decorative Elements */}
      <div
        ref={float1Ref}
        className="absolute top-20 left-12 w-14 h-14 bg-neutral-200/30 rounded-full shadow-lg"
      />
      <div
        ref={float2Ref}
        className="absolute bottom-24 right-16 w-10 h-10 bg-neutral-300/30 rounded-full shadow-lg"
      />

      {/* Main Layout */}
      <div className="flex min-h-screen w-full">
        {/* Left: Image Section */}
        <div ref={imageRef} className="hidden lg:block w-1/2 relative h-screen">
          <div className="relative h-full shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/40 to-neutral-900/20 z-10" />
            <img
              src="https://i.pinimg.com/736x/91/16/9b/91169b15543600d72fad0dbf05d8b0d4.jpg"
              alt="Join Us"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white  text-center tracking-tight">
                Join Our Community
              </h1>
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="w-full lg:w-1/2 h-screen flex  justify-center ">
          <div
            ref={cardRef}
            className="w-full  bg-white/5 backdrop-blur-2xl shadow-xl px-8 border border-neutral-300/20"
          >
            {/* Header */}
            <div ref={titleRef} className="text-center mb-10">
              <Icon
                icon="material-symbols:person-add-outline"
                className="w-10 h-10 mx-auto text-neutral-500 mb-4 animate-pulse"
              />
              <h1 className="text-4xl font-bold text-neutral-800  tracking-tight">
                Sign Up
              </h1>
              <p className="text-neutral-500 text-lg mt-3">
                Create your account and start your journey
              </p>
            </div>

            {/* Sign Up Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Username
                </label>
                <div className="mt-2 relative">
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
                    className={`w-full px-5 py-3 bg-neutral-100/10 border ${
                      errors.username
                        ? "border-red-500"
                        : "border-neutral-200/30"
                    } rounded-xl focus:ring-2 focus:ring-neutral-500 outline-none focus:border-neutral-500 transition-all duration-300 text-neutral-800 placeholder-neutral-400 shadow-sm hover:shadow-md`}
                    required
                  />
                  {errors.username && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.username}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Email
                </label>
                <div className="mt-2 relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors({
                        ...errors,
                        email: validateEmail(e.target.value),
                      });
                    }}
                    className={`w-full px-5 py-3 bg-neutral-100/10 border ${
                      errors.email ? "border-red-500" : "border-neutral-200/30"
                    } rounded-xl focus:ring-2 focus:ring-neutral-500 outline-none focus:border-neutral-500 transition-all duration-300 text-neutral-800 placeholder-neutral-400 shadow-sm hover:shadow-md`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Password
                </label>
                <div className="mt-2 relative">
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
                    className={`w-full px-5 py-3 bg-neutral-100/10 border outline-none ${
                      errors.password
                        ? "border-red-500"
                        : "border-neutral-200/30"
                    } rounded-xl focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 text-neutral-800 placeholder-neutral-400 shadow-sm hover:shadow-md`}
                    required
                  />
                  <div className="w-full bg-neutral-200/20 rounded-full h-2 mt-3 overflow-hidden">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `\${passwordStrength}%\`,
                backgroundColor:
                  passwordStrength < 40
                    ? "#ef4444"
                    : passwordStrength < 70
                    ? "#f97316"
                    : "#10b981",`,
                      }}
                    ></div>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Confirm Password
                </label>
                <div className="mt-2 relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setErrors({
                        ...errors,
                        confirmPassword: validateConfirmPassword(
                          e.target.value
                        ),
                      });
                    }}
                    className={`w-full px-5 py-3 bg-neutral-100/10 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-neutral-200/30"
                    } rounded-xl focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 text-neutral-800 placeholder-neutral-400 shadow-sm hover:shadow-md`}
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div ref={buttonRef}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-neutral-600 to-neutral-900 text-white py-3 px-4 rounded-xl font-semibold hover:from-neutral-700 hover:to-neutral-950 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-100 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <span>Signing Up</span>
                      <Icon
                        icon="eos-icons:three-dots-loading"
                        className="w-6 h-6 animate-spin"
                      />
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-neutral-500 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-neutral-500 hover:underline font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
