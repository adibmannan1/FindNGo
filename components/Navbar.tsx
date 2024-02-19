import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
    
}

const Navbar = () => {
  return (
    <header className='w-full aboslute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image src='/logo.svg' alt='GearShow logo' width={100} height={100} className='object-contain'/>
        </Link>

        <CustomButton 
        title='Sign In' 
        btnType='button'
        containerStyles='text-primary-blue font-bold rounded bg-transparent border-[2px] border-primary-blue min-w-[100px]' 
        />
      </nav>

    </header>
  )
}

export default Navbar