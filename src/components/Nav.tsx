import Link from 'next/link'
import React, { useState } from 'react'
import { Icon } from '@/components/Icons'
import { cn } from '@/utils/cn'
import FolderList from './Folders'
import { atom, useAtom } from 'jotai'
import Folders from './Folders'

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
    path: string
}

export const menuAtom = atom(false)

const Nav = ({ className, path }: NavProps) => {
    const [isOpen] = useAtom(menuAtom);

  return (
    <div className={cn('w-full absolute xl:relative lg:w-1/2 px-5 transition-all ease-in-out xl:transform xl:-translate-x-[0]', isOpen  ? 'transform -translate-x-[0]' : 'transform -translate-x-[110%]', className)}>
        <div className='mt-10'>
            <ul className='flex flex-col justify-start font-medium gap-y-3'>
                <Link href='/recent' className={cn(path === '/recent' && 'bg-darkB','w-full h-[50px] hover:bg-darkB transition-all ease-in-out duration-200 rounded-xl flex gap-x-3 items-center p-3')}>
                    <Icon.clock /><span>Recent</span>
                </Link>
                <Link href='/trash' className={cn(path === '/trash' && 'bg-darkB','w-full h-[50px] hover:bg-darkB transition-all ease-in-out duration-200 rounded-xl flex gap-x-3 items-center p-3')}>
                    <Icon.trash /><span>Trash</span>
                </Link>
            </ul>
            <Folders />
        </div>
    </div>
  )
}

export default Nav