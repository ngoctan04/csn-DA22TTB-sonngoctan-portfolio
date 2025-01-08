"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Tiêu đề ",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Năm    ",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Kinh nghiệm ",
  },
];

export default function AdminEducationView({ handleSaveData, formData, setFormData, data }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
         Chia sẻ kinh nghiệm 
        </h2>
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 border p-4 border-green-600 rounded-lg shadow-md mb-4">
                  <p>{item.degree}</p>
                  <p>{item.college}</p>
                  <p>{item.year}</p>
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
          onClick={() => handleSaveData('education')}
          className="mt-6 w-full bg-gradient-to-r from-green-400 to-teal-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-700 transition duration-300 transform hover:scale-105"
        >
         Thêm 
        </button>
      </div>
    </div>
  );
}
