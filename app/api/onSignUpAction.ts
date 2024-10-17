'use server'

import { signUpSchema } from './signUpSchema'

type FormState = {
  message: string
  issues?: string[]
}

export async function onSignUpAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formEntries = Object.fromEntries(formData)
  const parsed = signUpSchema.safeParse(formEntries)

  if (!parsed.success) {
    return {
      message: 'Invalid form data',
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  if (!parsed.data.email.includes('a')) {
    return { message: 'Invalid email' }
  }

  return { message: 'User registered' }
}
