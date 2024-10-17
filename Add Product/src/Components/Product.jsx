import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    brand_id: "",
    unit: "",
    weight: "",
    minimum_purchase_qty: "1",
    tags: "",
    cash_on_delivery: false,
    estimated_shipping_time: "",
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => {
        setCategories(response.data || []);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    axios
      .get("/api/brands")
      .then((response) => {
        setBrands(response.data || []);
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products", formData)
      .then((response) => {
        console.log("Product added:", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <div className="b">
      {/* <h1 className="py-5 px-6 text-2xl">Add New Product</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto mt-5 px-6 ml-13">
        <div className="lg:col-span-8 bg-white p-6 shadow-lg rounded-md">
          <h5 className="text-xl font-semibold mb-4">Product Information</h5>

          {errors.length > 0 && (
            <div className="alert alert-danger mb-4">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <label className="lg:col-span-3 text-gray-700 text-sm font-medium">
                Product Name <span className="text-red-500">*</span>
              </label>
              <div className="lg:col-span-9">
                <input
                  type="text"
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <label className="lg:col-span-3 text-gray-700 text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="lg:col-span-9">
                <select
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No categories available
                    </option>
                  
                  )}
                </select>
              </div>
            </div>

            {/* Brand */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <label className="lg:col-span-3 text-gray-700 text-sm font-medium">
                Brand
              </label>
              <div className="lg:col-span-9">
                <select
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                  name="brand_id"
                  value={formData.brand_id}
                  onChange={handleChange}
                >
                  <option value="">Select Brand</option>
                  {Array.isArray(brands) && brands.length > 0 ? (
                    brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No brands available
                    </option>
                  )}
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Right column: Cash on Delivery and Estimated Shipping Time */}
        <div className="lg:col-span-4 space-y-6">
          {/* Cash on Delivery */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h5 className="text-xl font-semibold">Cash on Delivery</h5>
            <div className="flex items-center mt-4">
              <label
                htmlFor="cash_on_delivery"
                className="text-gray-700 text-sm font-medium mr-3"
              >
                Status
              </label>
              <div
                className="relative inline-flex items-center cursor-pointer"
                onClick={() =>
                  setFormData((prevState) => ({
                    ...prevState,
                    cash_on_delivery: !prevState.cash_on_delivery,
                  }))
                }
              >
                <input
                  type="checkbox"
                  name="cash_on_delivery"
                  id="cash_on_delivery"
                  checked={formData.cash_on_delivery}
                  readOnly
                  className="sr-only"
                />
                <div
                  className={`w-10 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                    formData.cash_on_delivery ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                    formData.cash_on_delivery
                      ? "translate-x-4"
                      : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Estimated Shipping Time */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h5 className="text-xl font-semibold">Estimated Shipping Time</h5>
            <div className="mt-4">
              <input
                type="text"
                name="estimated_shipping_time"
                className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., 3-5 business days"
                value={formData.estimated_shipping_time}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
