import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import BlogForm from './components/BlogForm'
import ErrorMessage from './components/ErrorMessage'
import Togglable from './components/Togglable'

const App = () => {
  const [notification, setNotification] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs( blogs )
    })
  }, [user]) // [] ==> [user]

  return (
    <div>
      {user === null
        ? (
          <Togglable buttonLabel="log in">
            <Login
              setUser={setUser}
              setNotification={setNotification}
            />
          </Togglable>
        ) 
        : <LoggedIn user={user} setUser={setUser} />
      }

      <ErrorMessage notification={notification} />
      <Togglable buttonLabel="new blog">
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          setNotification={setNotification}
        />
      </Togglable>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          blogs={blogs}
          setBlogs={setBlogs}
          user={user}
        />
      )}
    </div>
  )
}

export default App