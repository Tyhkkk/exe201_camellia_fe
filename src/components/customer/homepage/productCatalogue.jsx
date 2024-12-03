import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../lib/apiService"; // Sử dụng apiClient để gọi API

const ProductCatalogue = () => {
  const navigate = useNavigate();

  // State để lưu dữ liệu từ API
  const [fragranceData, setFragranceData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data từ API
    const fetchCandleData = async () => {
      try {
        const response = await apiClient.get("/api/Candle");
        setFragranceData(response.data); // Lưu dữ liệu từ API
      } catch (error) {
        console.error("Failed to fetch candle data:", error);
      }
    };

    fetchCandleData();
  }, []);

  // Xử lý khi bấm nút chuyển sản phẩm
  const handleNext = () => {
    if (currentIndex < fragranceData.length - 6) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      {/* Product Catalogue Section */}
      <div className="w-screen py-10 bg-gray-100 text-[#7b3d35]">
        <h2 className="text-4xl font-bold text-center mb-8">Product Catalogue</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="/products/scented-candles"
            className="text-center hover:scale-105 transition-transform"
          >
            <img
              src="/src/assets/6.png"
              alt="Scented Candles"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <p className="text-xl font-semibold">Scented Candles</p>
          </a>
          <a
            href="/products/essential-oils"
            className="text-center hover:scale-105 transition-transform"
          >
            <img
              src="/src/assets/7.png"
              alt="Essential Oils"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <p className="text-xl font-semibold">Essential Oils</p>
          </a>
          <a
            href="/products/gift-set"
            className="text-center hover:scale-105 transition-transform"
          >
            <img
              src="/src/assets/8.png"
              alt="Gift Set"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <p className="text-xl font-semibold">Gift Set</p>
          </a>
          <a
            href="/products/candle-accessories"
            className="text-center hover:scale-105 transition-transform"
          >
            <img
              src="/src/assets/9.png"
              alt="Candle Accessories"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <p className="text-xl font-semibold">Candle Accessories</p>
          </a>
        </div>
      </div>

      {/* The Most Beloved Fragrance Section */}
      <div className="container mx-auto py-10 text-[#7b3d35]">
        <h2 className="text-4xl font-bold text-center mb-8">
          The Most Beloved Fragrance
        </h2>
        <div className="relative">
          {/* Button chuyển sản phẩm */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded-full shadow-md"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ❮
          </button>
          <div className="flex space-x-6 overflow-hidden">
            {fragranceData
              .slice(currentIndex, currentIndex + 6) // Hiển thị 6 sản phẩm
              .map((item) => (
                <div
                  key={item.candleId}
                  className="w-60 p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => navigate(`/product/${item.candleId}`)}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold text-center">{item.name}</h3>
                  <p className="text-gray-600 text-center">
                    {`${item.price.toLocaleString("vi-VN")}đ`}
                  </p>
                </div>
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded-full shadow-md"
            onClick={handleNext}
            disabled={currentIndex >= fragranceData.length - 6}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
