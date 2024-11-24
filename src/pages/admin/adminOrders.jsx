import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Trạng thái quản lý dropdown theo orderId

  // Fetch orders từ API
  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://localhost:7065/api/Order/get-all-order");
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  // Cập nhật trạng thái đơn hàng
  const updateOrderStatus = async (orderId, newStatus) => {
    const apiUrl =
      newStatus === "Successful"
        ? `https://localhost:7065/api/Order/update-order-success/${orderId}`
        : `https://localhost:7065/api/Order/update-order-canceled/${orderId}`;
    try {
      await axios.put(apiUrl);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Toggle dropdown cho từng orderId
  const toggleDropdown = (orderId) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [orderId]: !prev[orderId], // Toggle trạng thái của orderId hiện tại
    }));
  };

  // Lấy màu sắc theo trạng thái đơn hàng
  const getStatusColor = (status) => {
    switch (status) {
      case "Successful":
        return "bg-green-200 text-green-800";
      case "Canceled":
        return "bg-red-200 text-red-800";
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  // Fetch data khi component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    User
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Total
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Address
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Phone
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Payment
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderId} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b">{order.orderId}</td>
                    <td className="px-4 py-3 border-b">{order.userName}</td>
                    <td className="px-4 py-3 border-b">${order.totalPrice}</td>
                    <td className="px-4 py-3 border-b">{order.address}</td>
                    <td className="px-4 py-3 border-b">{order.phone}</td>
                    <td
                      className={`px-4 py-3 border-b text-center rounded-md ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </td>
                    <td className="px-4 py-3 border-b">{order.isPay ? "Paid" : "NotPay"}</td>
                    <td className="px-4 py-3 border-b relative">
                      {/* Nút 3 chấm */}
                      <button
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={() => toggleDropdown(order.orderId)}
                      >
                        &#x22EE;
                      </button>
                      {/* Dropdown menu */}
                      {dropdownOpen[order.orderId] && (
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg border">
                          <ul>
                            <li
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() => updateOrderStatus(order.orderId, "Canceled")}
                            >
                              Reject
                            </li>
                            <li
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() => updateOrderStatus(order.orderId, "Successful")}
                            >
                              Confirm
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
