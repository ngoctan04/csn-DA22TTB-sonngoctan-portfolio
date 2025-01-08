import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Tiêu đề ",
  },
  {
    name: "summary",
    placeholder: "Enter Career summary",
    type: "text",
    label: "Giới thiệu ",
  },
];

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
  console.log(formData);
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Thông tin giới thiệu 
        </h2>
        <div className="space-y-6">
          <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
          />
          <button
            onClick={() => handleSaveData('home')}
            className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 transition duration-300 transform hover:scale-105"
          >
           Thêm 
          </button>
        </div>
      </div>
    </div>
  );
}
