import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:7065/api/Candle/${id}`) // Fetch the product detail by ID
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>; // Show a loading message while fetching data

  return (
    <div className="bg-[#fdfaf5] py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img src={product.imgUrl} alt={product.name} className="w-full h-72 object-cover rounded-md" />
        <h2 className="text-4xl font-semibold text-center my-6 text-[#6e3a3a]">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-[#6e3a3a]">{product.price} đ</p>
        <p className="text-sm text-gray-500">Stock Quantity: {product.stockQuantity}</p>
        <p className="text-sm text-gray-500">Category: {product.nameCategory}</p>
        <p className="text-sm text-gray-500">Created at: {new Date(product.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
