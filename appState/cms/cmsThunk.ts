import { createAsyncThunk } from '@reduxjs/toolkit'
import { IntroductionPage } from './types'
import { RootState } from '../store'

const cmsAPI = {
  save: async (data: IntroductionPage) => {
    const response = await fetch('/cms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to save Introduction Page')
    }

    return response.json()
  },
}

export const saveIntroductionPage = createAsyncThunk(
  'cms/saveIntroductionPage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    try {
      const response = await cmsAPI.save(state.cms.introductionPage)
      return response.data
    } catch {
      return thunkAPI.rejectWithValue('Failed to save Introduction Page')
    }
  }
)
