import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import { blogForm } from '../styles/blogs'
import { buttonStyles } from '../styles/button'
import useField from '../hooks/useField'

const BlogForm = () => {
    const [title, resetTitle] = useField('text', 'title')
    const [author, resetAuthor] = useField('text', 'author')
    const [url, resetUrl] = useField('url', 'url')

    const dispatch = useDispatch()
    
    const createBlog = async (event) => {
        event.preventDefault()

        if (!title.value || !author.value || !url.value) {
            dispatch(notify({
                success: false,
                message: 'None of fields cannot be empty!'
            }, 3500))
            
            return
        }

        dispatch(addBlog({
            title: title.value,
            author: author.value,
            url: url.value,
            likes: 0
        }))

        resetTitle('')
        resetAuthor('')
        resetUrl('')

        dispatch(notify({
            success: true,
            message: 'Blog has been successfuly created!'
        }, 2000))
    }
    
    return (
        <form className={blogForm} onSubmit={createBlog}>
            <h2>Create new blog</h2>
            <div>
                <label htmlFor="title">title:</label>
                <input {...title} id="title" />
            </div>
            <div>
                <label htmlFor="author">author:</label>
                <input {...author} id="author" />
            </div>
            <div>
                <label htmlFor="url">url:</label>
                <input {...url} id="url" />
            </div>
            <button className={buttonStyles} type="submit">create</button>
        </form>
    )
}

export default BlogForm