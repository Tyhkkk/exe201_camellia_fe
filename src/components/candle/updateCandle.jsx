// UpdateCandle.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiClient from '../../lib/apiService'; // Sử dụng apiClient

const UpdateCandle = ({ candle, onClose, onUpdate }) => {
  const [updatedCandle, setUpdatedCandle] = useState({ ...candle });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch category options from the API
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get('/api/Category');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories. Please try again.');
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCandle((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setUpdatedCandle((prev) => ({ ...prev, imgFile: e.target.files[0] }));
  };

  const handleUpdateCandle = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (
      !updatedCandle.name ||
      !updatedCandle.description ||
      !updatedCandle.price ||
      !updatedCandle.stockQuantity ||
      !updatedCandle.categoryId
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const formData = new FormData();

      // Append all fields explicitly
      formData.append('candleId', updatedCandle.candleId);
      formData.append('name', updatedCandle.name);
      formData.append('description', updatedCandle.description);
      formData.append('price', updatedCandle.price);
      formData.append('stockQuantity', updatedCandle.stockQuantity);
      formData.append('categoryId', updatedCandle.categoryId);
      formData.append('createAt', ''); // Send empty string for createAt
      formData.append('updateAt', ''); // Send empty string for updateAt

      // Append the image file only if it exists
      if (updatedCandle.imgFile) {
        formData.append('imgFile', updatedCandle.imgFile);
      }

      // Send the PUT request using apiClient
      await apiClient.put(`/api/Candle/update/${updatedCandle.candleId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Candle updated successfully!');
      onUpdate();
      onClose();
    } catch (err) {
      console.error('Error updating candle:', err.response?.data || err.message);
      alert('Failed to update candle. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">Update Candle</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Candle Name"
            value={updatedCandle.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={updatedCandle.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={updatedCandle.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={updatedCandle.stockQuantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="categoryId"
            value={updatedCandle.categoryId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
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
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            Cancel
          </button>
          <button onClick={handleUpdateCandle} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Update Candle
          </button>
        </div>
      </div>
    </div>
  );
};

UpdateCandle.propTypes = {
  candle: PropTypes.shape({
    candleId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stockQuantity: PropTypes.number.isRequired,
    categoryId: PropTypes.string.isRequired,
    imgFile: PropTypes.any,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateCandle;
