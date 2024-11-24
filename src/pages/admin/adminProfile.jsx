import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId'); // Get userId from localStorage

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://localhost:7065/api/User`);
      const userData = response.data.find((u) => u.userId === parseInt(userId)); // Match userId
      if (userData) {
        setUser(userData);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  if (!user) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen items-center justify-center">
      <div className="bg-white shadow-lg rounded-none max-w-full p-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">Admin Profile</h2>
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-gray-800">{user.username}</h3>
            <p className="text-gray-500">
              {user.roleId === 1 ? 'Admin' : 'User'}
            </p>
          </div>
        </div>
        <div className="border-t pt-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Email</h4>
              <p className="text-lg font-semibold text-gray-800">{user.email}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Account Created</h4>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => alert('Edit functionality coming soon!')}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
