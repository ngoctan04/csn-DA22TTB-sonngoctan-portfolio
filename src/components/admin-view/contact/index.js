"use client";

export default function AdminContactView({ data }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Admin - Liên hệ 
        </h2>
        <div className="flex flex-col gap-5">
          {data && data.length
            ? data.map((item, index) => (
                <div
                  key={index}
                  className="p-5 border border-green-600 rounded-lg shadow-md mb-4 hover:scale-105 transition-transform"
                >
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-600">{item.email}</p>
                  <p className="text-gray-700">{item.message}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
