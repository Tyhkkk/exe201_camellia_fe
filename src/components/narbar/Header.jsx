import { Link } from "react-router-dom";
import { IoLocationOutline, IoSearch, IoCartOutline } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
  return (
    <header className="bg-[#fdf6f3] text-[#7b3d35] font-jomolhari py-2">
      {/* Top banner with discount and contact */}
      <div className="text-center">
        <span>
          CLICK ON CAMXINCHAO - UP TO 10% DISCOUNT FOR ALL ORDERS ON THE WEBSITE
        </span>
      </div>
      <div className="bg-[#a05c55] text-[#fdf6f3] text-xs flex justify-end px-4 py-1 w-full">
        <div className="flex space-x-4 items-center">
          <span>Hotline: 1900 6574 (7h - 12h, 13h - 14h)</span>

          {/* Vách ngăn */}
          <span className="border-l border-[#fdf6f3] h-4 mx-2"></span>

          <Link to="/contact" className="hover:underline flex items-center">
            Contact
            <FaPhoneSquare className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-8">
        {/* Grid layout with 3 sections */}
        <div className="grid grid-cols-3 items-center">
          {/* Left side: empty */}
          <div></div>

          {/* Middle: Logo and brand name */}
          <div className="flex flex-col items-center">
            <img src="/src/assets/2.png" alt="Camellia Logo" className="h-10" />
            <h1 className="text-3xl font-bold">Camellia</h1>
          </div>

          {/* Right side: Deliver details and icons */}
          <div className="flex items-center justify-end space-x-6 text-sm">
            {/* Deliver details */}
            <div className="flex flex-col text-right">
              <div className="flex items-center space-x-1">
                <IoLocationOutline className="text-xl" />
                <span>Deliver or pick up at</span>
              </div>
              <span>S302, Vinhomes GrandPark</span>
            </div>

            {/* Icons: Search, Cart, User */}
            <Link to="/search" className="text-3xl">
              <IoSearch />
            </Link>

            <Link to="/cart" className="text-3xl relative">
              <IoCartOutline />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                0
              </span>
            </Link>

            <Link to="/profile" className="text-3xl">
              <HiOutlineUser />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-8 text-lg mt-4">
          <Link to="/" className="hover:text-[#a05c55]">
            Home Page
          </Link>
          <Link to="/aboutus" className="hover:text-[#a05c55]">
            About Us
          </Link>
          <div className="relative group">
            <Link to="/products" className="hover:text-[#a05c55]">
              Products
            </Link>
            {/* Dropdown for Products */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
              <Link
                to="/products/candles"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Candles
              </Link>
              <Link
                to="/products/decor"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Bedroom Decor
              </Link>
            </div>
          </div>
          <Link to="/contact" className="hover:text-[#a05c55]">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
