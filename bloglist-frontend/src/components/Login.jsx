import { useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
import { setUser } from '../reducers/currnetUserReducer'
import { buttonStyles } from '../styles/button'
import { loginBtn, loginForm } from '../styles/login'
import { useNavigate } from 'react-router-dom'
import { setLoggedIn } from '../reducers/loggedInReducer'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with:', username, password)

        try {
            const user = await loginService.login({ username, password })

            localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            blogService.setToken(user.token)
            
            console.log('User: ', user)
            dispatch(setUser(user))
            
            setUsername('')
            setPassword('')

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
                <input
                    data-testid="username"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input
                    data-testid="password"
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button className={`${buttonStyles} ${loginBtn}`} type="submit">login</button>
        </form>
    )
}

export default Login