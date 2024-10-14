interface FormSectionProps {
  id: string
  type: 'text' | 'email' | 'password' | 'tel' | 'number'
  title: string
}

export const FormSection = ({ id, type, title }: FormSectionProps) => {
  return (
    <>
      {/* <div className="sm:col-span-3"> */}
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} placeholder={title} />
      {/* </div> */}
    </>
  )
}
