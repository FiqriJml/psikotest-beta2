import app, {storage} from "../../app/firebaseConfig"
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
export const addSoalGroup = createAsyncThunk(
  'soalGroup/added', async (props) => {
    const {testId, babId, data, index} = props
    const dbSoal = dbTests.doc(testId).collection(BABSOAL).doc(babId)
    let list_soal = (await dbSoal.get()).data().list_soal
    const soalGroup = list_soal[index].soalGroup || []
    soalGroup.push(data)
    list_soal[index].soalGroup = soalGroup

    const response = await dbSoal.update({
          list_soal
      }).then(() => {
        console.log("Berhasil: ")
      }).catch( err => {
        console.log("Error add soal: ", err)
      })
    return response
  }
)
// coba
export const uploadImage = (props) => {
  const {testId, babId, imgNo, imageAsFile} = props
  const path = `/${testId}/${babId}/contoh`
  const imageName = `/${path}/${imgNo}`
  const uploadTask = storage.ref(imageName).put(imageAsFile)
  return uploadTask
}
// upload Image ke direktori yang tepat
export const uploadImageTo = ({imagePath, imageAsFile}) => {
  const uploadTask = storage.ref(imagePath).put(imageAsFile)
  return uploadTask
}
export const getDownloadURL = async (imageName) => {
  const response = await storage.ref(imageName).getDownloadURL()
  return response
}
export const addContohwithImage = createAsyncThunk(
  'contoh-soal-image/added', async (props) => {
    const {testId, babId, imageAsFile, ket} = props
    const dbSoal = dbTests.doc(testId).collection(BABSOAL).doc(babId)
    const path = `/${testId}/${babId}/contoh`
    if(ket === "opsi"){
      const imageName = `/${path}/opsi`
      const uploadTask = storage.ref(imageName).put(imageAsFile)
      uploadTask.on('state_changed', (err) => console.log(err))
      const opsi_contoh_src = await storage.ref(imageName).getDownloadURL()
      .then(
       fireBaseUrl => {return fireBaseUrl}
      )
      dbSoal.update({ opsi_contoh_src }).catch( err => {
        console.log("Error save src opsi image contoh soal: ", err)
      })
    }else{
      console.log("bukan opsi")
      const imageName = `/${path}/coba`
      const uploadTask = storage.ref(imageName).put(imageAsFile)
      console.log(uploadTask)
      return uploadTask
    }
  }
)
export const addContohsoal = createAsyncThunk(
  'contoh-soal/added', async (props) => {
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