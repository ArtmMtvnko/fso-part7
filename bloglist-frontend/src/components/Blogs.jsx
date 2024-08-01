import BlogForm from "./BlogForm"
import BlogList from "./BlogList"
import Togglable from "./Togglable"

const Blogs = () => {
    return (
        <>
            <h2>blogs</h2>

            <Togglable buttonLabel="new blog">
                <BlogForm />
            </Togglable>

            <BlogList />
        </>
    )
}

export default Blogs