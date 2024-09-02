import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Writings = () => {
    const [activeTab, setActiveTab] = useState('Blogs');
    const [searchTerm, setSearchTerm] = useState('');
    const [blogPosts, setBlogPosts] = useState([]);
    const { tag } = useParams();

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                if (tag) {
                    const filteredPosts = data.filter(post => post.tags.includes(tag.toLowerCase()));
                    setBlogPosts(filteredPosts);
                } else {
                    setBlogPosts(data);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, [tag]);

    const tags = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'quantisation'];

    return (
        <section className="section">
            <div className="container">
                <nav className="panel">
                    <p className="panel-heading">
                        {tag ? `Writings tagged with "${tag}"` : 'Writings: ML, LLM\'s, MLOP\'s, Engineering'}
                    </p>
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
                        {tags.map((tagName, index) => (
                            <Link 
                                to={`/writings/tags/${tagName}`} 
                                key={index} 
                                className={`tag is-medium is-hoverable is-warning is-light ${tag === tagName ? 'is-active' : ''}`}
                            >
                                {tagName}
                            </Link>
                        ))}
                    </div>
                    {blogPosts.map((post, index) => (
                        <div key={index} className="px-6 py-5">
                            <Link 
                                to={`/writings/blogs/${post.slug}`} 
                                className="title is-3 has-text-weight-medium blog-title-link"
                            >
                                {post.title}
                            </Link>
                            <h2 className="subtitle is-6">{post.subtitle}</h2>
                            <span className="is-size-6 pr-5">{post.date}</span>
                            {post.tags.map((postTag, tagIndex) => (
                                <Link to={`/writings/tags/${postTag}`} key={tagIndex} className="tag is-normal is-hoverable is-warning is-light mx-1">{postTag}</Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
            <style jsx>{`
                // .tag {
                //     background-color: #000000;
                //     color: #ffffff;
                // }
                // .tag.is-hoverable:hover {
                //     background-color: #363636;
                //     color: #ffffff;
                // }
                .tag.is-active {
                    background-color: #5d7638 ;
                    color: #ffffff;
                }
                // .tag.is-active:hover {
                //     background-color: #c0c357;
                //     color: #ffffff;
                // }
                .blog-title-link {
                    display: inline-block;
                    transition: transform 0.2s ease-in-out;
                }
                .blog-title-link:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
};

export default Writings;