import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Likes from './Likes'

const BlogInfo = () => {
    const { id } = useParams()

    const blog = useSelector(state => state.blogs?.find(blog => blog.id === id))
    
    if (!blog) return null
    
    return (
        <div>
            <h1>{blog.title}</h1>
            <a href={`${blog.url}`}>{blog.url}</a>
            <Likes blog={blog} />
            <p>added by {blog.author}</p>
        </div>
    )
}

export default BlogInfo