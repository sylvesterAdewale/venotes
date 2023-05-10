import Image from 'next/image';
import cva from 'class-variance-authority';

const Logo = () => {
  return (
    <Image src="/logo.svg" height={30} width={30} alt='Venotes' />
  )
}

export default Logo