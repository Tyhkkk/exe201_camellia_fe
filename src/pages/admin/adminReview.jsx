import { useState, useEffect } from "react";
import apiClient from "../../lib/apiService"; // Sử dụng apiClient
import { FaTrash, FaStar } from "react-icons/fa";

const AdminReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);
  const [error, setError] = useState(null);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await apiClient.get("/api/Review");
      setReviews(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Failed to load reviews. Please try again.");
      setLoading(false);
    }
  };

  // Delete review
  const deleteReview = async (reviewId) => {
    try {
      await apiClient.delete(`/api/Review/delete-review/${reviewId}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.reviewId !== reviewId)
      );
      setSelectedReview(null); // Close the confirmation popup
    } catch (err) {
      console.error("Error deleting review:", err);
      alert(`Failed to delete review: ${err.response?.data?.message || err.message}`);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Hiển thị số sao
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? "text-yellow-500" : "text-gray-300"
        } inline`}
      />
    ));
  };

  // Nếu đang tải dữ liệu
  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-8">
        Loading reviews...
      </div>
    );
  }

  // Nếu xảy ra lỗi
  if (error) {
    return (
      <div className="text-center text-red-500 text-lg font-semibold mt-8">
        {error}
      </div>
    );
  }

  // Nếu không có đánh giá
  if (reviews.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg font-semibold mt-8">
        No reviews available.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Reviews</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border-b">Review ID</th>
            <th className="p-3 border-b">User ID</th>
            <th className="p-3 border-b">Candle ID</th>
            <th className="p-3 border-b">Rating</th>
            <th className="p-3 border-b">Comment</th>
            <th className="p-3 border-b">Created At</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr
              key={review.reviewId}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 border-b">{review.reviewId}</td>
              <td className="p-3 border-b">{review.userId}</td>
              <td className="p-3 border-b">{review.candleId}</td>
              <td className="p-3 border-b">{renderStars(review.rating)}</td>
              <td className="p-3 border-b">{review.comment}</td>
              <td className="p-3 border-b">
                {new Date(review.createdAt).toLocaleString()}
              </td>
              <td className="p-3 border-b">
                <FaTrash
                  onClick={() => setSelectedReview(review)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  size={18}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Popup */}
      {selectedReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete review with ID{" "}
              <strong>{selectedReview.reviewId}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => deleteReview(selectedReview.reviewId)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setSelectedReview(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReview;
