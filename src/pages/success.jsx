import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [navigate]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#6e3a3a] mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been placed successfully. You will be redirected to the home page shortly.
      </p>
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#6e3a3a] rounded-full animate-spin"></div>
      <button
        onClick={() => navigate('/')}
        className="mt-8 px-6 py-3 bg-[#6e3a3a] text-white rounded-md font-semibold hover:bg-[#a24c4c]"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Success;
