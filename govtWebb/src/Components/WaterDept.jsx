import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const waterProjects = [
  {
    title: "Past Project: Delhi Water Pipeline Expansion",
    description: "Completed in 2019, covered 50km of the water pipeline across the city.",
    status: "Completed",
  },
  {
    title: "Ongoing Project: Mumbai Water Treatment Upgrade",
    description: "Currently upgrading the water treatment facilities. Estimated completion by 2025.",
    status: "Ongoing",
  },
  {
    title: "Future Project: Kolkata Water Supply Network",
    description: "Planned for 2026, aiming to extend the water network to suburban areas.",
    status: "Upcoming",
  },
];

const WaterDept = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-50">
    <div className=" sagar mt-500">
        <div className="bg-gray-100 min-h-screen mt-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 mt-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to the City Project Portal
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connecting Departments. Coordinating Projects. Building the Future.
          </p>
          <Link to="/departments" className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition">
            Explore Departments
          </Link>
        </div>
      </section>

      {/* Departments Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Departments We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Water Department */}
          <Link to="/water" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Water Department</h3>
              <p className="text-gray-600">Managing water supply and infrastructure projects across the city.</p>
            </div>
          </Link>

          {/* Gas Department */}
          <Link to="/gas" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Gas Department</h3>
              <p className="text-gray-600">Ensuring safe and efficient gas pipeline development and maintenance.</p>
            </div>
          </Link>

          {/* Electronics & Communication */}
          <Link to="/electronics" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Electronics & Communication</h3>
              <p className="text-gray-600">Supporting digital infrastructure and smart city initiatives.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ongoing & Upcoming Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Smart Water Metering Project</h3>
              <p className="text-gray-600">
                Implementing smart water meters across the city to monitor consumption and detect leaks.
              </p>
              <span className="block mt-4 text-sm text-gray-500">Ongoing - Completion in 2025</span>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-4">Pipeline Replacement Initiative</h3>
              <p className="text-gray-600">
                Replacing outdated gas pipelines to improve safety and efficiency.
              </p>
              <span className="block mt-4 text-sm text-gray-500">Upcoming - Starting in 2024</span>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-purple-800 mb-4">City-Wide 5G Infrastructure</h3>
              <p className="text-gray-600">
                Expanding 5G network across urban and suburban areas to enable smart city functions.
              </p>
              <span className="block mt-4 text-sm text-gray-500">Ongoing - Completion in 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Complaint?</h2>
          <p className="text-lg mb-8">
            Report illegal construction and contribute to safer, better-planned urban development.
          </p>
          <Link to="/complaint" className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition">
            File a Complaint
          </Link>
        </div>
      </section>
        </div>
       </div>
    <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Water Department</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {waterProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-700">{project.title}</h2>
            <p className="text-gray-700 my-2">{project.description}</p>
            <span
              className={`px-4 py-2 inline-block rounded-full text-white ${
                project.status === "Completed"
                  ? "bg-green-500"
                  : project.status === "Ongoing"
                  ? "bg-yellow-500"
                  : "bg-blue-500"
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>

      <div className="sagar-Footer">
      <Footer/>
      </div>
      
    </div>
  );
};

export default WaterDept;
