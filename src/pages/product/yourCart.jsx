import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuantityInput from '../../components/Util/quantity';

const YourCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mt-3 ml-48">
        <Link to="/">Home Page</Link> / <span className="text-[#6e3a3a]">Your Cart</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#722D2D] text-center mt-6">Your Cart</h1>

      <div className="max-w-6xl mx-auto mt-10 flex">
        {/* Left Section */}
        <div className="w-8/12 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md">
              <img src={item.imgUrl} alt={item.name} className="w-20 h-20 rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">Product Code: CAMELLIA0TC</p>
              </div>
              <div className="w-20 mr-5">
                <QuantityInput value={item.quantity} readOnly />
              </div>
              <p className="text-lg font-semibold text-[#6e3a3a]">{`${item.price.toLocaleString()}đ`}</p>
            </div>
          ))}

          {/* Coupon Section */}
          <div className="flex gap-4 mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
            <button className="bg-[#d88d8d] text-white px-6 py-2 rounded-md">Update</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-4/12 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-[#722D2D] mb-4">Total Cart</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>{`${subtotal.toLocaleString()}đ`}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span> <span>Free</span>
            </p>
            <p className="flex justify-between">
              <span>Estimated Tax:</span> <span>{`${(subtotal * 0.1).toLocaleString()}đ`}</span>
            </p>
            <p className="flex justify-between text-lg font-bold">
              <span>Total:</span> <span>{`${subtotal.toLocaleString()}đ`}</span>
            </p>
          </div>
          <button className="bg-[#6e3a3a] text-white w-full py-2 mt-4 rounded-md">
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
