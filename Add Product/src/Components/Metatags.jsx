import React, { useState } from 'react';

const SeoMetaTagsForm = () => {
    const [formData, setFormData] = useState({
        metaTitle: '',
        metaDescription: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='bg-white max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className="col-span-2 p-3">
                <form 
                    onSubmit={handleSubmit} 
                    className="p-6 bg-white shadow-lg rounded-md"
                >
                    <div className="border-b p-4 mb-4">
                        <h5 className="text-xl font-semibold">{'SEO Meta Tags'}</h5>
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-12 gap-4 mb-4">
                            <label className="col-span-3 text-gray-700 text-sm font-medium">
                                Meta Title <span className="text-red-500">*</span>
                            </label>
                            <div className="col-span-9">
                                <input
                                    type="text"
                                    name="metaTitle"
                                    value={formData.metaTitle}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Meta Title"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mb-4">
                            <label className="col-span-3 text-gray-700 text-sm font-medium">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <div className="col-span-9">
                                <textarea
                                    name="metaDescription"
                                    value={formData.metaDescription}
                                    onChange={handleChange}
                                    rows="4"
                                    className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Description"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Buttons below the form aligned to the right */}
                   
                </form>
                <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Save & Unpublish
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Save & Publish
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default SeoMetaTagsForm;
