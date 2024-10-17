export const makeFormData = (data: Record<string, string>): FormData => {
  const formData = new FormData()

  ;(Object.keys(data) as Array<keyof typeof data>).forEach(
    (key: keyof typeof data) => {
      formData.append(key, data[key])
    }
  )

  return formData
}
