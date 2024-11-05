import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectSelf = (state: RootState) => state.cms

export const selectIntroductionSections = createSelector(
  selectSelf,
  (state) => state.section
)
