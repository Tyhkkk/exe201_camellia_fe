import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  // API URLs
  const apiUrl = "https://localhost:7065/api/User";
  const updateUrl = "https://localhost:7065/api/User/update/";
  const deleteUrl = "https://localhost:7065/api/User/delete-user/";

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${deleteUrl}${userId}`);
      setUsers(users.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Update user
  const updateUser = async (updatedUser) => {
    try {
      await axios.put(`${updateUrl}${updatedUser.userId}`, updatedUser);
      setUsers(
        users.map((user) =>
          user.userId === updatedUser.userId ? updatedUser : user
        )
      );
      setShowEditForm(false);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-8">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Users</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border-b">User ID</th>
            <th className="p-3 border-b">Username</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Role</th>
            <th className="p-3 border-b">Created At</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.userId}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 border-b">{user.userId}</td>
              <td className="p-3 border-b">{user.username}</td>
              <td className="p-3 border-b">{user.email}</td>
              <td className="p-3 border-b">
                {user.roleId === 1 ? "Admin" : "Customer"}
              </td>
              <td className="p-3 border-b">
                {new Date(user.createdAt).toLocaleString()}
              </td>
              <td className="p-3 border-b flex gap-2">
                <FaEdit
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => {
                    setSelectedUser(user);
                    setShowEditForm(true);
                  }}
                  size={18}
                />
                <FaTrash
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => deleteUser(user.userId)}
                  size={18}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {showEditForm && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUser({
                  userId: selectedUser.userId,
                  username: e.target.username.value,
                  email: e.target.email.value,
                  passwordHash: e.target.passwordHash.value,
                  roleId: parseInt(e.target.roleId.value),
                  createdAt: selectedUser.createdAt,
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-left font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  defaultValue={selectedUser.username}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={selectedUser.email}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-medium">Password</label>
                <input
                  type="password"
                  name="passwordHash"
                  defaultValue={selectedUser.passwordHash}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left font-medium">Role</label>
                <select
                  name="roleId"
                  defaultValue={selectedUser.roleId}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                >
                  <option value={1}>Admin</option>
                  <option value={2}>Customer</option>
                </select>
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUser;
