import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../store/cartSlice'; // Ensure this path is correct

const QuantityInput = ({ candleId, initialQuantity, onChange }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity); // Sync with prop changes (in case initialQuantity changes)
  }, [initialQuantity]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);  // Pass the updated quantity back to the parent
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);  // Pass the updated quantity back to the parent
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
      >
        -
      </button>
      <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
