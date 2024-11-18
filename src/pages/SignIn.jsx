// src/pages/SignIn.jsx
import { useState } from 'react';
import { useAuth } from '../context/auth/AuthContext';

const SignIn = () => {
  const { login, isLoading } = useAuth();
  const [user, setUser] = useState({
    email: '',
    passwordHash: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.email || !user.passwordHash) {
      alert('Please enter both email and password');
      return;
    }
    await login(user);
  };

  const handleChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf6f3]">
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-full max-w-md mx-auto p-8 bg-[#faf5f0] shadow-lg rounded-lg">
        <div className="flex justify-center space-x-4 mb-6">
          <h2 className="text-2xl font-semibold text-center border-b-2 border-b-black pb-2">Sign in</h2>
          <span className="text-gray-500 font-semibold">|</span>
          <a href="/signup" className="text-2xl font-semibold text-gray-400 hover:text-black">Sign up</a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Please enter your email"
              className="w-full p-4 border border-gray-300 rounded-md bg-[#f7f7f7] focus:outline-none"
              value={user.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full p-4 border border-gray-300 rounded-md bg-[#f7f7f7] focus:outline-none"
              value={user.passwordHash}
              onChange={(e) => handleChange('passwordHash', e.target.value)}
            />
          </div>
          <p className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the
            <a href="#" className="text-blue-500 underline ml-1">Google Privacy Policy</a> and
            <a href="#" className="text-blue-500 underline ml-1">Terms of Service</a> apply.
          </p>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#a05c55] text-white rounded-md font-semibold hover:bg-[#7a403f]"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'SIGN IN'}
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <a href="/forgot-password" className="hover:text-red-600">Forgot your password?</a>
          <span>Don’t have an account? <a href="/signup" className="text-red-600 hover:text-red-800">Sign up</a></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
