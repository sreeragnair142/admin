import React, { useState } from "react";

const ProductImagesSection = ({ galleryImages, setGalleryImages, thumbnailImage, setThumbnailImage }) => {
    const handleGalleryImageChange = (e) => {
        const files = Array.from(e.target.files);
        setGalleryImages(files);
    };

    const handleThumbnailImageChange = (e) => {
        const file = e.target.files[0];
        setThumbnailImage(file);
    };

    const handleRemoveGalleryImage = (index) => {
        const newGalleryImages = galleryImages.filter((_, i) => i !== index);
        setGalleryImages(newGalleryImages);
    };

    return (
        <div className="border border-gray-200 p-6 rounded-md shadow-lg">
            <h5 className="text-xl font-semibold mb-4">Product Images</h5>

            {/* Gallery Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                <label className="col-span-3 block text-sm font-medium text-gray-700">
                    Gallery Images <small>(600x600)</small>
                </label>

                <div className="col-span-9">
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-center cursor-pointer hover:bg-blue-100 transition duration-200">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleGalleryImageChange}
                            className="hidden"
                            id="gallery-images-upload"
                        />
                        <label htmlFor="gallery-images-upload" className="flex flex-col items-center justify-center h-full">
                            {galleryImages.length === 0 ? (
                                <span className="text-gray-400">Drag & drop images here or click to browse</span>
                            ) : (
                                <span className="text-gray-800">Images selected: {galleryImages.length}</span>
                            )}
                        </label>
                    </div>
                    <small className="mt-1 text-gray-500">
                        These images are visible in the product details page gallery. Use 600x600 sized images.
                    </small>
                </div>
            </div>

            {/* Gallery Image Previews */}
            <div className="flex flex-wrap gap-4 mb-6">
                {galleryImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Gallery ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-md border border-gray-300"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(index)}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            {/* Thumbnail Image Section */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                <label className="col-span-3 block text-sm font-medium text-gray-700">
                    Thumbnail Image <small>(300x300)</small>
                </label>

                <div className="col-span-9">
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center cursor-pointer hover:bg-green-100 transition duration-200">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailImageChange}
                            className="hidden"
                            id="thumbnail-image-upload"
                        />
                        <label htmlFor="thumbnail-image-upload" className="flex flex-col items-center justify-center h-full">
                            {thumbnailImage ? (
                                <span className="text-gray-800">Thumbnail selected</span>
                            ) : (
                                <span className="text-gray-400">Drag & drop thumbnail here or click to browse</span>
                            )}
                        </label>
                    </div>
                    <small className="mt-1 text-gray-500">
                        This image is visible in all product boxes. Use 300x300 size image.
                    </small>
                </div>
            </div>

            {/* Thumbnail Image Preview */}
            {thumbnailImage && (
                <div className="mb-6">
                    <img
                        src={URL.createObjectURL(thumbnailImage)}
                        alt="Thumbnail"
                        className="w-24 h-24 object-cover rounded-md border border-gray-300"
                    />
                </div>
            )}
        </div>
    );
};

const TaxesSection = ({ taxes, setTaxes, taxValues, setTaxValues }) => {
    const handleTaxChange = (e, index) => {
        const newValues = [...taxValues];
        newValues[index] = e.target.value;
        setTaxValues(newValues);
    };

    return (
        <div className="border border-gray-200 p-6 rounded-md shadow-lg">
            <h5 className="text-xl font-semibold mb-4">Vat & TAX</h5>
            <div className="flex gap-4 items-center mb-4">
                <input
                    type="number"
                    value={taxValues[0] || ""}
                    onChange={(e) => handleTaxChange(e, 0)}
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                />
            </div>
        </div>
    );
};


const ProductImages = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [taxes, setTaxes] = useState([]);
    const [taxValues, setTaxValues] = useState([""]);

    return (
        <div className="bg-white max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 ">
           
            <div className="col-span-2 p-3"> 
                <ProductImagesSection
                    galleryImages={galleryImages}
                    setGalleryImages={setGalleryImages}
                    thumbnailImage={thumbnailImage}
                    setThumbnailImage={setThumbnailImage}
                />
            </div>

            {/* Right - VAT and Taxes Section */}
            <div className="col-span-1 p-6"> 
                <TaxesSection
                    taxes={taxes}
                    setTaxes={setTaxes}
                    taxValues={taxValues}
                    setTaxValues={setTaxValues}
                />
            </div>
        </div>
    );
};

export default ProductImages;
