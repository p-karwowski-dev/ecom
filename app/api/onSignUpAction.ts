'use server'

import { signUpSchema } from './signUpSchema'

type Fields = Record<string, string>

type FormState = {
  message: string
  fields?: Fields
  issues?: string[]
}

export async function onSignUpAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formObj = Object.fromEntries(formData)
  const parsed = signUpSchema.safeParse(formObj)

  if (!parsed.success) {
    const fields: Fields = {}
    for (const key of Object.keys(formData)) {
      fields[key] = formObj[key].toString()
    }
    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  if (parsed.data.password !== parsed.data.repeatPassword) {
    return { message: 'Password does not match', fields: parsed.data }
  }

  if (!parsed.data.email.includes('@')) {
    return { message: 'Invalid email' }
  }

  return { message: 'User registered' }
}
