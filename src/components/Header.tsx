import React from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icons'
import { useAtom } from 'jotai'
import { menuAtom } from './Nav'

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className }: DashboardNavProps) => {
    const [isOpen, setIsOpen] = useAtom(menuAtom)
  return (
    <header className={cn('px-5 py-3', className)}>
        <div>
            <ul className='flex items-center'>
                <li className=''>
                    <Link href='/'><Logo /></Link>
                </li>
                <span className='text-grey text-2xl px-5'>/</span>
                <li>
                    <Link href='/'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Link>
                </li>
            </ul>
        </div>
        <button onClick={e => setIsOpen(!isOpen)} className='p-2 xl:hidden hover:bg-darkB rounded-md absolute top-2 right-5'>
            <Icon.menubar />
        </button>
    </header>
  )
}

export default Header