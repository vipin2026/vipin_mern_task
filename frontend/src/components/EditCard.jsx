
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditCard({ blogData, onClose, onUpdate }) {
  const [formData, setFormData] = useState(blogData || {});

  useEffect(() => {
    setFormData(blogData);
  }, [blogData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    console.log(formData,"formdata")
    try {
      const response = await axios.post('http://localhost:4001/user/v1/update_blog', formData);
      alert('Blog updated successfully');
      onUpdate();
      onClose();
    } catch (error) {
      alert('Error updating blog');
      console.error(error);
    }
  };

  if (!formData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">Edit Blog</h2>

        <div className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Title</label>
            <input
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Content</label>
            <textarea
              name="content"
              value={formData.content || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 h-24 resize-none"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Author</label>
            <input
              name="author"
              value={formData.author || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
            />
          </div>

          <p className="text-sm text-gray-500">Blog ID: {formData._id}</p>

          <button
            onClick={handleUpdate}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-600"
          >
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
