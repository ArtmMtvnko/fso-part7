import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload
        },
        appendBlog(state, action) {
            return [...state, action.payload]
        },
        removeBlog(state, action) {
            return state.filter(blog => blog.id !== action.payload)
        },
        alterBlog(state, action) {
            return state.map(blog => blog.id === action.payload.id ? action.payload : blog)
        },
        appendComment(state, action) {
            const blog = state.find(blog => blog.id === action.payload.blog)
            blog.comments = [...blog.comments, action.payload]
        }
    },
})

const { setBlogs, appendBlog, removeBlog, alterBlog, appendComment } = blogSlice.actions

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        dispatch(setBlogs(blogs))
    }
}

export const deleteBlog = (id) => {
    return async (dispatch) => {
        await blogService.deleteBlog(id)
        dispatch(removeBlog(id))
    }
}

export const addBlog = (blogDto) => {
    return async (dispatch) => {
        const createdBlog = await blogService.createBlog(blogDto)
        dispatch(appendBlog(createdBlog))
    }
}

export const updateBlog = (id, blogDto) => {
    return async (dispatch) => {
        const updatedBlog = await blogService.updateBlog(id, blogDto)
        dispatch(alterBlog(updatedBlog))
    }
}

export const addComment = appendComment

export default blogSlice.reducer
