import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        initProducts: (state: any, action: any) => {
            state.products = action.payload
        }
    }
})

export default slice.reducer

const { initProducts } = slice.actions

export const setProducts = (payload: any) => async (dispatch: any) => {
    try {
        dispatch(initProducts(payload))
    } catch (e: any) {
        console.log(e.message)
    }
}
