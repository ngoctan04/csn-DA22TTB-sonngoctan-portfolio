"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Tên dự án ",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Công cụ sử dụng ",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: " Sản phẩm ",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "Github",
  },
  
];

export default function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        Các dự án học tập 
        </h2>
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 border p-4 border-green-600 rounded-lg shadow-md mb-4">
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
            
                 {item.imageUrl && (
                    <div className="mt-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    </div>
                    
                  )}
                 
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData('project')}
          className="mt-6 w-full bg-gradient-to-r from-green-400 to-teal-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-700 transition duration-300 transform hover:scale-105"
        >
         Thêm 
        </button>
      </div>
    </div>
  );
}
