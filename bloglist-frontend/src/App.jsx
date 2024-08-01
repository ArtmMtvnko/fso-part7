import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import blogService from './services/blogs'
import Blog from './components/Blog'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import userService from './services/users'
userService.getAll().then(data => console.log(data))

const App = () => {
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setUser(loggedUser))
      blogService.setToken(loggedUser.token)
    }
  }, [])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [user]) // [] ==> [user]

  return (
    <div>
      {user === null
        ? (
          <Togglable buttonLabel="log in">
            <Login />
          </Togglable>
        ) 
        : <LoggedIn />
      }

      <Notification />

      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>

      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App