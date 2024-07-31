import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        removeNotification() {
            return null
        }
    }
})

const { setNotification, removeNotification } = notificationSlice.actions

export const notify = (notification, timeout) => {
    return (dispatch) => {
        dispatch(setNotification(notification))
        setTimeout(() => {
            dispatch(removeNotification())
        }, timeout)
    }
}

export default notificationSlice.reducer