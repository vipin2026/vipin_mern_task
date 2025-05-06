import React from 'react'
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';



function Home() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/create_blog')
    }
   

    return (
        <div className='bg-gray-200 h-screen w-full p-4 '>

            <div className='mt-4 mb-4 text-xl font-semibold text-center border-2 border-black w-60 flex justify-center mx-auto bg-yellow-200 p-2 hover:bg-yellow-400'
                onClick={handleClick}
            >
                <button>
                    Create Your BLOG here!
                </button>
            </div>
            <div>
               <BlogCard/>
            </div>
        </div>
    )
}

export default Home