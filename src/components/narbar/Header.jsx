import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline, IoSearch, IoCartOutline } from "react-icons/io5";
import { FaPhoneSquare, FaCaretDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { useAuth } from "../../context/auth/AuthContext"; // import AuthContext
import { useSelector } from "react-redux";  // Import useSelector to access cart items

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};

const Header = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showWalletAmount, setShowWalletAmount] = useState(false);  // Local state for wallet visibility
  const [walletAmount] = useState(1000);  // Example wallet amount, can be dynamic from user data
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);  // Get cart items from Redux
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prev) => !prev);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  const toggleWalletVisibility = () => {
    setShowWalletAmount((prev) => !prev);  // Toggle wallet visibility
  };

  useOnClickOutside(userDropdownRef, () => setIsUserDropdownOpen(false));

  return (
    <header className="bg-[#fdf6f3] text-[#7b3d35] font-jomolhari py-2">
      <div className="text-center">
        <span>
          CLICK ON CAMXINCHAO - UP TO 10% DISCOUNT FOR ALL ORDERS ON THE WEBSITE
        </span>
      </div>
      <div className="bg-[#a05c55] text-[#fdf6f3] text-xs flex justify-end px-4 py-1 w-full">
        <div className="flex space-x-4 items-center">
          <span>Hotline: 1900 6574 (7h - 12h, 13h - 14h)</span>
          <span className="border-l border-[#fdf6f3] h-4 mx-2"></span>
          <Link to="/contact" className="hover:underline flex items-center">
            Contact
            <FaPhoneSquare className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto py-4 px-4 lg:px-8">
        <div className="grid grid-cols-3 items-center">
          <div></div>

          <div className="flex flex-col items-center">
            <img src="/src/assets/2.png" alt="Camellia Logo" className="h-10" />
            <h1 className="text-3xl font-bold">Camellia</h1>
          </div>

          <div className="flex items-center justify-end space-x-6 text-sm">
            <div className="flex flex-col text-right">
              <div className="flex items-center space-x-1">
                <IoLocationOutline className="text-xl" />
                <span>Deliver or pick up at</span>
              </div>
              <span>S302, Vinhomes GrandPark</span>
            </div>

            <Link to="/search" className="text-3xl">
              <IoSearch />
            </Link>

            <Link to="/cart" className="text-3xl relative">
              <IoCartOutline />
              {totalItemsInCart > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  {totalItemsInCart}
                </span>
              )}
            </Link>

            <div className="relative" ref={userDropdownRef}>
              <button onClick={toggleUserDropdown} className="text-3xl flex items-center">
                <HiOutlineUser />
                <FaCaretDown className="ml-1 text-xl" />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-lg z-50">
                  {user ? (
                    <div className="py-2">
                      <button onClick={() => navigate("/profileCustomer")} className="block px-4 py-2 hover:bg-gray-100">
                        Hồ sơ
                      </button>
                      <button onClick={() => navigate("/orderHistory")} className="block px-4 py-2 hover:bg-gray-100">
                        Đơn hàng
                      </button>
                      <button onClick={() => navigate("/favorite")} className="block px-4 py-2 hover:bg-gray-100">
                        Yêu thích
                      </button>
                      <button onClick={() => navigate("/review-gadget")} className="block px-4 py-2 hover:bg-gray-100">
                        Đánh giá sản phẩm
                      </button>
                      <div className="block px-4 py-2 text-gray-700">
                        <span>Ví của tôi: </span>
                        <span className="font-bold ml-2">
                          {showWalletAmount ? walletAmount : "******"}
                        </span>
                        <button onClick={toggleWalletVisibility} className="ml-2">
                          {showWalletAmount ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <button onClick={logout} className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                        Đăng Xuất
                      </button>
                    </div>
                  ) : (
                    <div className="py-2">
                      <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100">
                        Đăng Nhập
                      </Link>
                      <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">
                        Tạo tài khoản
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="flex justify-center space-x-8 text-lg mt-4">
          <Link to="/" className="hover:text-[#a05c55]">
            Home Page
          </Link>
          <Link to="/aboutus" className="hover:text-[#a05c55]">
            About Us
          </Link>
          <div className="relative group">
            <button onClick={toggleProductsDropdown} className="hover:text-[#a05c55] inline-flex items-center">
              Products
              <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
              </svg>
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-44 z-50">
                <ul className="text-xs text-[#7b3d35]">
                  <li>
                    <Link to="/products/scented-candles" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProductsDropdownOpen(false)}>
                      SCENTED CANDLES
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/essential-oils" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProductsDropdownOpen(false)}>
                      ESSENTIAL OILS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/gift-set" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProductsDropdownOpen(false)}>
                      GIFT SET
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/candle-accessories" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProductsDropdownOpen(false)}>
                      CANDLE ACCESSORIES
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
