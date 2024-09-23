// import React from "react";

const ProductCatalogue = () => {
  // Fake data for The Most Beloved Fragrance section
  const fragranceData = [
    { id: 1, name: "Citrus Ginger", price: "149.000đ", img: "/src/assets/p1.png" },
    { id: 2, name: "Soft Coffee", price: "149.000đ", img: "/src/assets/p2.png" },
    { id: 3, name: "On The Cloud", price: "149.000đ", img: "/src/assets/p3.png" },
    { id: 4, name: "Morning Breeze", price: "149.000đ", img: "/src/assets/p4.png" },
    { id: 5, name: "Amber Glow", price: "149.000đ", img: "/src/assets/p5.png" },
    { id: 6, name: "Strawberry Mint Delight", price: "149.000đ", img: "/src/assets/p6.png" },
    { id: 7, name: "Extra Fragrance", price: "149.000đ", img: "/src/assets/p1.png" }, // Extra item for pagination test
  ];

  return (
    <div>
      {/* Product Catalogue Section */}
      <div className="w-screen py-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Product Catalogue</h2>
        <div className="flex justify-center space-x-4">
          <a href="/scented-candles" className="text-center">
            <img src="/src/assets/6.png" alt="Scented Candles" className="w-40 h-40 object-cover" />
            <p>Scented Candles</p>
          </a>
          <a href="/essential-oils" className="text-center">
            <img src="/src/assets/7.png" alt="Essential Oils" className="w-40 h-40 object-cover" />
            <p>Essential Oils</p>
          </a>
          <a href="/gift-set" className="text-center">
            <img src="/src/assets/8.png" alt="Gift Set" className="w-40 h-40 object-cover" />
            <p>Gift Set</p>
          </a>
          <a href="/candle-accessories" className="text-center">
            <img src="/src/assets/9.png" alt="Candle Accessories" className="w-40 h-40 object-cover" />
            <p>Candle Accessories</p>
          </a>
        </div>
      </div>

      {/* The Most Beloved Fragrance Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8">The Most Beloved Fragrance</h2>
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto">
            {fragranceData.map((item) => (
              <div key={item.id} className="w-60 p-4 bg-white shadow rounded-lg">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          {fragranceData.length > 6 && (
            <div className="flex justify-center mt-6 space-x-2">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
