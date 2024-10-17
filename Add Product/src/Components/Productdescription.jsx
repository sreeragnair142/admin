import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

const ProductDescription = () => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 p-3">
        <div className="bg-white shadow-lg rounded-md p-6">
          <h2 className="text-lg font-semibold mb-5">Product Description</h2>
          <div className='mb-10'>
            <ReactQuill 
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
              className="h-60"
              placeholder='Enter your text here'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
