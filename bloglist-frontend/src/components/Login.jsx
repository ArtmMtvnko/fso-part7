import loginService from '../services/login'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
import { setUser } from '../reducers/currnetUserReducer'
import { buttonStyles } from '../styles/button'
import { loginBtn, loginForm } from '../styles/login'
import { useNavigate } from 'react-router-dom'
import { setLoggedIn } from '../reducers/loggedInReducer'
import useField from '../hooks/useField'

const Login = () => {
    const [username, resetUsername] = useField('')
    const [password, resetPassword] = useField('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with:', username.value, password.value)

        try {
            const user = await loginService.login({ 
                username: username.value,
                password: password.value
            })

            localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            blogService.setToken(user.token)
            
            console.log('User: ', user)
            dispatch(setUser(user))
            
            resetUsername('')
            resetPassword('')

            dispatch(setLoggedIn(true))
            navigate('/blogs')
        } catch (exception) {
            console.log(exception)
            dispatch(notify({
                message: 'wrong credentials',
                success: false
            }, 4000))
        }
    }
    
    return (
        <form className={loginForm} onSubmit={handleLogin}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">username</label>
                <input {...username} id="username" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input {...password} id="password" />
            </div>
            <button className={`${buttonStyles} ${loginBtn}`} type="submit">login</button>
        </form>
    )
}

export default Login