import { cn } from '@/utils/cn';
import React from 'react';
import DashboardNav from './Nav';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const Shell = ({ children, className}: ShellProps) => {
  return (
    <div className={cn("text-lightA h-screen p-5", className)}>
      <DashboardNav />
      {children}
    </div>
  )
}

export default Shell