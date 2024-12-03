import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import apiClient from "../../lib/apiService"; // Sử dụng axiosClient

const AddCandle = ({ onClose, onAdd }) => {
  const [newCandle, setNewCandle] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    categoryId: "",
    imgFile: null,
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch categories từ API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/api/Category");
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again.");
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandle((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewCandle((prev) => ({ ...prev, imgFile: e.target.files[0] }));
  };

  const handleAddCandle = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (
      !newCandle.name ||
      !newCandle.description ||
      !newCandle.price ||
      !newCandle.stockQuantity ||
      !newCandle.categoryId
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newCandle.name);
      formData.append("description", newCandle.description);
      formData.append("price", newCandle.price);
      formData.append("stockQuantity", newCandle.stockQuantity);
      formData.append("categoryId", newCandle.categoryId);
      formData.append("createdAt", ""); // Send empty string for createdAt
      formData.append("updatedAt", ""); // Send empty string for updatedAt
      if (newCandle.imgFile) {
        formData.append("imgFile", newCandle.imgFile);
      }

      // Gửi dữ liệu đến API
      await apiClient.post("/api/Candle/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Candle added successfully!");
      onAdd();
      setNewCandle({
        name: "",
        description: "",
        price: "",
        stockQuantity: "",
        categoryId: "",
        imgFile: null,
      }); // Reset form
      onClose();
    } catch (err) {
      console.error("Error adding candle:", err);
      alert("Failed to add candle. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">Add New Candle</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Candle Name"
            value={newCandle.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCandle.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newCandle.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={newCandle.stockQuantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="categoryId"
            value={newCandle.categoryId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="imgFile"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleAddCandle}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Candle
          </button>
        </div>
      </div>
    </div>
  );
};

AddCandle.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddCandle;
