import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setBlogPosts(data);

                // Extract unique tags
                const uniqueTags = new Set();
                data.forEach(post => {
                    post.tags.forEach(tag => uniqueTags.add(tag));
                });
                setTags([...uniqueTags]);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <BlogContext.Provider value={{ blogPosts, tags, loading, error }}>
            {children}
        </BlogContext.Provider>
    );
};