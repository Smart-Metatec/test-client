import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        loginReducer: (state, action) => {
            state.user = action.payload
        },
        logoutReducer: (state, action) => {
            state.user = null
        }
    }
})

export default slice.reducer


const { loginReducer, logoutReducer } = slice.actions

export const login = (payload) => async dispatch =>  {
    try {
        dispatch(loginReducer(payload))
    } catch (e) {
        console.error(e.message)
    }
}

export const logout = () => async dispatch => {
    try {
        return dispatch(logoutReducer())
    } catch (e) {
        console.error(e.message)
    }
}