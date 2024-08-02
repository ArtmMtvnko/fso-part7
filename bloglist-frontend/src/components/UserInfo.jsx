import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { container } from '../styles/container'

const UserInfo = () => {
    const { id } = useParams()

    const user = useSelector(state => state.users?.find(user => user.id === id))

    if (!user) return null
    
    return (
        <div className={container}>
            <h1>{user.name}</h1>
            <h2>added blogs:</h2>
            <ul>
                {user.blogs.map(blog => 
                    <li key={Math.random()}>{blog.title}</li>
                )}
            </ul>
        </div>
    )
}

export default UserInfo