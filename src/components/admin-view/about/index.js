"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "Tên ",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Kinh nghiệm học tập  ",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Hoạt độngđộng",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Dự án học tập ",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Các công cụ hỗ trợ ",
  },
];

export default function AdminAboutView({ formData, setFormData, handleSaveData }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Quản trị về thông tin Công cụ 
        </h2>projects
        <div className="space-y-6">
          <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
          />
          <button
            onClick={() => handleSaveData('about')}
            className="w-full bg-gradient-to-r from-green-400 to-teal-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-700 transition duration-300 transform hover:scale-105"
          >
            Thêm 
          </button>
        </div>
      </div>
    </div>
  );
}
