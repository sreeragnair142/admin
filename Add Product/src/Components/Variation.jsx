import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const ProductVariation = () => {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  useEffect(() => {
    axios.get('/api/colors')
      .then((response) => {
        const colorOptions = response.data.map((color) => ({
          value: color.code,
          label: (
            <span>
              <span 
                style={{ background: color.code }} 
                className="size-15px d-inline-block mr-2 rounded border">
              </span>
              {color.name}
            </span>
          )
        }));
        setColors(colorOptions);
      });
  }, []);

  // Fetch attributes from an API or backend
  useEffect(() => {
    axios.get('/api/attributes')
      .then((response) => {
        const attributeOptions = response.data.map((attribute) => ({
          value: attribute.id,
          label: attribute.name,
        }));
        setAttributes(attributeOptions);
      });
  }, []);

  return (
    <div className="bg-white max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 p-3">
        <div className="p-6 bg-white shadow-lg rounded-md">
          <h5 className="text-xl font-semibold mb-4">Product Variation</h5>

          {/* Colors Selection */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
            {/* Left Side - Colors Label */}
            <label className="col-span-3 block text-sm font-medium text-gray-700">
              Colors
            </label>

            {/* Right Side - Colors Dropdown */}
            <div className="col-span-9">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-center cursor-pointer hover:bg-blue-100 transition duration-200">
                <Select
                  isMulti
                  value={selectedColors}
                  onChange={setSelectedColors}
                  options={colors}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Attributes Selection */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6">
            {/* Left Side - Attributes Label */}
            <label className="col-span-3 block text-sm font-medium text-gray-700">
              Attributes
            </label>

            {/* Right Side - Attributes Dropdown */}
            <div className="col-span-9">
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center cursor-pointer hover:bg-green-100 transition duration-200">
                <Select
                  isMulti
                  value={selectedAttributes}
                  onChange={setSelectedAttributes}
                  options={attributes}
                  placeholder="Choose Attributes"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVariation;
