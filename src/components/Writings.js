import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Writings = () => {
    const [activeTab, setActiveTab] = useState('Blogs');
    const [searchTerm, setSearchTerm] = useState('');
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('http://localhost:8000/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    const tags = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];

    return (
        <section className="section">
            <div className="container">
                <nav className="panel">
                    <p className="panel-heading">Writings: ML, LLM's, MLOP's, Engineering</p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Search" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="icon is-left">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <p className="panel-tabs">
                        <Link 
                            to="/writings/blogs"
                            className={activeTab === 'Blogs' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Blogs')}
                        >
                            Blogs
                        </Link>
                        <Link 
                            to="/writings/short-articles"
                            className={activeTab === 'Short articles' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Short articles')}
                        >
                            Short articles
                        </Link>
                    </p>
                    <div className="pb-4"></div>
                    <div className="tags px-5 py-5">
                        {tags.map((tag, index) => (
                            <Link to={`/writings/tags/${tag}`} key={index} className="tag is-medium">{tag}</Link>
                        ))}
                    </div>
                    {blogPosts.map((post, index) => (
                        <div key={index} className="px-6 py-5">
                            <Link to={`/writings/blogs/${post.slug}`} className="title is-3 has-text-weight-medium">{post.title}</Link>
                            <h2 className="subtitle is-6">{post.subtitle}</h2>
                            <span className="is-size-6 pr-5">{post.date}</span>
                            {post.tags.map((tag, tagIndex) => (
                                <Link to={`/writings/tags/${tag}`} key={tagIndex} className="tag is-normal is-link is-light mx-1">{tag}</Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
            <Outlet />
        </section>
    );
};

export default Writings;