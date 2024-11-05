import { createAction } from '@reduxjs/toolkit'

type Payload = {
  primaryText?: string
  secondaryText?: string
  sectionNo: number | null
}

export const editSection = createAction(
  'EDIT_SECTION',
  ({ primaryText, secondaryText, sectionNo }: Payload) => ({
    payload: {
      timeStamp: new Date().toISOString(),
      primaryText,
      secondaryText,
      sectionNo,
    },
  })
)
