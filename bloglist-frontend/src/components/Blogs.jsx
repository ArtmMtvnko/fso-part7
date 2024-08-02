import { blogContainer } from "../styles/blogs"
import BlogForm from "./BlogForm"
import BlogList from "./BlogList"
import Togglable from "./Togglable"

const Blogs = () => {
    return (
        <div className={blogContainer}>
            <h2>blogs</h2>

            <Togglable buttonLabel="new blog">
                <BlogForm />
            </Togglable>

            <BlogList />
        </div>
    )
}

export default Blogs