import Image from 'next/image';
import { cn } from '@/utils/cn';


const Logo = () => {
  return (
    <Image src="/logo.svg" width={50} height={50} className='w-9 h-9' alt='Venotes' />
  )
}

export default Logo