import { Link } from "react-router-dom"
import { blogLink } from "../styles/blogs"

const User = ({ user }) => {
    return (
        <tr style={{ textAlign: 'end' }}>
            <td>
                <Link className={blogLink} to={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.blogs.length}</td>
        </tr>
    )
}

export default User