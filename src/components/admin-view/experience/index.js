"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Bài viết 1 ",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Bài viết 2 ",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Bài viết 3 ",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Bài viết 4 ",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Tổng kết ",
  },
];

export default function AdminExperienceView({
  formData,
  handleSaveData,
  setFormData,
  data,
}) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        Bài viết - Blogs 
        </h2>
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 border p-4 border-green-600 rounded-lg shadow-md mb-4">
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobprofile}</p>
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
          onClick={() => handleSaveData("experience")}
          className="mt-6 w-full bg-gradient-to-r from-green-400 to-teal-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-700 transition duration-300 transform hover:scale-105"
        >
        Thêm 
        </button>
      </div>
    </div>
  );
}
