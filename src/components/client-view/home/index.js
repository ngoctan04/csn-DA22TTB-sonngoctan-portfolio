"use client";  // Thêm dòng này vào đầu file

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/avarta1.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookF color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />,
    link: "https://www.facebook.com/profile.php?id=100040926652170&locale=vi_VN",
  },
  {
    id: "instagram",
    icon: <FaInstagram color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />,
    link: "https://www.instagram.com/ngtan_0804/",
  },
  {
    id: "github",
    icon: <FaGithub color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />,
    link: "https://github.com/ngoctan04/CSN-DA22TTB",
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading
                    .split(" ")
                    .map((item, index) => (
                      <span
                        key={index}
                        className={`${
                          index === 2 || index === 3
                            ? "text-green-main"
                            : "text-[#000]"
                        }`}
                      >
                        {item}{" "}
                      </span>
                    ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to ${item.id}`}
                  >
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>


            <a
              href="/cv-tan.pdf" // Đảm bảo file PDF được lưu trữ trong thư mục public
              download="CV_Tan"  // Tên file khi tải về
            >
              <button className="mt-6 py-3 px-6 border-[2px] bg-green-main text-[#fff] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none">
                Tải CV
              </button>
            </a>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-green-main"
            >
              <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="responsive"
                quality={100}
                height={300}
                width={300}
                className="absolute top-[-15px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
