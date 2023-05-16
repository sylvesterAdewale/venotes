import { cn } from '@/utils/cn';
import React from 'react';
import Header from './Header';
import Nav from './Nav';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string
}

const Shell = ({ children, className, path}: ShellProps) => {
  return (
    <div className={cn("text-lightA h-screen overflow-hidden", className)}>
      <Header />
      <div className='flex items-stretch'>
        <Nav path={path} className="xl:max-w-xs w-full" />
        <div className='px-6 mt-12 w-full max-w-6xl 2xl:max-w-7xl mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Shell