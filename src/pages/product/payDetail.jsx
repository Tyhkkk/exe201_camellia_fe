import { useLocation } from "react-router-dom"; // Correct import for useLocation
import axios from "axios";

const PayDetail = () => {
  const location = useLocation();
  const orderData = location.state?.orderData; // Safely access orderData

  const handleOrder = async () => {
    try {
      const response = await axios.post('https://localhost:7065/api/Order/create', orderData); 
      console.log('Order Data:', orderData);// Replace with your API URL
      if (response.data.status === 'PENDING') {
        window.location.href = response.data.checkoutUrl; // Redirect to checkout page
      }
    } catch (error) {
      console.error('Error creating order:', error);
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
              <p className="font-semibold text-gray-700 mt-2">Total: <span className="text-xl text-[#6e3a3a]">{orderData.price.toLocaleString()} VND</span></p>
            </div>

            <h4 className="text-lg font-semibold text-[#6e3a3a] mt-4">Order Items</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {orderData.orderItems.map((item, index) => (
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

            <button
              onClick={handleOrder}
              className="w-full bg-[#6e3a3a] text-white py-4 rounded-md font-semibold text-lg hover:bg-[#a24c4c]"
            >
              Confirm Order
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
