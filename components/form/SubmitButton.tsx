import { ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'
import { cn } from '../../app/util/cn'

export function FormSubmitBtn({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'md:w-36 rounded-md px-4 py-2 mt-4 text-sm font-semibold shadow-sm ring-1 ring-inset',
        'ring-gray-300 bg-foreground text-background hover:bg-gray-600',
        {
          'bg-grey-100 hover:bg-grey-100 text-foreground border-background':
            pending,
        }
      )}
      {...rest}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
