import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='flex w-full border-b items-center px-4'>
        <div className='max-w-7xl lg:mx-auto p-3 md:px-10 xl:px-0 w-full flex items-center justify-between'>
            <Link href='/' className='w-36'>
                <Image src="/assets/images/logo.svg" alt="FindNGo logo" width={30} height={30}/>
            </Link>
        </div>
        <SignedIn>
            <nav className='md:flex-between hidden w-full max-w'>
                <NavItems/>
            </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>

            </SignedIn>
            <SignedOut>
                <Button asChild className='rounded-full' size='lg'>
                    <Link href='/sign-in'>Login</Link>
                </Button>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header