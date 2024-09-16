import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Import icons
import videoSrc from '../components/video.mp4'; // Adjust the path as necessary
import backgroundImage from '../components/back.jpg'; // Adjust the path to your image
import logo from '../components/logo.png'; // Adjust the path to your logo image

const Dashboard = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div 
      className="min-h-screen flex bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col">
        {/* Toggle Bar for User Profile and Logout */}
        <div className="mb-6 flex justify-between items-center">
          <button
            className="bg-gray-700 text-white p-2 rounded flex items-center"
            onClick={toggleProfileMenu}
          >
            <FaBars className="mr-2" /> {/* Triple dash icon */}
            <span className="ml-2">Menu</span>
          </button>
        </div>
        {isProfileMenuOpen && (
          <div className="mt-2 space-y-2">
            <button
              className="bg-gray-600 text-white w-full p-2 rounded flex items-center"
              onClick={() => handleNavigation('/Profile')}
            >
              <FaUser className="mr-2" /> Profile
            </button>
            <button
              className="bg-gray-600 text-white w-full p-2 rounded flex items-center"
              onClick={() => handleNavigation('/Login')}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        )}
        <nav className="flex flex-col space-y-2 mt-4">
          <button
            onClick={() => handleNavigation('/English')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Vocabulary
          </button>
          <button
            onClick={() => handleNavigation('/SpeechLessons')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Speech
          </button>
          <button
            onClick={() => handleNavigation('/PronunciationLessons')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Pronunciation
          </button>
          <button
            onClick={() => handleNavigation('/Test')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Test
          </button>
          <button
            onClick={() => handleNavigation('/Reports')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Report
          </button>
          <button
            onClick={() => handleNavigation('/LearningPath')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Learning Path
          </button>
          <button
            onClick={() => handleNavigation('/GenAI')}
            className="bg-gray-700 text-white p-2 rounded"
          >
            GenAI
            </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
      <header className="flex items-center mb-8">
  <img src={logo} alt="App Logo" className="h-12 w-12 mr-4" /> {/* Logo */}
  <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white">Vyakaran</h1>
  </div>
</header>

        {/* Add your sections here */}
        {/* Example: Vocabulary Lessons Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              onClick={() => handleNavigation('/vocabulary-lessons')}
              className="bg-green-500 text-white p-2 rounded"
            >
              Home
            </button>
          </div>
          {/* Sample Video */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Watch Our Introduction Video</h3>
            <div className="bg-gray-200 p-4 rounded-lg">
              <video
                controls
                className="w-full max-w-4xl h-auto rounded-lg shadow-md"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Add other sections similarly */}
      </div>
    </div>
  );
};

export default Dashboard;
