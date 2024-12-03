import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QuantityInput from "../../components/Util/quantity";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import apiClient from "../../lib/apiService"; // Import apiClient

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { candleId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndRelated = async () => {
      setLoading(true);
      try {
        // Fetch sản phẩm hiện tại
        const productResponse = await apiClient.get(
          `/api/Candle/get-by-id/${candleId}`
        );
        setProduct({
          ...productResponse.data,
          price: `${productResponse.data.price.toLocaleString()}đ`,
        });

        // Fetch toàn bộ sản phẩm để tính logic liên quan
        const allProductsResponse = await apiClient.get(`/api/Candle`);
        const allProducts = allProductsResponse.data;

        // Xác định sản phẩm liên quan
        const currentIndex = allProducts.findIndex(
          (item) => item.candleId === parseInt(candleId, 10)
        );
        const relatedProductsList = [];

        for (let i = 1; i <= 4; i++) {
          const nextIndex = (currentIndex + i) % allProducts.length;
          relatedProductsList.push(allProducts[nextIndex]);
        }

        setRelatedProducts(relatedProductsList);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProductAndRelated();
  }, [candleId]);

  const handleQuantityChange = (newQuantity) => setQuantity(newQuantity);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          candleId: product.candleId,
          name: product.name,
          price: product.price,
          quantity,
          imgUrl: product.imgUrl,
        })
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="w-full mx-auto px-4">
        <hr className="p-[1px] bg-gray-500 mt-5"></hr>
        <nav className="text-sm text-gray-500 mt-3 ml-48">
          <Link to="/">Home Page</Link> /{" "}
          <Link to="/category/scented-candles">Scented Candles</Link> /{" "}
          <span className="text-[#6e3a3a]">{product.name}</span>
        </nav>
        <hr className="p-[1px] bg-gray-500 mt-5"></hr>
      </div>

      {/* Product Details */}
      <div className="bg-[#fdfaf5] py-10">
        <div className="max-w-6xl mx-auto px-4 mt-6 flex gap-10">
          <div className="w-1/2">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          <div className="w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-[#6e3a3a]">{product.name}</h1>
            <p className="text-gray-600 text-sm">Product Code: CAMELLIA{product.candleId}TC</p>
            <p className="text-gray-600 text-sm">Status: In Stock</p>
            <p className="text-3xl font-semibold text-[#6e3a3a]">{product.price}</p>
            <QuantityInput initialQuantity={quantity} onChange={handleQuantityChange} />
            <button
              className="bg-[#d88d8d] text-white px-6 py-2 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <h2 className="text-2xl font-semibold text-[#6e3a3a]">
            PRODUCT DESCRIPTION
          </h2>
          <hr className="p-[1px] bg-black mt-5"></hr>
          <section className="mt-4">
            <h3 className="text-xl items-center justify-center ml-96 font-semibold text-[#6e3a3a]">
              THE STORY OF CANDLE
            </h3>
            <p className="text-gray-700 mt-2 text-center">
              Each Camellia candle jar is meticulously crafted from natural
              beeswax and soy wax, ensuring a long burning time and no harm to
              health. Candle wicks made from natural cotton help the candle burn
              evenly and without creating smoke, bringing a fresh, relaxing
              space. Camellia candle collection is inspired by nature with rich
              and diverse scents. From mint, caramel, soothing vanilla and
              relaxing sweet citrus to warm incense and fresh fruit flavors,
              each scent brings a distinct feeling, helping you find peace and
              comfort. comfortable in a busy life.
            </p>
          </section>
          <section className="mt-6">
            <h3 className="text-xl font-semibold text-[#6e3a3a]">
              PRODUCT DESCRIPTION
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>
                Ingredients: Natural bean wax, fragrance, lead-free woven cotton
                wick and complies with IFRA standards for fragrance
                applications.
              </li>
              <li>Volume: 300ml (10 hours of burning)</li>
              <li>
                Cut the wick to about 0.8cm before lighting the candle. When you
                see black smoke in your candle, check the length of the wick. Do
                not place the cut heart on the surface of the wax that will be
                burned. Stay away from wind sources. Do not burn for more than 3
                hours. Do not turn off the candle before it burns evenly. Place
                candles when burning and freezing on a flat surface and at a
                safe temperature. Stop using the candle when there is 1cm of wax
                left. Choose a candle size appropriate to the area for the best
                scent.
              </li>
              <li>Scent description: Fresh - Relaxing - Pure</li>
              <li>
                LAND OF SEA scented candle: Guava and passion fruit scents
                create a cozy and pure scent.
              </li>
              <li>Main flavor notes: Guava and Passion.</li>
            </ul>
          </section>
        </div>
        {/* Related Products */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <h2 className="text-2xl font-semibold text-[#6e3a3a]">Related Products</h2>
          <div className="flex gap-6 mt-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.candleId}
                to={`/product/${related.candleId}`}
                className="block w-1/4"
              >
                <img
                  src={related.imgUrl}
                  alt={related.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 text-gray-700 text-center">{related.name}</h3>
                <p className="text-center text-[#6e3a3a]">{`${related.price.toLocaleString()}đ`}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
