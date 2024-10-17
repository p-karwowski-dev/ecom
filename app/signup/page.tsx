'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '../api/signUpSchema'
import { useForm } from 'react-hook-form'
import { FormField } from '../../components/form/FormField'
import { FormSubmitBtn } from '../../components/form/SubmitButton'
import { cn } from '../util/cn'
import { z } from 'zod'
import { onSignUpAction } from '../api/onSignUpAction'
import { useFormState } from 'react-dom'
import { useRef } from 'react'

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(onSignUpAction, {
    message: '',
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.output<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '@gmail.com',
      repeatEmail: '@gmail.com',
      ...(state?.fields ?? {}),
    },
  })

  return (
    <section className="p-10 flex flex-col">
      <div className="flex justify-center pb-4">
        <h1 className="font-bold text-2xl">Create your account</h1>
      </div>

      <div className="text-red-700 text-center">
        {state?.message && !state?.issues && <span>{state.message}</span>}
        {state?.issues && (
          <ul>
            {state.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        )}
      </div>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit(() => formRef.current?.submit())}
        className={cn(
          'grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 lg:w-[800px]'
        )}
      >
        <FormField
          label="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <FormField
          label="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
        <FormField
          label="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        <FormField
          label="Repeat email"
          {...register('repeatEmail')}
          error={errors.repeatEmail?.message}
        />
        <FormField
          label="Password"
          {...register('password')}
          error={errors.password?.message}
        />
        <FormField
          label="Repeat password"
          {...register('repeatPassword')}
          error={errors.repeatPassword?.message}
        />
        <div className="col-span-6 flex justify-center">
          <FormSubmitBtn />
        </div>
      </form>
    </section>
  )
}
