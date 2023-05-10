import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {}

const DashboardNav = ({ className, children }: DashboardNavProps) => {
  return (
    <nav>
        <div>
            <ul className='flex'>
                <li>
                    <Link href='/'><Logo /></Link>
                </li>
                <span className='text-grey text-3xl px-5'>/</span>
                <li>
                    <Link href='/'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default DashboardNav