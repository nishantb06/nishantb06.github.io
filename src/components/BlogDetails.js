import React, { useContext, useState, useEffect, useRef } from 'react';
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
    const [activeSection, setActiveSection] = useState('');
    const contentRef = useRef(null);

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

    useEffect(() => {
        if (!contentRef.current) return; // Add this check

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const headings = contentRef.current.querySelectorAll('h2, h3, h4');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, [blogContent, contentRef.current]); // Add contentRef.current as a dependency

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
                        <li><Link to="#" className="has-text-black">{blog.title}</Link></li>
                    </ul>
                </nav>
            </div>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2 sticky-column">
                            <TableOfContents 
                                activeMenus={activeMenus} 
                                toggleMenu={toggleMenu} 
                                blogSchema={blog.schema}
                                activeSection={activeSection}
                            />
                        </div>
                        <div className="column is-8" ref={contentRef}>
                            <div className="has-background-light p-4">
                                <span className="is-size-5">{blog.date} </span>
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
                            </div>
                            {blogContent.map((element, index) => (
                                <DynamicElement 
                                    key={index} 
                                    element={element} 
                                    sectionTitle={element.sectionTitle}
                                />
                            ))}
                        </div>
                        <div className="column is-2">
                            {/* fill anything here later */}
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .sticky-column {
                    position: sticky;
                    top: 5rem;
                    align-self: flex-start;
                    max-height: calc(100vh - 2rem);
                    overflow-y: auto;
                }
                .sticky-toc {
                    position: sticky;
                    top: 5rem;
                }
                .toc-link {
                    color: inherit;
                    text-decoration: none;
                    display: block;
                    padding: 0.5em 0.75em;
                }
                .toc-link:hover {
                    background-color: transparent;
                    color: inherit;
                }
                .toc-link.is-active {
                    font-weight: bold;
                    background-color: transparent;
                    color: inherit;
                }
                .menu-list a {
                    border-radius: 0;
                }
            `}</style>
        </>
    );
}

export default BlogDetails;