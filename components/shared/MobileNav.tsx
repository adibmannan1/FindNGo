import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import NavItems from './NavItems'


const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image src='/assets/icons/menu.svg' alt='menu' 
          width={30} height={30}/>
        </SheetTrigger>
        <SheetContent className="w-[70vw] flex flex-col gap-6 bg-white md:hidden">
          <h1 className='text-3xl font-bold leading-5 tracking-tighter'>FindNGo</h1>
          <Separator className="border border-gray-80" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav