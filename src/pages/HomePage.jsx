import ProductCatalogue from "../components/customer/homepage/productCatalogue";
import ProductIntroduction from "../components/customer/homepage/productInfo";
import ProductCandles from "../components/customer/homepage/productCandles";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      {/* Đảm bảo ảnh có thể mở rộng và không bị giới hạn */}
      <img 
        src="/src/assets/3.png" 
        alt="Main Img" 
        className="w-full h-auto" // Loại bỏ max-w để không giới hạn chiều rộng
      />
      <div className="container mx-auto px-4 py-12">
      {/* Sử dụng Grid để sắp xếp các phần */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Phần sản phẩm 1 */}
        <div className="text-center">
          <img 
            src="/src/assets/4.png" 
            alt="Handmade" 
            className="w-full h-auto object-cover border border-white"
          />
          <h2 className="text-3xl font-bold text-brown-700 mt-4 text-[#7b3d35] font-jomolhari">Handmade</h2>
          <p className="mt-2 text-[#7b3d35] font-jomolhari">
            Natural scented candles are made very carefully and meticulously by Camellia Candle
            to bring a harmonious combination of scent and the most environmentally friendly. 
            The scent notes will help you relieve stress and relax after a tiring day of work.
          </p>
          <button className="px-6 py-2 mt-4 border border-[#6e3a3a] text-[#6e3a3a]  hover:bg-[#6e3a3a] hover:text-white transition duration-300">
            Buy now
          </button>
        </div>

        {/* Phần sản phẩm 2 */}
        <div className="text-center">
          <img 
            src="/src/assets/5.png" 
            alt="Nature" 
            className="w-full h-auto object-cover border border-white"
          />
          <h2 className="text-3xl font-bold text-brown-700 mt-4 text-[#7b3d35] font-jomolhari">Nature</h2>
          <p className="mt-2 text-[#7b3d35] font-jomolhari">
            Made from soybean oil (hardened), so the wax does not contain environmental pollutants,
            does not produce petrol carbon. At the same time, when burning scented candles made from
            soy wax, it will not cause an unpleasant burning or smoky smell.
          </p>
          <button className="px-6 py-2 mt-4 border border-[#6e3a3a] text-[#6e3a3a]  hover:bg-[#6e3a3a] hover:text-white transition duration-300">
            Buy now
          </button>
        </div>
      </div>
    </div>

    <ProductCatalogue/>
    <ProductIntroduction/>
    <ProductCandles/>
    </div>
  );
};

export default HomePage;
