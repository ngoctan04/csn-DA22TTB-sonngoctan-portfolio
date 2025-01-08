"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectView from "@/components/admin-view/project";
import { addData, getData, login, updateData } from "@/services";
import { useEffect, useState } from "react";

const initialHomeFormData = {
  heading: "",
  summary: "",
};

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
  imageUrl: "",
};

const initialLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
  const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  const menuItems = [
    {
      id: "home",
      label: "Trang chủ",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "Công cụ",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Blog",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setExperienceViewFormData}
          data={allData?.experience}
        />
      ),
    },
    {
      id: "education",
      label: "Kinh nghiệm",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setEducationViewFormData}
          data={allData?.education}
        />
      ),
    },
    {
      id: "project",
      label: "Dự án",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setProjectViewFormData}
          data={allData?.project}
        />
      ),
    },
    {
      id: "contact",
      label: "Liên hệ",
      component: <AdminContactView data={allData && allData?.contact} />,
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogin() {
    const res = await login(loginFormData);

    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        handleLogin={handleLogin}
        setFormData={setLoginFormData}
      />
    );

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_81YtwrAzibyMbbutsSyNUrRjkzAoZWV-wnFsEQnrgBXFWftbIh_SIUbRQUkSLQ-pOn0&usqp=CAU')", // Đường dẫn tới hình nền galaxy
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Giữ hình nền cố định khi cuộn
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Lớp phủ màu đen với độ mờ */}
      <nav className="flex justify-center space-x-6 py-4" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="px-6 py-3 text-xl font-bold text-white bg-transparent border-2 border-transparent rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-500 focus:outline-none"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
          >
            <span className="tracking-wider">{item.label}</span>
          </button>
        ))}
        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="relative px-6 py-3 text-xl font-bold text-white bg-red-600 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-700 focus:outline-none"
        >
          <div className="absolute inset-0 border-4 border-red-600 rounded-lg z-0" />
          <span className="relative z-10">Đăng nhập</span>
        </button>
      </nav>
      <div className="p-10">
        {menuItems.map((item) =>
          item.id === currentSelectedTab ? (
            <div key={item.id}>{item.component}</div> // Thêm key vào phần tử con
          ) : null
        )}
      </div>
    </div>
  );
}
