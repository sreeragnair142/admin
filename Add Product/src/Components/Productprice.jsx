import React, { useState } from 'react';

const ProductPriceStock = () => {
  const [unitPrice, setUnitPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState('percent');
  const [currentStock, setCurrentStock] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'unitPrice') setUnitPrice(value);
    if (name === 'discount') setDiscount(value);
    if (name === 'currentStock') setCurrentStock(value);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 p-3">
        <div className="p-6 bg-white shadow-lg rounded-md">
          <h5 className="text-xl font-semibold mb-4">Price and Stock Information</h5>

          <form className="grid grid-cols-12 gap-6">
            {/* Unit Price */}
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-4 mb-4">
                <label className="col-span-3 text-gray-700 text-sm font-medium">
                  Unit Price <span className="text-red-500">*</span>
                </label>
                <div className="col-span-9">
                  <input
                    type="number"
                    className="form-control w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                    name="unitPrice"
                    value={unitPrice}
                    placeholder="Unit price"
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Discount */}
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-4 mb-4">
                <label className="col-span-3 text-gray-700 text-sm font-medium">
                  Discount <span className="text-red-500">*</span>
                </label>
                <div className="col-span-9">
                  <input
                    type="number"
                    className="form-control w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                    name="discount"
                    value={discount}
                    placeholder="Discount"
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-4 mb-4">
                <label className="col-span-3 text-gray-700 text-sm font-medium">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <div className="col-span-9">
                  <input
                    type="number"
                    className="form-control w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                    name="currentStock"
                    value={currentStock}
                    placeholder="Quantity"
                    onChange={handleInputChange}
                    min="0"
                    step="1"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceStock;
