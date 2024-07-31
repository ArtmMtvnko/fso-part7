import { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ blogs, setBlogs, setNotification }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    
    const addBlog = async (event) => {
        event.preventDefault()

        if (!title || !author || !url) {
            setNotification({
                success: false,
                message: 'none of fields cannot be empty'
            })
            setTimeout(() => setNotification(null), 3300)
            
            return
        }

        const createdBlog = await blogService.createBlog({
            title,
            author,
            url
        })

        setBlogs([...blogs, createdBlog])

        setTitle('')
        setAuthor('')
        setUrl('')
        setNotification({
            success: true,
            message: 'Blog has been successfuly created!'
        })
        setTimeout(() => setNotification(null), 2000)
    }
    
    return (
        <form onSubmit={addBlog}>
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
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm