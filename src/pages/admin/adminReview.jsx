import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaStar } from "react-icons/fa";

const AdminReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

  // URL API
  const apiUrl = "https://localhost:7065/api/Review";
  const deleteUrl = "https://localhost:7065/api/Review/delete-review/";

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await axios.get(apiUrl);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete review
  const deleteReview = async (reviewId) => {
    try {
      await axios.delete(`${deleteUrl}${reviewId}`);
      setReviews(reviews.filter((review) => review.reviewId !== reviewId));
      setSelectedReview(null); // Close the confirmation popup
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

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

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold mt-8">
        Loading reviews...
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
