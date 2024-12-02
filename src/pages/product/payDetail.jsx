import { useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const PayDetail = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || {}; // Safely access orderData with a default empty object
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = async () => {
    setIsLoading(true);
    try {
      console.log('Sending order data:', orderData);
      const response = await axios.post('https://localhost:7065/api/Order/create', orderData);
      console.log('Full API response:', response);
  
      if (response.data && response.data.data) {
        console.log('Response data:', response.data.data);
        
        if (response.data.data.checkoutUrl) {
          console.log('Checkout URL found:', response.data.data.checkoutUrl);
          
          // Attempt to redirect
          console.log('Attempting to redirect to:', response.data.data.checkoutUrl);
          window.location.href = response.data.data.checkoutUrl;
          
          // Check if redirection didn't happen immediately
          setTimeout(() => {
            if (window.location.href !== response.data.data.checkoutUrl) {
              console.error('Redirection failed. Current URL:', window.location.href);
              toast.error('Không thể chuyển hướng đến trang thanh toán. Vui lòng thử lại.');
            }
          }, 1000);
        } else {
          console.error('No checkoutUrl in response data');
          toast.error('Không nhận được URL thanh toán từ máy chủ. Vui lòng thử lại.');
        }
      } else {
        console.error('Invalid response structure');
        toast.error('Không nhận được phản hồi hợp lệ từ máy chủ. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      toast.error('Đã xảy ra lỗi khi tạo đơn hàng. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center text-[#6e3a3a] mb-8">Payment Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6e3a3a] mb-4">Order Summary</h3>
            <div className="mb-4">
              <p className="font-semibold text-gray-700">Description: <span className="text-[#6e3a3a]">{orderData.description}</span></p>
              <p className="font-semibold text-gray-700 mt-2">Total: <span className="text-xl text-[#6e3a3a]">{orderData.price?.toLocaleString()} VND</span></p>
            </div>

            <h4 className="text-lg font-semibold text-[#6e3a3a] mt-4">Order Items</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {orderData.orderItems?.map((item, index) => (
                <li key={index}>
                  {item.productName} x {item.quantity} = {(item.priceItem * item.quantity).toLocaleString()} VND
                </li>
              ))}
            </ul>

            {/* Payment Method */}
            <div className="mt-6">
              <h5 className="text-sm text-gray-700 mb-2">Payment Method</h5>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentMethod"
                  value="bankTransfer"
                  className="mr-2"
                />
                <label htmlFor="bankTransfer" className="text-sm text-gray-700">Bank Transfer</label>
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  className="mr-2"
                />
                <label htmlFor="cashOnDelivery" className="text-sm text-gray-700">Pay on Delivery</label>
              </div>
            </div>

            {/* Confirm Order Button */}
            <button
              onClick={handleOrder}
              disabled={isLoading}
              className={`w-full bg-[#6e3a3a] text-white py-4 rounded-md font-semibold text-lg ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#a24c4c]'
              }`}
            >
              {isLoading ? 'Processing...' : 'Confirm Order'}
            </button>
          </div>

          {/* Order Notes and Coupon Code */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6e3a3a] mb-4">Order Notes</h3>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Add any special instructions for the order."
              rows="5"
            />

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#6e3a3a] mb-4">Coupon Code</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full p-3 border border-gray-300 rounded-l-md"
                />
                <button className="bg-[#6e3a3a] text-white px-6 py-3 rounded-r-md">Apply Coupon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayDetail;