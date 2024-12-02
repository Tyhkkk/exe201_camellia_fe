// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../store/cartSlice"; // Import changeQuantity action
import { useNavigate } from 'react-router-dom';
const YourCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);  // Get cart items from Redux store

  const handleMinusQuantity = (candleId, quantity) => {
    const newQuantity = quantity - 1;
    dispatch(changeQuantity({ candleId, quantity: newQuantity }));
  };

  const handlePlusQuantity = (candleId, quantity) => {
    const newQuantity = quantity + 1;
    dispatch(changeQuantity({ candleId, quantity: newQuantity }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    const orderItems = cartItems.map(item => ({
      productName: item.name,
      quantity: item.quantity,
      priceItem: parseInt(item.price.toString().replace(/,/g, '')),  // Ensure this is a number, not a string with commas
    }));
  
    // Calculate total price as a number (without formatting)
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    const orderData = {
      description: 'Lô Hàng Nến Thơm',  // Ensure this is a proper string description
      price: totalPrice,  // Ensure totalPrice is a number, not formatted
      returnUrl: 'http://localhost:5173',  // leave empty for now
      cancelUrl: 'http://localhost:5173',  // leave empty for now
      orderItems: orderItems,
    };
  
    // Log the order data for debugging
    console.log('Order Data:', orderData);
  
    // Send data to the PayDetail page
    navigate('/paydetail', { state: { orderData } });
  };
  return (
    <div className="bg-[#FDF5F5] min-h-screen py-6">
      <h1 className="text-3xl font-bold text-[#722D2D] text-center mt-6">Your Cart</h1>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.candleId}  // Use candleId as the key
              className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md"
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-24 h-24 rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">Product Code: {item.candleId}</p>
                {/* Product Description */}
                <p className="text-sm text-gray-400">Description: {item.description}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* Handle Quantity Input with + and - buttons */}
                <button
                  onClick={() => handleMinusQuantity(item.candleId, item.quantity)}
                  className="bg-gray-100 h-full w-8 font-bold text-xl rounded-xl flex justify-center items-center"
                >
                  -
                </button>
                <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handlePlusQuantity(item.candleId, item.quantity)}
                  className="bg-gray-100 h-full w-8 font-bold text-xl rounded-xl flex justify-center items-center"
                >
                  +
                </button>
                <p className="text-lg font-semibold text-[#6e3a3a]">
                  {`${item.price.toLocaleString()}đ`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-[#722D2D] mb-4">Total Cart</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>Subtotal:</span>{" "}
              <span>{`${subtotal.toLocaleString('vi-VN')},000đ`}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span> <span>Free</span>
            </p>
            <p className="flex justify-between">
              <span>Estimated Tax:</span> <span>Free</span>
            </p>
            <p className="flex justify-between text-lg font-bold">
              <span>Total Quantity:</span>{" "}
              <span>{totalQuantity}</span> {/* Display total quantity */}
            </p>
            {/* Remove Estimated Tax */}
            <p className="flex justify-between text-lg font-bold">
              <span>Total:</span>{" "}
              <span>{`${subtotal.toLocaleString('vi-VN')},000đ`}</span>
            </p>
          </div>
          <button className="bg-[#6e3a3a] text-white w-full py-2 mt-4 rounded-md" onClick={handleCheckout}>
            Continue to Checkout
          </button>
        </div>
      </div>

      {/* Coupon Section - Now placed below the cart items */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col items-center -ml-28">
        <label htmlFor="couponCode" className="block text-sm font-semibold text-gray-700">
          Coupon Code
        </label>
        <div className="flex mt-2">
          <input
            type="text"
            id="couponCode"
            placeholder="Enter coupon code"
            className="w-full p-2 border border-gray-300 rounded-l-md"
          />
          <button
            className="bg-[#6e3a3a] text-white px-6 py-2 rounded-r-md"
          >
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
