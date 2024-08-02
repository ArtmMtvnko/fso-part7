import Likes from './Likes'
import Togglable from './Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog } from '../reducers/blogReducer'
import { Link } from 'react-router-dom'
import { blogCard, blogLink } from '../styles/blogs'
import { buttonStyles } from '../styles/button'


const Blog = ({ blog }) => {
    const user = useSelector(state => state.currentUser)
    
    const dispatch = useDispatch()

    const removeBlog = () => {
        if (confirm(`Blog ${blog.title} is going to be deleted. Delete this blog?`)) {
            dispatch(deleteBlog(blog.id))
        }
    }
    
    return (
        <div className={`blog ${blogCard}`}>
            <Link className={blogLink} to={`/blogs/${blog.id}`}>{blog.title}</Link>
            <Togglable buttonLabel="view">
                <p>{blog.url}</p>
                <Likes blog={blog} />
                <p>{blog.author}</p>
                {user?.id === (blog.user.id ?? blog.user) && (
                    <button className={buttonStyles} onClick={removeBlog}>remove</button>
                )}
            </Togglable>
        </div>
    )
}

export default Blog