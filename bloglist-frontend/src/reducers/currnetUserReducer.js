import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        }
    }
})

export const { setUser } = currentUserSlice.actions

export default currentUserSlice.reducer