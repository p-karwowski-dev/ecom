'use client'
import { MdEditSquare } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '@/appState/storeHooks'
import { cn } from '@/app/util/cn'
import { toggleEditMode } from '../../appState/cms/cmsSlice'

export function CmsButton() {
  const isEditing = useAppSelector((state) => state.cms.isEditMode)
  const dispatch = useAppDispatch()

  return (
    <button
      className={cn(
        'fixed bottom-2 left-2 h-9 w-9 bg-red-500 text-white rounded-md flex items-center justify-center',
        { 'bg-green-500': isEditing }
      )}
      onClick={(e) => {
        e.preventDefault()
        dispatch(toggleEditMode())
      }}
    >
      <MdEditSquare className="inline-block ml-1 w-5 h-5" />
    </button>
  )
}
