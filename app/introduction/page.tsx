'use client'
import Image from 'next/image'
import { useAppSelector } from '../../appState/storeHooks'

export default function Service() {
  const isEdited = useAppSelector((state) => !!state.cms.timeStamp)
  const sectionNo = useAppSelector((state) => state.cms.sectionNo)
  const { primaryText, secondaryText } = useAppSelector(
    (state) => state.cms.section
  )

  return (
    <section className="">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="flex flex-col lg:flex-row items-center space-x-10">
        <figure className="hidden lg:block">
          <Image
            width="600"
            height="600"
            alt="teacher image"
            src="/images/introduction.jpeg"
            className="rounded-2xl"
          />
        </figure>
        <div>
          <blockquote className="mb-12 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
            <h1>
              “To live a happy life requires living up to one&apos;s full
              potential, finding the limits, and crossing them.”
            </h1>
          </blockquote>

          <div className="flex space-x-6 lg:space-x-0">
            <figure className="lg:hidden">
              <Image
                width="100"
                height="100"
                alt="teacher image"
                src="/images/introduction.jpeg"
                className="mx-auto my-auto rounded-2xl"
              />
            </figure>
            <div className="flex justify-center flex-col space-y-2">
              <div className="font-semibold">Mea Anderson</div>
              <div className="text-gray-600">Professional coach</div>
            </div>
          </div>
        </div>
      </div>

      <article className="mt-12">
        <h2 className="text-xl font-semibold my-4">About Me</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text.
        </p>

        <h2 className="text-xl font-semibold my-4">Experience</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text.
        </p>

        {isEdited && !sectionNo && (
          <>
            <h2 className="text-xl font-semibold my-4">{primaryText || ''}</h2>
            <p>{secondaryText || ''}</p>
          </>
        )}
      </article>
    </section>
  )
}
