import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import DynamicElement from './DynamicElement';
import TableOfContents from './TableOfContents';
import 'bulma/css/bulma.min.css';
import '../styles/CodeStyles.css';

const BlogDetails = () => {
    const { slug } = useParams();
    const { blogPosts, loading, error } = useContext(BlogContext);
    const [activeMenus, setActiveMenus] = useState({
        Introduction: false,
        'Main Content': false,
        Conclusion: false,
    });
    const [blogContent, setBlogContent] = useState([]);

    const toggleMenu = (menu) => {
        setActiveMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    const blog = blogPosts.find(post => post.slug === slug);

    useEffect(() => {
        if (blog) {
            let section = '';
            const processedContent = blog.content.map((element, index) => {
                if (element.type === 'h2') {
                    section = element.content;
                }
                return {
                    ...element,
                    sectionTitle: section
                };
            });
            setBlogContent(processedContent);
        }
    }, [blog]);

    const paddingTitle = {
        paddingTop: '0rem',
        paddingBottom: '0rem',
        marginTop: '0rem',
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (!blog) return <div className="text-center">Blog not found</div>;

    return (   
        <>
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb has-succeeds-separator">
                    <ul className="container is-size-12">
                        <li><Link to="/" className="has-text-grey"></Link></li>
                        <li><Link to="/about" className="has-text-grey">Home</Link></li>
                        <li><Link to="/writings" className="has-text-grey">Blogs</Link></li>
                        <li><Link to="#" className="is-active">{blog.title}</Link></li>
                    </ul>
                </nav>
            </div>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2 has-shadow">
                            <TableOfContents 
                                activeMenus={activeMenus} 
                                toggleMenu={toggleMenu} 
                                blogSchema={blog.schema} 
                            />
                        </div>
                        <div className="column is-10">
                            <p className="is-size-5">{blog.date} </p>
                            <h1 className="title is-1 pb-0 mb-0" style={paddingTitle}>
                                {blog.title}
                            </h1>
                            <p className="subtitle is-3" style={paddingTitle}>
                                {blog.subtitle}
                            </p>
                            <div className="tags">
                                {blog.tags.map((tag, index) => (
                                    <Link to={`/writings/tags/${encodeURIComponent(tag)}`} key={index} className="tag is-warning is-light">{tag}</Link>
                                ))}
                            </div>
                            <div className="pb-4"></div>
                            {blogContent.map((element, index) => (
                                <DynamicElement 
                                    key={index} 
                                    element={element} 
                                    sectionTitle={element.sectionTitle}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;