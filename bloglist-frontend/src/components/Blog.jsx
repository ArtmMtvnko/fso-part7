import Likes from './Likes'
import Togglable from './Togglable'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../reducers/blogReducer'


const Blog = ({ blog, user }) => {
    const dispatch = useDispatch()
    
    const styles = {
        margin: '10px 0',
        padding: 5,
        border: '1px solid black'
    }

    const handleBlogDeletion = () => {
        if (confirm(`Blog ${blog.title} is going to be deleted. Delete this blog?`)) {
            dispatch(deleteBlog(blog.id))
        }
    }
    
    return (
        <div className="blog" style={styles}>
            <span style={{ marginRight: 5 }}>{blog.title}</span>
            <Togglable buttonLabel="view">
                <p>{blog.url}</p>
                <Likes blog={blog} />
                <p>{blog.author}</p>
                {user.username === blog.user.username && (
                    <button onClick={handleBlogDeletion}>remove</button>
                )}
            </Togglable>
        </div>
    )
}

export default Blog