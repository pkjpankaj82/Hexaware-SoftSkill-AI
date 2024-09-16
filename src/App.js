import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import VocabularyLessons from './components/VocabularyLessons';
import SpeechLessons from './components/SpeechLessons';
import Test from './components/Test';
import LearniingPath from './components/LearningPath';
import PronunciationLessons from './components/PronunciationLessons';
import Reports from './components/Reports';
import English from './components/English';
import Profile from './components/Profile';
import Header from './components/common/header';
import Footer from './components/common/Footer';
import GenAI from './components/GenAI';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/vocabulary-lessons" element={<VocabularyLessons />} />
        <Route path="/SpeechLessons" element={<SpeechLessons />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/LearningPath" element={<LearniingPath />} />
        <Route path="/PronunciationLessons" element={<PronunciationLessons />} />
        <Route path="/vocab" element={<vocab />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/English" element={<English />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/GenAI" element={<GenAI />} />
        </Routes>
    </Router>
  );
}

export default App;
