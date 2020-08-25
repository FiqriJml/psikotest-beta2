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
})

export default testSlice.reducer