import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8  mt-6" >
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* Government Website Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">City Infrastructure Portal</h2>
          <p className="mt-4 text-gray-400">
            A unified platform connecting the city’s various departments for sharing information about upcoming, ongoing, and past infrastructure projects. The platform helps in reducing road damage, ensuring better coordination, and providing pipeline data to make our cities smarter and safer.
          </p>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/water" className="text-gray-400 hover:text-gray-100">
                Water Department Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="/gas" className="text-gray-400 hover:text-gray-100">
                Gas Department Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="/electronics" className="text-gray-400 hover:text-gray-100">
                Electronics & Communication Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="/map" className="text-gray-400 hover:text-gray-100">
                View Construction Map
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">City Infrastructure Department</p>
          <p className="text-gray-400">Government Office, City HQ</p>
          <p className="text-gray-400">Phone: +91 1234 567890</p>
          <p className="text-gray-400">Email: info@citygov.in</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56v14.88c0 1.51-1.23 2.76-2.75 2.76H2.75C1.23 22.2 0 20.95 0 19.44V4.56C0 3.05 1.23 1.8 2.75 1.8h18.5C22.77 1.8 24 3.05 24 4.56zM9.29 18.4h3.42v-4.4H9.29v4.4zm1.7-5.34c1.1 0 1.99-.89 1.99-1.99 0-1.1-.89-1.99-1.99-1.99S9 10.96 9 12.06c0 1.1.89 1.99 1.99 1.99zm6.91 5.34h3.42v-2.36c0-1.4-.57-2.48-1.99-2.48-1.09 0-1.77.74-2.08 1.41v-.03h-.02v-1.2h-3.41c.05.79 0 8.6 0 8.6h3.42v-4.44c0-.24.02-.49.09-.72.24-.66.79-1.12 1.46-1.12 1.03 0 1.44.77 1.44 1.89v4.39h.02z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 4.636c-.88.39-1.83.654-2.826.774a4.92 4.92 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.197A4.924 4.924 0 0 0 16.884 3c-2.737 0-4.95 2.21-4.95 4.933 0 .386.04.763.127 1.126A14.005 14.005 0 0 1 1.667 3.16a4.913 4.913 0 0 0-.67 2.482c0 1.708.875 3.22 2.209 4.102a4.915 4.915 0 0 1-2.243-.618v.063c0 2.387 1.7 4.376 3.955 4.83a4.943 4.943 0 0 1-2.236.084c.63 1.96 2.45 3.392 4.606 3.432A9.893 9.893 0 0 1 0 19.544a14.018 14.018 0 0 0 7.608 2.224c9.134 0 14.134-7.535 14.134-14.07 0-.215 0-.43-.015-.645a10.044 10.044 0 0 0 2.467-2.533z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} City Infrastructure Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
