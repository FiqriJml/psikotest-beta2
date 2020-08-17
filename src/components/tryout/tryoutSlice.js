import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {
        contoh: [
            {
               soal: "Seekor kuda mempunyai kesamaan terbanyak dengan seekor.....",
               opsi: ["kucing","bajing","keledai","lembu","anjing"]
            },
            {
               soal: 'Lawannya "Harapan" ialah....',
               opsi: ["duka","putus asa","sengsara","cinta","benci"]
            },
        ]
    },
    status: 'idle',
    error: null
}

export const tryoutSlice = createSlice({
    name: "tryout",
    initialState,
    reducers: {
    },
})

export default tryoutSlice.reducer