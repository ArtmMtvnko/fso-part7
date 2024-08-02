import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/currnetUserReducer'
import { initializeUsers } from './reducers/usersReducer'
import { Routes, Route, Navigate } from 'react-router-dom'
import blogService from './services/blogs'
import Notification from './components/Notification'
import Users from './components/Users'
import Blogs from './components/Blogs'
import UserInfo from './components/UserInfo'
import BlogInfo from './components/BlogInfo'
import NavBar from './components/NavBar'
import Login from './components/Login'

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
    <div style={{ fontFamily: 'cursive' }}>
      <NavBar />

      <Notification />

      <Routes>
        <Route path="/" element={<h1>Wellcome to Blog-App</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserInfo />} />
        <Route path="/blogs" element={user ? <Blogs /> : <Navigate replace to="/login" />} />
        <Route path="/blogs/:id" element={<BlogInfo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App