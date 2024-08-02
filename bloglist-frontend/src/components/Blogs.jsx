import { container } from '../styles/container'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Togglable from './Togglable'

const Blogs = () => {
    return (
        <div className={container}>
            <h2>BLOGS</h2>

            <Togglable buttonLabel="new blog">
                <BlogForm />
            </Togglable>

            <BlogList />
        </div>
    )
}

export default Blogs