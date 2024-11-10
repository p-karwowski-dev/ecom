import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectCms = (state: RootState) => state.cms

export const selectIntroductionSections = createSelector(
  selectCms,
  (state) => state.section
)
