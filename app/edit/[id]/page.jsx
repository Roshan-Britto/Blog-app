"use client";
import { BlogEditor } from '@/component/BlogEditor'
import { getBlogById } from '@/helper/request';
import React, { useState, useEffect, use } from 'react'

const Edit = ({params}) => {
  const { id } = use(params);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogData = async () => {
    try {
      const blogData = await getBlogById(id);
      setBlog(blogData.blog);
      console.log('Fetched blog:', blogData.blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  if (loading) {
      return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (!blog || blog.length === 0) {
    return <div className="text-center text-gray-500">No blogs available</div>;
  }

  return (
    <div className='max-w-2xl mx-auto p-4'>
        <BlogEditor blog={blog} />
    </div>
  )
}

export default Edit
