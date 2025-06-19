"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchBlogs } from '@/helper/request';
import RemoveBlog from './RemoveBlog';

export const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBlogs = async () => {
        try {
            const blogs =  await fetchBlogs();
            setBlogs(blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (!blogs || blogs.length === 0) {
        return <div className="text-center text-gray-500">No blogs available</div>;
    }
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h1 className="text-2xl font-bold mb-4">Blog List</h1>        
            <ul className="space-y-4">
            {blogs.map((blog) => (
                <li key={blog.id || blog._id} className="p-4 bg-white shadow rounded flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="text-gray-600">{blog.description}</p>
                    </div>
                    <div className='mt-4 flex justify-between gap-2'>
                        <Link href={`/edit/${blog._id}`}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                Edit
                            </button>
                        </Link>
                        <RemoveBlog blogId={blog._id} updateBlog={getBlogs} />
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}
