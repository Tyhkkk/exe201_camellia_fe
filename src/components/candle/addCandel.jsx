// AddCandle.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddCandle = ({ onClose, onAdd }) => {
  const [newCandle, setNewCandle] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    categoryId: '1',
    createdAt: '',
    imgFile: null,
  });

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
      Object.entries(newCandle).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post('https://localhost:7065/api/Candle', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onAdd();
      onClose();
    } catch (error) {
      console.error('Error adding candle:', error);
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
            <option value="1">Scented</option>
            <option value="2">Unscented</option>
          </select>
          <input
            type="datetime-local"
            name="createdAt"
            value={newCandle.createdAt}
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
          <button onClick={handleAddCandle} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
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
