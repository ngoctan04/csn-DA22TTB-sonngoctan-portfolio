"use client";

import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const controls = [
  {
    name: "username",
    placeholder: "Enter your username",
    type: "text",
    label: "Tên đăng nhập",
    icon: <FaUserAlt className="text-gray-400" />,
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Mật khẩu",
    icon: <FaLock className="text-gray-400" />,
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleLogin();
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/hinh_nen_galaxy_27_3214905348.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-black/50 z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-2xl z-10"
      >
        <div className="w-full h-full p-8 bg-white/80 rounded-lg backdrop-blur-md shadow-lg">
          
          {/* Logo with animation */}
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex justify-center mb-6"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3LuK_pKZNOhrpKPzoauqu_KT4ppLD9g4IzJvgitmlY8Eo8RaNeoMyrIOqItybb-QHHY&usqp=CAU" // Replace with your logo URL
              alt="Logo"
              className="w-24 h-24 rounded-full"
            />
          </motion.div>

          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center mb-8 animate-pulse">
            Welcome Back
          </h2>
          <div className="space-y-6">
            {controls.map((control, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-medium mb-2">
                  {control.label}
                </label>
                <div className="relative flex items-center bg-gray-100/80 border border-gray-300 rounded-lg shadow-md focus-within:ring-2 focus-within:ring-purple-500 transition-all">
                  <div className="px-3">{control.icon}</div>
                  <input
                    type={
                      control.name === "password" && showPassword
                        ? "text"
                        : control.type
                    }
                    name={control.name}
                    placeholder={control.placeholder}
                    value={formData[control.name] || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [control.name]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
                  />
                  {control.name === "password" && (
                    <button
                      type="button"
                      className="absolute right-2 px-3 text-gray-400 hover:text-purple-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            disabled={isLoading}
            className={`w-full py-3 mt-8 text-lg font-bold text-white rounded-lg shadow-lg transition-all transform ${
              isLoading
                ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C6.48 0 0 6.48 0 14h4z"
                  ></path>
                </svg>
                <span>Đang xử lý...</span>
              </span>
            ) : (
              "Đăng nhập"
            )}
          </motion.button>
          <p className="mt-6 text-center text-sm text-gray-600">
            Quên mật khẩu?{" "}
            <a
              href="#"
              className="text-purple-500 underline hover:text-purple-700"
            >
              Lấy lại ngay
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
