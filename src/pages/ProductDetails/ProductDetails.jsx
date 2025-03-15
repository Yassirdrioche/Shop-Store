import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Icon } from "@iconify/react";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b relative z-50  bg-neutral-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <Icon
            icon="mdi:alert-circle-outline"
            className="w-16 h-16 text-neutral-400 mx-auto mb-4"
          />
          <p className="text-2xl font-bold text-neutral-900">
            Product Not Found
          </p>
          <p className="text-neutral-900 mt-2">
            The product you're looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b  py-20 px-4 sm:px-6 lg:px-8 relative z-50 bg-neutral-100">
      <section className="flex justify-center gap-14 min-h-screen mt-14 flex-wrap md:flex-nowrap ">
        <div className="sticky top-0 h-auto overflow-hidden rounded-lg shadow-2xl transform">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
          {/* Badge for Product Category */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-neutral-900 shadow-sm">
            {product.category}
          </div>
        </div>
        {/* Product Details Section */}
        <div className="sticky top-0">
          {/* Product Image */}

          {/* Product Information */}
          <div className="space-y-6 sticky top-0 p-4 bg-white md:bg-transparent">
            <h1 className="text-4xl text-left font-bold text-neutral-900">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-neutral-900">
              ${product.price}
            </p>
            <p className="text-lg text-neutral-900">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              className="w-full lg:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white font-semibold rounded-lg hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 shadow-lg"
              onClick={() => addToCart(product)}
            >
              <Icon icon="mdi:cart-plus" className="w-6 h-6 mr-2" />
              Add to Cart
            </button>

            {/* Product Features */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Product Features
              </h2>
              <ul className="list-disc list-inside text-neutral-900 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon
                      icon="lets-icons:check-fill"
                      className="w-5 h-5 text-neutral-900"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Specifications
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-neutral-900">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <Icon
                      icon="tabler:info-circle-filled"
                      className="w-5 h-5 text-neutral-900"
                    />
                    <div>
                      <span className="font-semibold">{key}:</span>
                      <span>
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
