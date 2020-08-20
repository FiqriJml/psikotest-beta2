import { configureStore } from '@reduxjs/toolkit'
import { firestoreReducer, reduxFirestore, createFirestoreInstance } from 'redux-firestore'

import firebase, {firebaseConfig} from './firebaseConfig'

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

const storeAdmin = configureStore({
  reducer: {
      firestore: firestoreReducer
  },
  enhancers: [reduxFirestore(firebaseConfig)]
})

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: storeAdmin.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export default storeAdmin