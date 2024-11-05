import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Section } from './types'

interface SaveData extends Section {
  timeStamp: string
  sectionNo: number | null
}

const cmsAPI = {
  save: async (data: SaveData) => {
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

export const saveSection = createAsyncThunk(
  'cms/saveSection',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const { timeStamp, sectionNo, section } = state.cms
    if (!timeStamp) return
    try {
      const response = await cmsAPI.save({ timeStamp, sectionNo, ...section })
      return response.data
    } catch {
      return thunkAPI.rejectWithValue('Failed to save Introduction Page')
    }
  }
)
