import { useFormStatus } from 'react-dom'
import { cn } from '../../app/util/cn'
import { forwardRef, HTMLProps } from 'react'

interface FormSectionProps extends HTMLProps<HTMLInputElement> {
  label: string
  error: string | undefined
}

export const FormField = forwardRef<HTMLInputElement, FormSectionProps>(
  function FormField({ label, name, error, ...inputProps }, ref) {
    const { pending } = useFormStatus()

    return (
      <>
        <div className="sm:col-span-3" ref={ref}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            disabled={pending}
            className={cn({ 'ring-red-700': error })}
            {...inputProps}
          />
          {error && <span className="text-sm text-red-700">* {error}</span>}
        </div>
      </>
    )
  }
)
