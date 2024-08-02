import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Togglable from './Togglable'
import Login from './Login'
import LoggedIn from './LoggedIn'
import { navBar, navBarWrap } from '../styles/navBar'
import { container } from '../styles/container'
import { blogLink } from '../styles/blogs'
import { buttonStyles } from '../styles/button'

const NavBar = () => {
    const user = useSelector((state) => state.currentUser)

    return (
        <div className={navBarWrap}>
            <div className={`${navBar} ${container}`}>
                <Link className={blogLink} to="/blogs">blogs</Link>
                <Link className={blogLink} to="/users">users</Link>
                {user === null ? (
                    <Link to="/login">
                        <button className={buttonStyles}>login</button>
                    </Link>
                ) : (
                    <LoggedIn />
                )}
            </div>
        </div>
    )
}

export default NavBar
