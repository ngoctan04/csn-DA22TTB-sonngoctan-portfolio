"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";

const controls = [
  {
    name: "name",
    placeholder: "Tên của bạn",
    type: "text",
    label: "Tên",
    icon: <AiOutlineUser />,
  },
  {
    name: "email",
    placeholder: "Email của bạn",
    type: "email",
    label: "Email",
    icon: <AiOutlineMail />,
  },
  {
    name: "message",
    placeholder: "Nội dung tin nhắn",
    type: "text",
    label: "Nội dung",
    icon: <AiOutlineMessage />,
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    if (res && res.success) {
      setFormData(initialFormData);
      setShowSuccessMessage(true);
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  }, [showSuccessMessage]);

  const isValidForm = () => {
    return (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    );
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-400 via-rose-500 to-blue-500"
      id="contact"
    >
      {/* Hiệu ứng mờ nền */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md"></div>

      <div className="relative w-full max-w-3xl px-8 py-12 bg-white/80 rounded-3xl shadow-2xl border border-gray-200">
        <AnimationWrapper className="py-6 sm:py-16">
          <div className="flex flex-col justify-center items-center">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {["Liên", "hệ", "ngay"].map((word, index) => (
                <span
                  key={index}
                  className={`${
                    index === 1 ? "text-green-main" : "text-[#000]"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
          </div>
        </AnimationWrapper>

        <div className="mt-10">
          <div className="flex flex-wrap -m-2">
            {controls.map((control) => (
              <div
                key={control.name}
                className={`p-2 ${
                  control.name === "message" ? "w-full" : "w-full sm:w-1/2"
                }`}
              >
                <label className="block text-gray-800 font-medium mb-2">
                  {control.label}
                </label>
                <div className="relative">
                  {control.name === "message" ? (
                    <textarea
                      id={control.name}
                      name={control.name}
                      placeholder={control.placeholder}
                      value={formData[control.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [control.name]: e.target.value,
                        })
                      }
                      className="w-full p-3 pl-14 bg-white border border-gray-300 rounded-xl shadow-md focus:ring-4 focus:ring-blue-400 focus:outline-none resize-none text-gray-800"
                      rows={5}
                    />
                  ) : (
                    <input
                      id={control.name}
                      name={control.name}
                      type={control.type}
                      placeholder={control.placeholder}
                      value={formData[control.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [control.name]: e.target.value,
                        })
                      }
                      className="w-full p-3 pl-14 bg-white border border-gray-300 rounded-xl shadow-md focus:ring-4 focus:ring-blue-400 focus:outline-none text-gray-800"
                    />
                  )}
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-2xl">
                    {control.icon}
                  </span>
                </div>
              </div>
            ))}

            {showSuccessMessage && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg text-center animate-bounce">
                Tin nhắn của bạn đã được gửi thành công!
              </div>
            )}

            <div className="p-2 w-full text-center">
              <button
                disabled={!isValidForm()}
                onClick={handleSendMessage}
                className="py-4 px-12 bg-gradient-to-r from-blue-500 via-teal-500 to-rose-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50"
              >
                Gửi Tin Nhắn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
