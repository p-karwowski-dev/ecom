import { configureStore } from '@reduxjs/toolkit'
import cmsReducer from './cms/cmsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authReducer, cmsApiSlice } from './cms/apiTweeter'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cms: cmsReducer,
    [cmsApiSlice.reducerPath]: cmsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cmsApiSlice.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
