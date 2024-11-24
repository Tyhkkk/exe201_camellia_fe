import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash } from 'react-icons/fa';

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Fetch categories from API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://localhost:7065/api/Category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addCategory = async () => {
    if (!newCategoryName.trim()) {
      alert('Please enter a category name.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('Name', newCategoryName);

      await axios.post('https://localhost:7065/api/Category/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Refresh categories list
      fetchCategories();
      setNewCategoryName('');
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
      alert(`Failed to add category: ${error.response?.data?.message || error.message}`);
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await axios.delete(`https://localhost:7065/api/Category/delete-cate/${id}`);
      setCategories(categories.filter((category) => category.categoryId !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
      alert(`Failed to delete category: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Category List</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FaPlus className="mr-2" /> Add New Category
        </button>
      </div>

      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.categoryId}>
              <td className="border p-2">{category.categoryId}</td>
              <td className="border p-2">{category.name}</td>
              <td className="border p-2">
                <div className="flex justify-center space-x-4">
                  <FaTrash
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => deleteCategory(category.categoryId)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Category</h3>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border w-full px-4 py-2 rounded-lg mb-4"
              placeholder="Enter category name"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={addCategory}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategory;
