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
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Admin Profile</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Username:</h3>
            <p className="text-gray-700">{user.username}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email:</h3>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Role:</h3>
            <p className="text-gray-700">
              {user.roleId === 1 ? 'Admin' : 'User'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Account Created At:</h3>
            <p className="text-gray-700">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
