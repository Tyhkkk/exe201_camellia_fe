// import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { AiFillDropboxCircle } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { CiRedo } from "react-icons/ci";

const ProductCandles = () => {
  const candles = [
    { id: 1, name: "Citrus Ginger", price: "149.000đ", img: "/src/assets/p1.png" },
    { id: 2, name: "Soft Coffee", price: "149.000đ", img: "/src/assets/p2.png" },
    { id: 3, name: "On The Cloud", price: "149.000đ", img: "/src/assets/p3.png" },
    { id: 4, name: "Morning Breeze", price: "149.000đ", img: "/src/assets/p4.png" },
    { id: 5, name: "Amber Glow", price: "149.000đ", img: "/src/assets/p5.png" },
    { id: 6, name: "Strawberry Mint Delight", price: "149.000đ", img: "/src/assets/p6.png" },
    { id: 7, name: "Paradise Flower", price: "249.000đ", img: "/src/assets/o1.png" },
    { id: 8, name: "Tropical Forest", price: "249.000đ", img: "/src/assets/o2.png" },
    { id: 9, name: "Peach Sweet", price: "249.000đ", img: "/src/assets/o3.png" },
    { id: 10, name: "The Magnificent Garden", price: "249.000đ", img: "/src/assets/o4.png" },
    { id: 11, name: "The Story Of The Rose", price: "249.000đ", img: "/src/assets/o5.png" },
    { id: 12, name: "Muse Jasmine", price: "249.000đ", img: "/src/assets/o6.png" },
  ];

  return (
    <div className="bg-[#fdfaf5] py-10">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center mb-10 text-[#6e3a3a]">Scented Candles</h2>

      {/* Candle Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {candles.map((candle) => (
          <div key={candle.id} className="bg-white shadow-lg rounded-lg p-4">
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
        <p className="text-gray-500 max-w-3xl mx-auto truncate-2-lines">
          Amidst the hustle and bustle of life, Camellia stands as an elegant tea blossom, bringing you moments of relaxation and
          tranquility with its fresh, cool, and sophisticated scents. It`s not just about the warm, rich notes, CAMELLIA is also a
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
          <p className="text-gray-500">7 days manufacturer`s warranty</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCandles;
