import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../reducers/currnetUserReducer'
import { buttonStyles } from '../styles/button'
import { navBarLoggedIn } from '../styles/navBar'
import { setLoggedIn } from '../reducers/loggedInReducer'

const LoggedIn = () => {
    const user = useSelector(state => state.currentUser)

    const dispatch = useDispatch()
    
    const hangleLoggout = () => {
        localStorage.removeItem('loggedBlogappUser')
        dispatch(setUser(null))
        dispatch(setLoggedIn(false))
    }
    
    return (
        <div className={navBarLoggedIn}>
            <span>{user.name}</span>
            <button className={buttonStyles} onClick={hangleLoggout}>logout</button>
        </div>
    )
}

export default LoggedIn