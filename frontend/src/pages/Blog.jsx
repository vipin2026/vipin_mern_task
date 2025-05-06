import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Blog() {

    const navigate = useNavigate()

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log('Blog Submitted:', data);
        try {
            const response = await axios.post('http://localhost:4001/user/v1/create_blog', data)
            console.log(response.data, "incmoing result")
            alert(`${response.data.message}`)
            navigate('/')
        } catch (error) {
            alert('error while Submit')
        }
        reset();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="absolute top-4 right-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
                    onClick={() => { navigate('/') }}
                >
                    Home
                </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-t-8 border-blue-500">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Create Your Custom Blog
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Title</label>
                        <input
                            type="text"
                            placeholder="Enter Title Here..."
                            {...register('title', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Content</label>
                        <textarea
                            placeholder="Enter Content Here..."
                            {...register('content', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.content && <span className="text-red-500 text-sm">Content is required</span>}
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Author</label>
                        <input
                            type="text"
                            placeholder="Enter Author Name..."
                            {...register('author', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.author && <span className="text-red-500 text-sm">Author is required</span>}
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Submit Blog
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Blog;
