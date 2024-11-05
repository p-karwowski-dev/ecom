import { configureStore } from '@reduxjs/toolkit'
import cmsReducer from './cms/cmsSlice'

export const store = configureStore({
  reducer: {
    cms: cmsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
