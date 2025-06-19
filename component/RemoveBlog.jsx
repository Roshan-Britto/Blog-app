"use client";
import { useRouter } from "next/navigation";
const { deleteBlog } = require("@/helper/request");


const RemoveBlog = ({ blogId, updateBlog }) => {
    const router = useRouter();
    const handleDelete = async () => {
        const consfirmation = confirm("Are you sure you want to delete this blog?");
        if (!consfirmation) return;

        console.log("Deleting blog with ID:", blogId);
        if (!blogId) {
            alert("Blog ID is required for deletion.");
            return;
        }
        const response = await deleteBlog(blogId);
        if (response && response.message) {
            updateBlog();
        } else {
            alert("Failed to delete the blog. Please try again.");
        }
    }

    return (
        <button 
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg"
        >
            Delete    
        </button>
    );
};

export default RemoveBlog;