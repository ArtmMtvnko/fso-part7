import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateBlog } from '../reducers/blogReducer'
import { buttonStyles } from '../styles/button'

const Likes = ({ blog }) => {
    const [likes, setLikes] = useState(blog.likes ?? 0)
    
    const dispatch = useDispatch()
    
    const likeBlog = () => {
        dispatch(updateBlog(blog.id, {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: likes + 1
        }))
        setLikes(prev => prev + 1)
    }
    
    return (
        <p>
            <span style={{ marginRight: 5 }}>likes {likes}</span>
            <button className={buttonStyles} onClick={likeBlog}>like</button>
        </p>
    )
}

export default Likes