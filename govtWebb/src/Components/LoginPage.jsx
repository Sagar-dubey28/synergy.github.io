import React from "react";

const LoginPage = () => {
  const departments = [
    {
      name: "Water Department",
      bgClass: "bg-blue-500",
      icon: "💧",
    },
    {
      name: "Gas Department",
      bgClass: "bg-green-500",
      icon: "🔥",
    },
    {
      name: "E&C Department",
      bgClass: "bg-yellow-500",
      icon: "📡",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-700">
        Government Departments Login
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className={`rounded-xl shadow-lg overflow-hidden ${dept.bgClass} text-white flex flex-col justify-center items-center p-8 transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="text-6xl mb-4">{dept.icon}</div>
            <h2 className="text-2xl font-semibold mb-6">{dept.name}</h2>
            <form className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                placeholder="Username"
                className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="py-2 px-4 rounded bg-black hover:bg-gray-800 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
