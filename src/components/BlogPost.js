import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { slug } = useParams();

    // In a real application, you would fetch the blog post data based on the slug
    // For now, we'll just display the slug
    return (
        <div className="container">
            <h1 className="title">Blog Post: {slug}</h1>
            <p>This is where the content of your blog post would go.</p>
        </div>
    );
};

export default BlogPost;