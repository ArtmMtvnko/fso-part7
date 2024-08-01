import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/currnetUserReducer'
import { initializeUsers } from './reducers/usersReducer'
import { Routes, Route, useMatch } from 'react-router-dom'
import blogService from './services/blogs'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import Users from './components/Users'
import Blogs from './components/Blogs'
import UserInfo from './components/UserInfo'

const App = () => {
  const user = useSelector(state => state.currentUser)
  const users = useSelector(state => state.users)
  console.log(users)
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

      <Routes>
        <Route path="/users/:id" element={<UserInfo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Blogs />} />
      </Routes>
    </div>
  )
}

export default App