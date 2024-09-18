import React, { useState, useEffect } from 'react';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import backgroundImage from '../components/Background.jpg'; // Adjust the path to your image

const LoginPage = () => {
  document.getElementById("message").style.display = "none";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const showAlert = (message) => {
    alert(message);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
      showAlert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      showAlert('Login failed: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      showAlert('Google sign-in successful!');
      navigate('/dashboard');
    } catch (error) {
      showAlert('Google sign-in failed: ' + error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      showAlert('Facebook sign-in successful!');
      navigate('/dashboard');
    } catch (error) {
      showAlert('Facebook sign-in failed: ' + error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      showAlert('Password reset email sent! Please check your inbox.');
      setIsResetMode(false);
    } catch (error) {
      showAlert('Password reset failed: ' + error.message);
    }
  };

  // Load saved credentials if "Remember Me" was checked previously
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isResetMode ? (
        <form onSubmit={handlePasswordReset} className="p-8 bg-white rounded-lg shadow-lg w-full max-w-sm border border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Reset Password</h2>
          <input
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            placeholder="Enter your email"
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition">Send Password Reset Email</button>
          <button
            type="button"
            onClick={() => setIsResetMode(false)}
            className="bg-gray-500 text-white p-3 rounded-lg mt-4 w-full hover:bg-gray-600 transition"
          >
            Back to Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="p-8 bg-white rounded-lg shadow-lg w-full max-w-sm border border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition">Login</button>
          <div className="flex flex-col mt-4">
            <button type="button" onClick={handleGoogleSignIn} className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg flex items-center justify-center w-full hover:from-red-600 hover:to-red-700 transition">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
            <button type="button" onClick={handleFacebookSignIn} className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-3 rounded-lg flex items-center justify-center mt-2 w-full hover:from-blue-800 hover:to-blue-900 transition">
              <FaFacebookF className="mr-2" /> Login with Facebook
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsResetMode(true)}
            className="text-blue-500 mt-4 hover:underline"
          >
            Forgot Password?
          </button>
          <p className="text-gray-700 mt-4">
            Don't have an account? 
            <button 
              onClick={() => navigate('/signup')} 
              className="text-blue-500 hover:underline ml-1"
            >
              Sign Up
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
