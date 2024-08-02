import { useState } from 'react'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import { blogForm } from '../styles/blogs'
import { buttonStyles } from '../styles/button'

const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()
    
    const createBlog = async (event) => {
        event.preventDefault()

        if (!title || !author || !url) {
            dispatch(notify({
                success: false,
                message: 'None of fields cannot be empty!'
            }, 3500))
            
            return
        }

        dispatch(addBlog({
            title,
            author,
            url,
            likes: 0
        }))

        setTitle('')
        setAuthor('')
        setUrl('')

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
                <input
                    name="title"
                    type="text"
                    id="title"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
                <label htmlFor="author">author:</label>
                <input
                    name="author"
                    type="text"
                    id="author"
                    value={author}
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
                <label htmlFor="url">url:</label>
                <input
                    name="url"
                    type="url"
                    id="url"
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}
                />
            </div>
            <button className={buttonStyles} type="submit">create</button>
        </form>
    )
}

export default BlogForm