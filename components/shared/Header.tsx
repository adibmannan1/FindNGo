import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className='border-b '>
        <header className='flex justify-between max-w-7xl lg:mx-auto md:px-10 xl:px-0 w-full items-center px-4'>
            <div className='lg:mx-auto p-3 md:px-10 xl:px-0 flex flex-1 items-center justify-between'>
                <Link href='/' className='w-36'>
                    <Image src="/assets/images/logo.svg" alt="FindNGo logo" width={30} height={30}/>
                </Link>
            </div>
            <div className='w-full flex-1 ml-[-150px]'>
                <SignedIn>
                    <nav className='md:flex-between hidden max-w-xs justify-center'>
                        <NavItems/>
                    </nav>
                </SignedIn>
            </div>
            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                    <MobileNav/>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full' size='lg'>
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </header>
    </div>
  )
}

export default Header