export interface CmsState {
  isEditMode: boolean
  timeStamp: string | null
  section: Section
  sectionNo: number | null
}

export type Section = {
  primaryText?: string
  secondaryText?: string
}

export type SectionInfo = {
  sectionNo: number
  section: Section
}
