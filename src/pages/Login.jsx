import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="flex-1 bg-black flex items-start justify-center pt-20 px-8 md:px-16">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <h2 className="text-white text-2xl font-semibold">
            Login to your account
          </h2>
          <p className="text-gray-400">
            Enter your email below to login to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-white font-medium mb-1 flex justify-between">
                <span>Password</span>
                <span className="text-sm text-indigo-500 hover:underline cursor-pointer">
                  Forgot your password?
                </span>
              </label>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-12"
                required
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 mt-2 text-white font-semibold rounded-md bg-orange-500 hover:bg-orange-600 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-gray-400 text-center">
            Don't have an account?{" "}
            <span className="text-indigo-500 hover:underline cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 hidden md:block">
        <img
          src="/singer.jpg"
          alt="Singer performing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
