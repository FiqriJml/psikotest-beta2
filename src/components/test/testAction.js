import app from "../../app/firebaseConfig"
import { createAsyncThunk } from "@reduxjs/toolkit"

const db = app.firestore()
const dbTests = db.collection('tests')
const BABSOAL = 'soal'

export const addBabsoal = createAsyncThunk(
  'babsoal/added', async (props) => {
    const {testId, data} = props
    const dbBabsoal = dbTests.doc(testId).collection(BABSOAL)
    const response = await dbBabsoal.add(data)
      .then(() => {
        console.log("Berhasil: ")
      }).catch( err => {
        console.log("Error add bab soal: ", err)
      })
      return response
  }
)

const testId = "gBr3wmonLUu8S3d4pkPV"
const babSoalId = "oZvO4C9oD3T9Gkulg9LK"

export const fetchSoalperBab = createAsyncThunk(
    'soalperbab/fetched', async () => {
        const dbSoal =  dbTests.doc(testId).collection("soal")
        const response =  (await dbSoal.doc(babSoalId).get()).data()
        console.log(response)
        return response
})


export const selectTestList = state => state.firestore.ordered.tests
export const selectBabList = state => state.firestore.ordered.babsoal

export const selectBabsoalById = (state, babId) => {
  const list = state.firestore.ordered.babsoal
  if(!list) return
  return list.find(bab => bab.id === babId)
} 
export const selectTestById = (state, testId) => {
  const tests = state.firestore.ordered.tests
  if(!tests) return
  return tests.find(test => test.id === testId)
}