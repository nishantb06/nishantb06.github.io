import DynamicElement from './DynamicElement';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import React from 'react';
import TableOfContents from './TableOfContents';

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeMenus, setActiveMenus] = useState({
        Introduction: false,
        'Main Content': false,
        Conclusion: false,
    });

    const toggleMenu = (menu) => {
        setActiveMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    // this function triggers when the component mounts
    // no need to mention the useEffect anywhere in the html
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/nishantb06/website/blogs/${slug}`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const data = await response.json();
                setBlog(data);
                console.log(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);  // when slug changes, this useEffect will run. this is a dependency array

    const paddingTitle = {
        paddingTop: '0rem',
        paddingBottom: '0rem',
        marginTop: '0rem',
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (   
        <>
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb has-succeeds-separator">
                    <ul className="container is-size-12">
                        <li><a href="" className="has-text-grey"></a></li>
                        <li><a href="/about" className="has-text-grey">Home</a></li>
                        <li><a href="/writings" className="has-text-grey">Blogs</a></li>
                        {blog && <li><a href="" className="is-active">{blog.title}</a></li>}
                    </ul>
                </nav>
            </div>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2 has-shadow">
                            {blog && (
                                <TableOfContents 
                                    activeMenus={activeMenus} 
                                    toggleMenu={toggleMenu} 
                                    blogSchema={blog.schema} 
                                />
                            )}
                        </div>
                        <div className="column is-10">
                            {blog && (
                                <>
                                    <p className="is-size-5">{blog.date} </p>
                                    <h1 className="title is-1 pb-0 mb-0" style={paddingTitle}>
                                        {blog.title}
                                    </h1>
                                    <p className="subtitle is-3" style={paddingTitle}>
                                        {blog.subtitle}
                                    </p>
                                    <div className="tags">
                                        {blog.tags.map((tag, index) => (
                                            <a key={index} className="tag is-black">{tag}</a>
                                        ))}
                                    </div>
                                    <div className="pb-4">
                                    </div>
                                    {blog.content.map((element, index) => (
                                        <DynamicElement key={index} element={element} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;