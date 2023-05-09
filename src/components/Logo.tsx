import Image from 'next/image';
import cva from 'class-variance-authority';

const Logo = () => {
  return (
    <Image src="/logo.svg" height={50} width={50} alt='Venotes' />
  )
}

export default Logo