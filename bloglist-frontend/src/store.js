import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'
import currentUserReducer from './reducers/currnetUserReducer'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        notification: notificationReducer,
        currentUser: currentUserReducer,
        users: usersReducer
    },
})

export default store
