import { useEffect, useState } from "react";
import apiClient from "../../lib/apiService"; // Sử dụng apiClient
import { FaPlus, FaTrash } from "react-icons/fa";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories từ API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get("/api/Category");
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories. Please try again.");
    }
  };

  const addCategory = async () => {
    if (!newCategoryName.trim()) {
      alert("Please enter a valid category name.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Name", newCategoryName);

      const response = await apiClient.post("/api/Category/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Thêm category mới vào danh sách
      setCategories((prev) => [...prev, response.data]);
      setNewCategoryName("");
      setShowAddModal(false);
    } catch (err) {
      console.error("Error adding category:", err.response?.data || err.message);
      alert(`Failed to add category: ${err.response?.data?.message || err.message}`);
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await apiClient.delete(`/api/Category/delete-cate/${id}`);

      // Xóa category khỏi danh sách hiện tại
      setCategories((prev) => prev.filter((category) => category.categoryId !== id));
    } catch (err) {
      console.error("Error deleting category:", err);
      alert(`Failed to delete category: ${err.response?.data?.message || err.message}`);
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

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No categories available.
              </td>
            </tr>
          ) : (
            categories.map((category) => (
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
            ))
          )}
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
