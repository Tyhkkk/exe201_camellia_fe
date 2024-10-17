// import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandleAccessories = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Citrus Ginger", price: "149.000₫", image: "/src/assets/p1.png" },
    { id: 2, name: "Strawberry Mint Delight", price: "149.000₫", image: "/src/assets/p2.png" },
    { id: 3, name: "Soft Coffee", price: "149.000₫", image: "/src/assets/p3.png" },
    { id: 4, name: "On The Cloud", price: "149.000₫", image: "/src/assets/p4.png" },
    { id: 5, name: "Morning Breeze", price: "149.000₫", image: "/src/assets/p5.png" },
    { id: 6, name: "Amber Glow", price: "149.000₫", image: "/src/assets/p6.png" }
  ];

  return (
    <div className="font-jomolhari text-[#333]">
      {/* Breadcrumb */}
      <div className="border-t border-b border-[#ddd] py-2 text-start">
        <p className="text-sm ml-20">
          {/* Make Breadcrumb clickable */}
          <span 
            className="cursor-pointer hover:underline"
            onClick={() => navigate('/')}
          >
            Home Page
          </span> 
          {' / '}
          <span className="text-gray-500">Scented Candles</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/scand.png" // Replace with the actual image
            alt="Candle making process"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text (background color) */}
        <div className="w-full md:w-1/2 bg-[#a05c55] text-white p-8 flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Scented Candles</h2>
            <p className="leading-relaxed items-center">
              Each Camellia candle jar is meticulously crafted from natural beeswax and soy wax, ensuring a long burning time and no harm to health. Candle wicks made from natural cotton help the candle burn evenly and without creating smoke, bringing a fresh and relaxing space.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Collection Section */}
      <div className="bg-[#faf7f5] text-center py-16">
        <h2 className="text-3xl font-bold text-[#a05c55] mb-6">The Premium Collection</h2>
        <p className="max-w-6xl mx-auto text-lg text-[#333] mb-8 px-4">
          Camellia proudly introduces a premium candle collection, bringing you a wonderful experience with the perfect combination of delicate fragrance and luxurious design. Made from natural and safe ingredients, each candle jar in this collection is not only a work of art but also an ideal companion in your moments of relaxation.
        </p>
{/* Filter and Sort Section */}
<div className="flex justify-between items-center px-8">
          <div className="text-sm cursor-pointer flex items-center gap-1">
            <span>Filter</span>
            <i className="fa-solid fa-sliders"></i> {/* Add any filter icon */}
          </div>
          <div className="text-sm cursor-pointer flex items-center gap-1">
            <span>Sort</span>
            <i className="fa-solid fa-sort-alpha-down"></i> {/* Add any sort icon */}
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="text-lg font-semibold mb-6 text-left">6 Products</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="text-center flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-80 h-[308px} object-cover mb-4" // Set fixed size for images
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-[#a05c55]">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleAccessories;
