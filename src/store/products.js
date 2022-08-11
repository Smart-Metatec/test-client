import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        initProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export default slice.reducer

const { initProducts } = slice.actions

export const setProducts = (payload) => async dispatch => {
    try {
        dispatch(initProducts(payload))
    } catch (e) {
        console.log(e.message)
    }
}
