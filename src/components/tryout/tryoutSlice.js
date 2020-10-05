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
        return response
})


export const fetchSoalAll = createAsyncThunk(
    'allSoal/fetched', async () => {
        const dbSoal =  dbTests.doc(testId).collection("soal")
        const response = await dbSoal.orderBy("no_bab").get().then( querySnapshot => {
            const data = []
            querySnapshot.forEach(function(doc) {
                data.push(doc.data())
            })
            return data
        }).catch( error => {    
            console.log("Error getting cached document:", error);
        })
        return response
    }
)

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
        [fetchSoalAll.fulfilled]: (state, action) => {
            state.status = "succeeded"
            // state.data = []
            // state.data = state.data.concat(action.payload)
            state.data = action.payload
        },
        
    }
})

export default tryoutSlice.reducer