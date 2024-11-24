import  { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  // Hàm xử lý tăng số lượng
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Hàm xử lý giảm số lượng
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Không giảm dưới 1
  };

  return (
    <div className="flex items-center gap-2">
      {/* Nút giảm */}
      <button
        onClick={handleDecrease}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        aria-label="Decrease quantity"
      >
        <CiCircleMinus size={24} />
      </button>

      {/* Hiển thị số lượng */}
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center border border-gray-300 rounded-lg text-lg bg-white"
      />

      {/* Nút tăng */}
      <button
        onClick={handleIncrease}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        aria-label="Increase quantity"
      >
        <CiCirclePlus size={24} />
      </button>
    </div>
  );
};

export default QuantityInput;
