import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        loginReducer: (state: any, action: any) => {
            state.user = action.payload
        },
        logoutReducer: (state: any, action: any) => {
            state.user = null
        }
    }
})

export default slice.reducer


const { loginReducer, logoutReducer } = slice.actions

export const login = (payload: any) => async (dispatch: any) =>  {
    try {
        dispatch(loginReducer(payload))
    } catch (e: any) {
        console.error(e.message)
    }
}

// export const logout = () => async (dispatch: any) => {
//     try {
//         dispatch(logoutReducer())
//     } catch (e: any) {
//         console.error(e.message)
//     }
// }