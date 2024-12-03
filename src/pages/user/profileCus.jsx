import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import apiClient from "../../lib/apiService";

const ProfileCustomer = () => {
  const { user } = useAuth(); // Access userId from AuthContext
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      try {
        if (!user?.userId) throw new Error("UserId is not available.");
        const response = await apiClient.get(`/api/User/get-by-id/${user.userId}`);
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Unable to fetch profile. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [user?.userId]);

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#6e3a3a] shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Thay bằng API trả về URL avatar nếu có
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#6e3a3a] mt-4">{profile.username}</h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h2>
            <p className="text-lg text-gray-600">
              <strong>Username:</strong> {profile.username}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> {profile.email}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Created At:</strong> {new Date(profile.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Role Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Role Information</h2>
            <p className="text-lg text-gray-600">
              <strong>ID:</strong> {profile.roleId + "0000" + profile.userId || "N/A"}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Position:</strong> {profile.role || "Customer"}
            </p>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order History</h2>
          {profile.orders && profile.orders.length > 0 ? (
            <ul className="space-y-3">
              {profile.orders.map((order) => (
                <li
                  key={order.orderId}
                  className="p-4 bg-[#f9f9f9] border rounded-lg shadow-sm flex justify-between items-center"
                >
                  <span className="text-gray-600">Order #{order.orderId}</span>
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                  <span className="text-[#6e3a3a] font-semibold">{order.total?.toLocaleString()} VND</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-600">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCustomer;
