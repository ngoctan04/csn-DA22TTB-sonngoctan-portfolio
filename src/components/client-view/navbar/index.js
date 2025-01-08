"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { useRouter } from "next/navigation"; // Để điều hướng đến trang Admin
import { FaUser } from "react-icons/fa"; // Biểu tượng người dùng

const menuItems = [
  {
    id: "home",
    label: "Trang chủ",
  },
  {
    id: "about",
    label: "Công cụ",
  },
  {
    id: "experience",
    label: "Blog",
  },
  {
    id: "project",
    label: "Dự án",
  },
  {
    id: "contact",
    label: "Liên hệ",
  },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {/* Thanh menu ngang */}
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>
          {/* Menu lớn */}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
              ${
                activeLink === item.id
                  ? "text-green-main animation-active shadow-green-main"
                  : "text-[#000] font-bold hover:text-green-main"
              }
              `}
              >
                {item.label}
              </LinkScroll>
            ))}
          </ul>
          {/* Mục đăng nhập */}
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center gap-4">
            <button
              onClick={() => router.push("/admin")}
              className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg text-xl shadow-lg hover:shadow-xl transition-all"
            >
              <FaUser className="text-2xl" /> Đăng nhập
            </button>
          </div>
        </nav>
      </header>

      {/* Menu nhỏ (mobile) */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
              ${
                activeLink === item.id
                  ? "text-green-main animation-active shadow-green-main"
                  : "text-[#000] font-bold hover:text-green-main"
              }
              `}
              >
                {item.label}
              </LinkScroll>
            ))}
            {/* Mục đăng nhập trên mobile */}
            <button
              onClick={() => router.push("/admin")}
              className="flex items-center gap-2 py-3 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg text-lg shadow-md hover:shadow-lg transition-all"
            >
              <FaUser className="text-xl" /> Đăng nhập
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
