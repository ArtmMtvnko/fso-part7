import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Togglable from './Togglable'
import Login from './Login'
import LoggedIn from './LoggedIn'

const NavBar = () => {
    const user = useSelector((state) => state.currentUser)

    const styles = {
        display: 'flex',
        gap: 10,
        padding: 5,
        backgroundColor: 'lightgrey'
    }

    return (
        <div style={styles}>
            <Link to="/blogs">blogs</Link>
            <Link to="/users">users</Link>
            {user === null ? (
                <Togglable buttonLabel="log in">
                    <Login />
                </Togglable>
            ) : (
                <LoggedIn />
            )}
        </div>
    )
}

export default NavBar
