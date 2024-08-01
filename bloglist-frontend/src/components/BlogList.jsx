import { useSelector } from 'react-redux'
import Blog from './Blog'
import { blogsContainer } from '../styles/blogs'

const BlogList = () => {
    const blogs = useSelector(state => state.blogs)

    return (
        <div className={blogsContainer}>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
            )}
        </div>
    )
}

export default BlogList