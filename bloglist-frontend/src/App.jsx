import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/currnetUserReducer'
import blogService from './services/blogs'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import Blogs from './components/Blogs'

// to delete
import userService from './services/users'
import { initializeUsers } from './reducers/usersReducer'
import Users from './components/Users'
userService.getAll().then(data => console.log(data))

const App = () => {
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.currentUser)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setUser(loggedUser))
      blogService.setToken(loggedUser.token)
    }
    dispatch(initializeUsers())
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
      <Users />
      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>

      <h2>blogs</h2>
      <Blogs />
    </div>
  )
}

export default App