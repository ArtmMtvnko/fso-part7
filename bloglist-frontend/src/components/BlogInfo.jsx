import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Likes from './Likes'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import { container } from '../styles/container'

const BlogInfo = () => {
    const { id } = useParams()

    const blog = useSelector(state => state.blogs?.find(blog => blog.id === id))
    
    if (!blog) return null
    
    return (
        <div className={container}>
            <h1>{blog.title}</h1>
            <a href={`${blog.url}`}>{blog.url}</a>
            <Likes blog={blog} />
            <p>added by {blog.author}</p>
            <hr />
            <h3>comments</h3>
            <Togglable buttonLabel="add comment">
                <CommentForm blog={blog} />
            </Togglable>
            <ul>
                {blog.comments.map(comment =>
                    <li key={comment.id}>{comment.content}</li>
                )}
            </ul>
        </div>
    )
}

export default BlogInfo