import React, { useState } from 'react';
import useSWR from 'swr';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    function: '',
    review: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image and Name */}
          <div className="flex items-center space-x-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              <span className="block text-gray-600">Image</span>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              <span className="block text-gray-600">Name</span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Function */}
          <div>
            <label htmlFor="function" className="block text-sm font-medium text-gray-700">
              Function
              <input
                type="text"
                id="function"
                name="function"
                value={formData.function}
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Review</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="positive"
                  checked={formData.review === 'positive'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Positive</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="neutral"
                  checked={formData.review === 'neutral'}
                  onChange={handleChange}
                  className="form-radio text-gray-600"
                />
                <span className="ml-2">Neutral</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="negative"
                  checked={formData.review === 'negative'}
                  onChange={handleChange}
                  className="form-radio text-red-600"
                />
                <span className="ml-2">Negative</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
