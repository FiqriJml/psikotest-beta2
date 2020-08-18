import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import app from "../../app/firebaseConfig"

const initialState = {
    data: {},
    status: 'idle',
    error: null
}
const db = app.firestore()
const dbTests = db.collection('tests')
const testId = "gBr3wmonLUu8S3d4pkPV"
const babSoalId = "oZvO4C9oD3T9Gkulg9LK"

export const fetchSoalperBab = createAsyncThunk(
    'soalperbab/fetched', async () => {
        const dbSoal =  dbTests.doc(testId).collection("soal")
        const response =  (await dbSoal.doc(babSoalId).get()).data()
        console.log(response)
        return response
})

export const tryoutSlice = createSlice({
    name: "tryout",
    initialState,
    reducers: {
    },    
    extraReducers: {
        [fetchSoalperBab.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        },
        
    }
})

export default tryoutSlice.reducer