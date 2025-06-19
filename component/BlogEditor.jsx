"use client"
import { createBlog, updateBlog } from '@/helper/request';
import React from 'react'
import { useRouter } from 'next/navigation';

export const BlogEditor = ({blog = {}}) => {
    const blogId = blog ? blog._id : '';
    const [title, setTitle] = React.useState(blog ? blog.title : '');
    const [description, setDescription] = React.useState(blog ? blog.description : '');
    const router = useRouter();

    const handleSubmit = async (event, data) => {
        event.preventDefault();
        console.log('Submitting blog:', data);
        if (blogId) {
            await updateBlog(blogId, data.title, data.description)
        } else {
            await createBlog(data.title, data.description);
        }
        router.push('/');
    }

return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Blog Editor</h1>
        <form onSubmit={(event) => {
            handleSubmit(event, {
                id: blogId ?? '', 
                title: title, 
                description: description
            });
        }} className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 text-lg px-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter blog title"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
                    rows="6"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Write your blog content here..."
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
            Save Blog
            </button>
        </form>
    </div>
)
}
