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
export const addsoal = createAsyncThunk(
  'soal/added', async (props) => {
    const {testId,babId, data} = props
    const dbSoal = dbTests.doc(testId).collection(BABSOAL).doc(babId)
    const list_soal = (await dbSoal.get()).data().list_soal

    const nextSoal = list_soal || []

    nextSoal.push(data)

    const response = await dbSoal.update({
          list_soal: nextSoal
      }).then(() => {
        console.log("Berhasil: ")
      }).catch( err => {
        console.log("Error add soal: ", err)
      })
    return response
  }
)
export const addContohsoal = createAsyncThunk(
  'soal/added', async (props) => {
    const {testId, babId, data} = props
    const dbSoal = dbTests.doc(testId).collection(BABSOAL).doc(babId)
    const list_contoh = (await dbSoal.get()).data().list_contoh

    const nextSoal = list_contoh || []

    nextSoal.push(data)

    const response = await dbSoal.update({
          list_contoh: nextSoal
      }).then(() => {
        console.log("Berhasil: ")
      }).catch( err => {
        console.log("Error add soal: ", err)
      })
    return response
  }
)

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