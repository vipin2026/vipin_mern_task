import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import EditCard from './EditCard';

function BlogCard() {


    const [blogs, setBlogs] = useState([])
    console.log(blogs, "blogs")

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:4001/user/v1/get_blog');
            console.log(response.data, "response")
            setBlogs(response.data.result);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            alert('Failed to fetch blogs.');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);


    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setEditModalOpen(true);
    };

    const handleClose = () => {
        setEditModalOpen(false);
        setSelectedBlog(null);
    };

    const handleDelete = async (id) => {
        
        try {
            const response = await axios.delete('http://localhost:4001/user/v1/delete_blog', {
                data: { blogId: id }
            })
            fetchBlogs();
        } catch (error) {
            alert('Error While Delete This Blog')
        }

    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">📝 All Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                            <p className="text-sm text-gray-500 italic mb-4">Author: {blog.author}</p>
                            <p className="text-sm text-gray-500 italic mb-4">Post On: {new Date(blog.timeStamp).toLocaleString()}</p>

                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleEdit(blog)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm font-medium transition"
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(blog._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm font-medium transition"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {editModalOpen && (
                <EditCard
                    blogData={selectedBlog}
                    onClose={handleClose}
                    onUpdate={fetchBlogs}
                />
            )}
        </div>

    );
}

export default BlogCard;
