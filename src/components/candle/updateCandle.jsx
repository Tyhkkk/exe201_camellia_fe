// UpdateCandle.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UpdateCandle = ({ candle, onClose, onUpdate }) => {
  const [updatedCandle, setUpdatedCandle] = useState({ ...candle });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCandle((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setUpdatedCandle((prev) => ({ ...prev, imgFile: e.target.files[0] }));
  };

  const handleUpdateCandle = async () => {
    try {
      const formData = new FormData();
      Object.entries(updatedCandle).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.put(`https://localhost:7065/api/Candle/update/${candle.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating candle:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">Update Candle</h3>
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
            <option value="1">Scented</option>
            <option value="2">Unscented</option>
          </select>
          <input
            type="datetime-local"
            name="createdAt"
            value={updatedCandle.createdAt}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
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
  candle: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateCandle;
