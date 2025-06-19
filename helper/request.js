export const fetchBlogs = async () => {
    try {
        console.log('Fetching blogs...');
        const response = await fetch('http://localhost:3000/api/blogs', {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        return data;    
    } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
    }
};

export const createBlog = async (title, description) => {
    try {
        const response = await fetch('http://localhost:3000/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to create blog');
        }
        const data = await response.json();
        console.log('Blog created successfully:', data);
        return data;
    } catch (error) {
        console.error('Error creating blog:', error);
    }
}

export const getBlogById = async (id) => {
    try {
        console.log(`Fetching blog with ID: ${id}`);
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        return data;    
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
}

export const updateBlog = async (id, title, description) => {
    try {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newTitle: title,
                newDescription: description,
            }), 
        });
        if (!response.ok) {
            throw new Error('Failed to update blog');
        }
        const data = await response.json();
        console.log('Blog updated successfully in request:', data);
        return data;    
    } catch (error) {
        console.error('Error updating blog:', error);
    }
}

export const deleteBlog = async (id) => {
    try {
        console.log(`Deleting blog with ID: ${id}`);
        const response = await fetch(`http://localhost:3000/api/blogs/?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete blog');
        }
        const data = await response.json();
        console.log('Blog deleted successfully:', data);
        return data;    
    } catch (error) {
        console.error('Error deleting blog:', error);
    }
}