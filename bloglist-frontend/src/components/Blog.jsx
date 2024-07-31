import Likes from './Likes'
import Togglable from './Togglable'
import blogService from '../services/blogs'


const Blog = ({ blog, blogs, setBlogs, user }) => {
    const styles = {
        margin: '10px 0',
        padding: 5,
        border: '1px solid black'
    }

    const deleteBlog = async () => {
        if (confirm(`Blog ${blog.title} is going to be deleted. Delete this blog?`)) {
            await blogService.deleteBlog(blog.id)
            setBlogs(blogs.filter(b => b.id !== blog.id))
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
                    <button onClick={deleteBlog}>remove</button>
                )}
            </Togglable>
        </div>
    )
}

export default Blog