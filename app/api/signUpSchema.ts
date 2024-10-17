import { z } from 'zod'

export const signUpSchema = z.object({
  firstName: z.string().trim().min(2, {
    message: 'Invalid first name',
  }),
  lastName: z.string().trim().min(2, {
    message: 'Invalid second name',
  }),
  email: z.string().trim().email({
    message: 'Invalid email address',
  }),
  repeatEmail: z.string().trim().email({
    message: 'Invalid email address',
  }),
  password: z.string().trim().min(4, {
    message: 'At least 4 characters required',
  }),
  repeatPassword: z.string().trim().min(4, {
    message: 'At least 4 characters required',
  }),
})
