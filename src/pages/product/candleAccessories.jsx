import { useNavigate } from 'react-router-dom';

const CandleAccessories = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Candle Care Accessories Set", price: "119.000₫", image: "/src/assets/accessory1.png" },
    { id: 2, name: "Matchstick", price: "15.000₫", image: "/src/assets/accessory2.png" },
    { id: 3, name: "Wooden Tray", price: "59.000₫", image: "/src/assets/accessory3.png" },
    { id: 4, name: "Metal Candle Tray", price: "49.000₫", image: "/src/assets/accessory4.png" },
    { id: 5, name: "Scented Wax", price: "79.000₫", image: "/src/assets/accessory5.png" },
    { id: 6, name: "Dried Flower", price: "20.000₫", image: "/src/assets/accessory6.png" }
  ];

  return (
    <div className="font-jomolhari text-[#333]">
      {/* Breadcrumb */}
      <div className="border-t border-b border-[#ddd] py-2 text-start">
        <p className="text-sm ml-20">
          <span 
            className="cursor-pointer hover:underline"
            onClick={() => navigate('/')}
          >
            Home Page
          </span> 
          {' / '}
          <span className="text-gray-500">Candle Accessories</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left: Text (background color) */}
        <div className="w-full md:w-1/2 bg-[#a05c55] text-white p-8 flex justify-center items-center">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Candle Accessories</h2>
            <p className="leading-relaxed">
              Enhance your candle experience with our premium accessories. From matchsticks to trays, each piece is designed to bring convenience and style to your space.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/accessory_banner.png"
            alt="Candle accessories setup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Display Section */}
      <div className="bg-[#faf7f5] py-16">
        <div className="flex justify-between items-center px-8 mb-8">
          <div className="text-sm cursor-pointer flex items-center gap-1">
            <span>Filter</span>
            <i className="fa-solid fa-sliders"></i>
          </div>
          <div className="text-sm cursor-pointer flex items-center gap-1">
            <span>Sort</span>
            <i className="fa-solid fa-sort-alpha-down"></i>
          </div>
        </div>
        <hr className='p-[1px] bg-black'></hr>
        
        <div className="px-8 py-8">
          <div className="text-lg font-semibold mb-6 text-left">6 Products</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-80 h-[308px] object-cover mb-4"
                />
                <div className="text-center">
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
