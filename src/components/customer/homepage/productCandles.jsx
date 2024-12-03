import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { AiFillDropboxCircle } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { CiRedo } from "react-icons/ci";
import apiClient from "../../../lib/apiService"; // Import axiosClient

const ProductCandles = () => {
  const [candles, setCandles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCandles();
  }, []);

  const fetchCandles = async () => {
    try {
      const response = await apiClient.get("/api/Candle");
      console.log("API Response:", response);
      const data = response.data;
  
      // Kiểm tra nếu `data` không phải là mảng
      if (!data || !Array.isArray(data)) {
        console.warn("API did not return a valid array");
        setCandles([]); // Gán giá trị mặc định
        return;
      }
  
      const formattedData = data.map((candle) => ({
        id: candle.candleId,
        name: candle.name,
        price: `${candle.price.toLocaleString()}đ`,
        img: candle.imgUrl || "https://via.placeholder.com/150",
      }));
      setCandles(formattedData);
    } catch (error) {
      console.error("Error fetching candles:", error);
    }
  };
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-[#fdfaf5] py-10">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center mb-10 text-[#6e3a3a]">Scented Candles</h2>

      {/* Candle Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {candles.map((candle) => (
          <div
            key={candle.id}
            onClick={() => handleProductClick(candle.id)}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            <img src={candle.img} alt={candle.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-medium mt-4 text-[#6e3a3a]">{candle.name}</h3>
            <p className="text-gray-500">{candle.price}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="px-6 py-2 border border-[#6e3a3a] text-[#6e3a3a] rounded-lg hover:bg-[#6e3a3a] hover:text-white transition duration-300"
        >
          View more products
        </a>
      </div>

      {/* The Origin Section */}
      <div className="mt-16 bg-white py-10 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#6e3a3a] mb-4">The Origin of Camellia</h2>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Amidst the hustle and bustle of life, Camellia stands as an elegant tea blossom, bringing you moments of relaxation and
          tranquility with its fresh, cool, and sophisticated scents. It’s not just about the warm, rich notes, CAMELLIA is also a
          captivating symphony, weaving profound stories about how each of us perceives nature, life, and humanity.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex justify-around py-10">
        {/* 24/7 Support */}
        <div className="text-center">
          <MdSupportAgent className="mx-auto text-4xl text-[#6e3a3a] mb-2" />
          <p className="text-lg font-semibold text-[#6e3a3a]">24/7 Support</p>
          <p className="text-gray-500">Support hotline: 1900 6574</p>
        </div>

        {/* Nationwide Delivery */}
        <div className="text-center">
          <AiFillDropboxCircle className="mx-auto text-4xl text-[#6e3a3a] mb-2" />
          <p className="text-lg font-semibold text-[#6e3a3a]">Nationwide Delivery</p>
          <p className="text-gray-500">Fast delivery time, within 2-4 business days</p>
        </div>

        {/* Diverse Payment Options */}
        <div className="text-center">
          <BsCreditCard2Front className="mx-auto text-4xl text-[#6e3a3a] mb-2" />
          <p className="text-lg font-semibold text-[#6e3a3a]">Diverse Payment Options</p>
          <p className="text-gray-500">COD, Momo, Banking, Zalopay</p>
        </div>

        {/* Easy Returns */}
        <div className="text-center">
          <CiRedo className="mx-auto text-4xl text-[#6e3a3a] mb-2" />
          <p className="text-lg font-semibold text-[#6e3a3a]">Easy Returns</p>
          <p className="text-gray-500">7 days manufacturer’s warranty</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCandles;
