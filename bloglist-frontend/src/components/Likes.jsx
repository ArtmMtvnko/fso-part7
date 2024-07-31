import blogService from '../services/blogs'
import { useState } from 'react'

const Likes = ({ blog }) => {
    const [likes, setLikes] = useState(blog.likes ?? 0)
    
    const likeBlog = async () => {
        const updatedBlog = await blogService.updateBlog(blog.id, {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: likes + 1
        })
        setLikes(prev => prev + 1)
    }
    
    return (
        <p>
            <span style={{ marginRight: 5 }}>likes {likes}</span>
            <button onClick={likeBlog}>like</button>
        </p>
    )
}

export default Likes