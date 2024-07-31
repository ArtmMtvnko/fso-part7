const LoggedIn = ({ user, setUser }) => {
    const hangleLoggout = () => {
        localStorage.removeItem('loggedBlogappUser')
        setUser(null)
    }
    
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={hangleLoggout}>logout</button>
        </div>
    )
}

export default LoggedIn