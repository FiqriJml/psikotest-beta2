import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import app from "../../app/firebaseConfig"

const initialState = {
    data: {},
    status: 'idle',
    error: null
}
const db = app.firestore()
const dbTests = db.collection('tests')

export const testSlice = createSlice({
    name: "tryout",
    initialState,
    reducers: {
    },    
    extraReducers: {
        [fetchSoalperBab.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        },
        [fetchSoalAll.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.data = []
            state.data = state.data.concat(action.payload)
        },
    }
})

export default testSlice.reducer