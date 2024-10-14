export function Footer() {
  return (
    <footer className="bg-foreground text-background pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between border-t border-gray-800 mt-8 pt-8">
          <div className="mr-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Subscribe to my newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Get the latest updates and news delivered to your inbox.
            </p>
          </div>

          <form className="mt-5 lg:my-2 sm:flex sm:max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 sm:max-w-xs"
            ></input>
            <button
              type="submit"
              className="mt-3 w-full bg-indigo-600 px-4 py-2 text-white rounded-md sm:ml-3 sm:mt-0 sm:w-auto hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-gray-800 flex justify-between items-center mt-8 pt-8">
          <p className="text-sm text-gray-400">
            © 2020 Your Company, Inc. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <SocialIco
              href="#"
              pathD="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            />
            <SocialIco
              href="#"
              pathD="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            />
            <SocialIco
              href="#"
              pathD="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
            />
            <SocialIco
              href="#"
              pathD="M19.6 3H4.4C2.5 3 1 4.5 1 6.4v11.2C1 19.5 2.5 21 4.4 21h15.2c1.9 0 3.4-1.5 3.4-3.4V6.4C23 4.5 21.5 3 19.6 3zM9.75 16.5V7.5l6.75 4.5-6.75 4.5z"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIco({ href, pathD }: { href: string; pathD: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-gray-400 hover:text-white"
      fill-rule="evenodd"
      aria-hidden="true"
    >
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={pathD}></path>
      </svg>
    </a>
  )
}
