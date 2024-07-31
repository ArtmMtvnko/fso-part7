import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../reducers/userReducer'

const LoggedIn = () => {
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    
    const hangleLoggout = () => {
        localStorage.removeItem('loggedBlogappUser')
        dispatch(setUser(null))
    }
    
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={hangleLoggout}>logout</button>
        </div>
    )
}

export default LoggedIn