import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Writings = () => {
    const { blogPosts, tags, loading, error } = useContext(BlogContext);
    const [activeTab, setActiveTab] = useState('Blogs');
    const [searchTerm, setSearchTerm] = useState('');
    const { tag } = useParams();
    const location = useLocation();

    // Sort function for blog posts
    const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

    useEffect(() => {
        if (location.state && location.state.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location]);

    const filteredPosts = tag
        ? blogPosts.filter(post => 
            post.tags.some(postTag => 
                postTag.toLowerCase() === tag.toLowerCase()
            ) && 
            (activeTab === 'Blogs' ? !post.isShortArticle : post.isShortArticle)
          )
        : blogPosts.filter(post => 
            activeTab === 'Blogs' ? !post.isShortArticle : post.isShortArticle
          );

    // Sort the filtered posts by date
    const sortedPosts = filteredPosts.sort(sortByDate);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                                placeholder="Search (Coming soon ...)" 
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
                            className={activeTab === 'Blogs' ? 'is-active' : 'has-text-black'}
                            onClick={() => setActiveTab('Blogs')}
                        >
                            Blogs
                        </Link>
                        <Link 
                            className={activeTab === 'Short articles' ? 'is-active' : 'has-text-black'}
                            onClick={() => setActiveTab('Short articles')}
                        >
                            Articles
                        </Link>
                    </p>
                    <div className="pb-4"></div>
                    <div className="tags px-5 py-5 is-flex is-flex-wrap-wrap">
                        <Link 
                            to="/writings"
                            key="all-tags"
                            className={`tag is-medium is-hoverable is-warning is-light ${!tag ? 'is-active' : ''}`}
                        >
                            All
                        </Link>
                        {tags.map((tagName, index) => (
                            <Link 
                                to={`/writings/tags/${encodeURIComponent(tagName)}`} 
                                key={index} 
                                className={`tag is-small is-hoverable is-warning is-light ${tag === tagName ? 'is-active' : ''}`}
                            >
                                {tagName}
                            </Link>
                        ))}
                    </div>
                    {sortedPosts.map((post, index) => (
                        <div key={index} className="px-6 py-5">
                            <Link 
                                to={`/writings/blogs/${post.slug}`} 
                                className="title is-4 has-text-weight-medium blog-title-link"
                            >
                                {post.title}
                            </Link>
                            <p className="subtitle is-5 mb-2 mt-2">{post.subtitle}</p>
                            <span className="is-size-6 pr-5">{post.date}</span>
                            {post.tags.map((postTag, tagIndex) => (
                                <Link 
                                    to={`/writings/tags/${encodeURIComponent(postTag)}`} 
                                    key={tagIndex} 
                                    className="tag is-normal is-hoverable is-warning is-light mx-1"
                                >
                                    {postTag}
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
            <style jsx>{`
                .tag.is-active {
                    background-color: #0f164a ;
                    color: #ffffff;
                }
                .blog-title-link {
                    display: inline-block;
                    transition: transform 0.2s ease-in-out;
                }
                .blog-title-link:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
};

export default Writings;
