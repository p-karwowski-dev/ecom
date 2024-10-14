'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, ReactNode } from 'react'
import { cn } from '@/public/styles/utils'

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-foreground text-background">
      <div className="flex justify-between items-center min-h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl inline">Mea Anderson</h1>
          <span className="hidden lg:inline ml-4 text-xl text-gray-400 italic">
            Professional coach
          </span>
        </div>
        <div>{children}</div>
      </div>
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      className={cn(
        'p-4 mx-2 rounded-xl transition duration-300',
        pathname === props.href && 'bg-background text-foreground',
        pathname !== props.href && 'hover:bg-focus'
      )}
    ></Link>
  )
}
