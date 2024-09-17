import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapSection from "./Components/MapSection";

import Chatbot from "./Components/Chatbot";
import WaterDept from './Components/WaterDept';
import GasDept from './Components/GasDept';
import LoginPage from './Components/LoginPage';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WaterDept/>} />
        <Route path="/gas" element={<GasDept/>} />
        <Route path="/electronics" element={<div>Electronics Dept Content</div>} />
        <Route path="/projects" element={<MapSection />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/chatbot" element={<div className="min-h-screen bg-gray-200 flex items-center justify-center">
          
      <Chatbot />
    </div>} />
    
      </Routes>
    </Router>
  );
}

export default App;
