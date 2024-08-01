import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../reducers/currnetUserReducer'

const LoggedIn = () => {
    const user = useSelector(state => state.currentUser)

    const dispatch = useDispatch()
    
    const hangleLoggout = () => {
        localStorage.removeItem('loggedBlogappUser')
        dispatch(setUser(null))
    }
    
    return (
        <div>
            <span style={{ marginRight: 5 }}>{user.name}</span>
            <button onClick={hangleLoggout}>logout</button>
        </div>
    )
}

export default LoggedIn