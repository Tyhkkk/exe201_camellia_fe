// import React from 'react';

const ProductIntroduction = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Upper Section with Image and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Image Section */}
        <div>
          <img
            src="/src/assets/k2.png"
            alt="Camellia Candle"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-b37572">The Story Of Camellia</h2>
          <p className="text-lg text-gray-700 mb-6">
            Camellia originated from the passion of six individuals who love creativity in technology and the beauty of art. Camellia, a premium scented candle brand, was established with the mission of bringing customers moments of relaxation and tranquility through exquisite scented candle products. Camellia`s products are handcrafted from natural ingredients, providing users with a sense of calm and peace as they immerse themselves in the gentle fragrance.
          </p>
          <a
            href="/story"
            className="border border-b37572 text-b37572 px-6 py-2 rounded-lg hover:bg-b37572 hover:text-white transition duration-300 text-center w-40"
          >
            See it now
          </a>
        </div>
      </div>

      {/* Lower Section with Image and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-b37572">Proudly Vietnamese Brand</h2>
          <p className="text-lg text-gray-700 mb-6">
            Camellia Candle - a premium scented candle brand, was founded with the mission of bringing customers moments of relaxation and peace through delicate scented candle products that carry creative stories. Each candle is a very special moment, the light in life and the inspiration for the beautiful stories that Camellia wants to convey to everyone. Camellia - a high-end scented candle brand, was created with the mission of bringing customers moments of relaxation and peace through exquisite scented candle products.
          </p>
          <a
            href="/proudly-vietnamese"
            className="border border-b37572 text-b37572 px-6 py-2 rounded-lg hover:bg-b37572 hover:text-white transition duration-300 text-center w-40"
          >
            See it now
          </a>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="/src/assets/k1.png"
            alt="Vietnamese Brand"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductIntroduction;
