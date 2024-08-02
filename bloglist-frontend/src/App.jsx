import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { setUser } from './reducers/currnetUserReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/usersReducer'
import { setLoggedIn } from './reducers/loggedInReducer'
import blogService from './services/blogs'
import Notification from './components/Notification'
import Users from './components/Users'
import Blogs from './components/Blogs'
import UserInfo from './components/UserInfo'
import BlogInfo from './components/BlogInfo'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  const loggedIn = useSelector(state => state.loggedIn)
  const user = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogappUser')
  
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)

      if (blogService.isTokenExpired(loggedUser.token)) {
        dispatch(setUser(null))
        dispatch(setLoggedIn(false))
        return
      }

      blogService.setToken(loggedUser.token)
      dispatch(setUser(loggedUser))
      dispatch(setLoggedIn(true))
    } else {
      dispatch(setLoggedIn(false))
    }
  }, [])
  
  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUsers())
  }, [user]) // [] ==> [user]

  return (
    <div style={{ fontFamily: 'cursive' }}>
      <NavBar />

      <Notification />

      <Routes>
        <Route path="/" element={<h1>Wellcome to Blog-App</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserInfo />} />
        <Route path="/blogs" element={loggedIn ? <Blogs /> : <Navigate replace to="/login" />} />
        <Route path="/blogs/:id" element={<BlogInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App