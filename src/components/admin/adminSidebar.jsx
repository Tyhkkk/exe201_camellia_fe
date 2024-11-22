import { Link, useNavigate } from 'react-router-dom';
import { FaChartBar, FaSignOutAlt, FaBook, FaFolderOpen, FaUser, FaCog } from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Redirect to signin page
    navigate('/signin');
  };

  return (
    <div className="h-full w-auto bg-white shadow-lg flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8 text-left">
        <img src="/src/assets/2.png" alt="Camellia Logo" className="h-10" />
        <h1 className="text-3xl font-bold">Camellia</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow space-y-4">
        <Link to="/admin/candle" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaChartBar className="mr-3 text-gray-600" /> Candles
        </Link>
        <Link to="/admin/others" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaBook className="mr-3 text-gray-600" /> Others
          <span className="ml-auto bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-0.5 rounded-full">14</span>
        </Link>
        <Link to="/admin/review" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaFolderOpen className="mr-3 text-gray-600" /> Review
        </Link>
        <Link to="/admin/user" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaUser className="mr-3 text-gray-600" /> User
        </Link>
        <Link to="/admin/profile" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaUser className="mr-3 text-gray-600" /> Profile
        </Link>
        <Link to="/admin/settings" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100">
          <FaCog className="mr-3 text-gray-600" /> Settings
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-red-500 hover:bg-red-100 rounded-lg w-full"
        >
          <FaSignOutAlt className="mr-3" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
