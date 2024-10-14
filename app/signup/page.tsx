'use client'

import { FormSection } from '../../components/form/FormSection'

export default function Login() {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    console.log(event.currentTarget)
    console.log(formData.get('lastName'))
  }

  return (
    <section className="p-10 flex flex-col">
      <div className="flex justify-center pb-4">
        <h1 className="font-bold text-2xl">Create account your account</h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 lg:w-[800px]"
      >
        <FormSection id="firstName" title="First name" type="text" />
        <FormSection id="lastName" title="Last name" type="text" />
        <FormSection id="email" title="Email" type="email" />
        <FormSection id="repeatEmail" title="Repeat email" type="email" />
        <FormSection id="password" title="Password" type="password" />
        <FormSection
          id="repeatPassword"
          title="Repeat password"
          type="password"
        />
        <input type="submit" placeholder="save" />
        <div className="col-span-6 flex justify-center">
          <button
            type="submit"
            className="md:w-36 rounded-md px-4 py-2 mt-4 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 bg-foreground text-background hover:bg-gray-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  )
}
