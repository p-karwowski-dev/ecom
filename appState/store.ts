import { configureStore } from '@reduxjs/toolkit'
import cmsReducer from './cms/cmsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    cms: cmsReducer,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
