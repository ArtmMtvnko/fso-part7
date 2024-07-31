import { useState } from "react"
import loginService from "../services/login"
import blogService from "../services/blogs"

const Login = ({ setUser, setNotification }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with:', username, password)

        try {
            const user = await loginService.login({ username, password })

            localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            blogService.setToken(user.token)
            
            console.log('User: ', user)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            console.log(exception)
            setNotification({
                message: 'wrong credentials',
                success: false
            })
            setTimeout(() => setNotification(null), 4000)
        }
    }
    
    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">login</button>
        </form>
    )
}

export default Login