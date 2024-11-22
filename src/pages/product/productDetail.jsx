import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Lấy `candleId` từ URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy dữ liệu từ localStorage (hoặc có thể là từ Redux hoặc Context)
    const candles = JSON.parse(localStorage.getItem("candles")) || [];
    const selectedProduct = candles.find((candle) => candle.candleId === parseInt(id, 10));
    if (selectedProduct) {
      setProduct(selectedProduct); // Gán sản phẩm vào trạng thái
    } else {
      console.error("Candle not found.");
      navigate("/"); // Điều hướng về trang chính nếu sản phẩm không tồn tại
    }
  }, [id, navigate]);

  if (!product) return <p>Loading...</p>; // Hiển thị khi đang tải dữ liệu

  return (
    <div className="bg-[#fdfaf5] py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md"
        />
        <h2 className="text-4xl font-semibold text-center my-6 text-[#6e3a3a]">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-[#6e3a3a]">{product.price}đ</p>
        <p className="text-sm text-gray-500">Stock Quantity: {product.stockQuantity}</p>
        <p className="text-sm text-gray-500">Category: {product.nameCategory}</p>
        <p className="text-sm text-gray-500">
          Created at: {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
