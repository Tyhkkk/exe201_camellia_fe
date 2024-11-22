import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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

  // Fetch categories từ API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://localhost:7065/api/Category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
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

      // Gửi dữ liệu đến URL đúng
      await axios.post("https://localhost:7065/api/Candle/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onAdd();
      onClose();
    } catch (error) {
      console.error("Error adding candle:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">Add New Candle</h3>
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
