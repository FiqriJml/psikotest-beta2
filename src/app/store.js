import { configureStore } from '@reduxjs/toolkit'
import tryoutReducer from '../components/tryout/tryoutSlice'


const store = configureStore({
  reducer: {
      tryout: tryoutReducer
  },
})

export default store