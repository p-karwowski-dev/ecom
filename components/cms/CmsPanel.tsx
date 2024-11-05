import { editSection } from '../../appState/cms/externalActions'
import { useAppDispatch, useAppSelector } from '../../appState/storeHooks'
import { ChangeEvent } from 'react'

export default function CmsPanel() {
  const dispatch = useAppDispatch()
  const isEditing = useAppSelector((state) => state.cms.isEditMode)
  const sectionNo = useAppSelector((state) => state.cms.sectionNo)

  function handleEdit(event: ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault()
    event.stopPropagation()

    dispatch(
      editSection({
        sectionNo,
        [event.target.name]: event.target.value,
      })
    )
  }

  if (!isEditing) return null
  return (
    <aside className="min-h-screen flex flex-1 max-w-lg transition-all">
      <div className="fixed min-h-screen w-[32rem] flex flex-col justify-center items-center bg-blue-800">
        <form id="editForm" className="">
          <label htmlFor="primaryText" className="text-white text-center">
            Title
          </label>
          <textarea
            id="primaryText"
            name="primaryText"
            className="rounded-md p-2"
            rows={1}
            cols={40}
            onChange={handleEdit}
          />
          <label
            htmlFor="secondaryText"
            className="text-white text-center mt-4"
          >
            Content
          </label>
          <textarea
            id="secondaryText"
            name="secondaryText"
            className="rounded-md p-2"
            rows={20}
            cols={40}
          />
        </form>
        <button
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-md"
          form="editForm"
          type="submit"
        >
          Save
        </button>
      </div>
    </aside>
  )
}
