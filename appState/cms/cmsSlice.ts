import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CmsState, SectionInfo } from './types'
import { editSection } from './externalActions'

export const initialState: CmsState = {
  isEditMode: false,
  timeStamp: null,
  section: {
    primaryText: '',
    secondaryText: '',
  },
  sectionNo: null,
}

const cmsSlice = createSlice({
  name: 'cms',
  initialState,
  reducers: {
    toggleEditMode(state) {
      state.isEditMode = !state.isEditMode
      if (!state.isEditMode) {
        resetState(state)
      }
    },
    selectSection(state, action: PayloadAction<SectionInfo>) {
      const { section, sectionNo } = action.payload
      state.section = section
      state.sectionNo = sectionNo
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editSection, (state, action) => {
      const { timeStamp, primaryText, secondaryText } = action.payload
      state.timeStamp = timeStamp
      if (primaryText) state.section.primaryText = primaryText
      if (secondaryText) state.section.secondaryText = secondaryText
      if (!primaryText && !secondaryText) resetState(state)
    })
  },
})

function resetState(state: CmsState) {
  state.section = { ...initialState.section }
  state = initialState
}

export const { selectSection, toggleEditMode } = cmsSlice.actions
export default cmsSlice.reducer
