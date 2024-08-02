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
import userService from '../services/users'

const SignUp = () => {
    const [username, resetUsername] = useField('text', 'username')
    const [password, resetPassword] = useField('text', 'password')
    const [name, resetName] = useField('text', 'name')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with:', username.value, password.value)

        try {
            const signedUpUser = await userService.create({ 
                username: username.value,
                password: password.value,
                name: name.value
            })

            navigate('/login')
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
            <h1>Sign Up</h1>
            <div>
                <label htmlFor="username">username</label>
                <input {...username} id="username" placeholder="username for logging in" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input {...password} id="password" />
            </div>
            <div>
                <label htmlFor="password">name</label>
                <input {...name} id="password" placeholder="your name, other users will see its" />
            </div>
            <button className={`${buttonStyles} ${loginBtn}`} type="submit">sign up</button>
        </form>
    )
}

export default SignUp
