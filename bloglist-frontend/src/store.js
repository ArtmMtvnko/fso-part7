import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'
import currentUserReducer from './reducers/currnetUserReducer'
import usersReducer from './reducers/usersReducer'
import loggedInReducer from './reducers/loggedInReducer'

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        notification: notificationReducer,
        currentUser: currentUserReducer,
        users: usersReducer,
        loggedIn: loggedInReducer
    },
})

export default store
