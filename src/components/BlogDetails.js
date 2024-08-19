import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { slug } = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
            <p>Slug: {slug}</p>
        </div>
    );
}
 
export default BlogDetails;