'use client'
import React from 'react'
import CustomButton from './CustomButton'
import '../app/globals.css';
import Image from 'next/image';
import { Space_Grotesk} from 'next/font/google'
import { GridBackground } from './GridBackground';
 
const grotesk = Space_Grotesk({
  weight: ['500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const Hero = () => {
  const handleScroll = () => {
    
  }

  return (
    <div className='hero h-[60vh] md:h-[84vh] mt-5'>
      <GridBackground />
      <div className='flex flex-col flex-1 justify-between pt-36 padding-x'>
        <h1 className={`hero__title md:mb-5 poppins`}>Browse the <br /> best cars</h1>
        <p className='hero__subtitle manrope'>Whether chasing a used gem or letting go of your trusty steed, GearShow is your one-stop shop for seamless car transitions. Find your dream car amidst our diverse listings, all vetted for quality and value. Sell your current ride with ease, reaching an engaged pool of potential buyers.</p>
        <div>
          <CustomButton
            title='Explore'
            containerStyles='bg-[#f5993d] text-[#381d2a] rounded font-bold transition-all duration-200 ease-in-out hover:bg-[#ba5624] hover:text-white active:bg-blue-300 mt-10'
            handleClick={handleScroll}
          />
        </div>
      </div>
      <div className='hero__image-container hidden'>
        <div className='hero__image'>
          <Image src='/car3.png' className='object-contain mt-5' alt='hero image' 
          fill  sizes="(max-width: 540px)"/>
        </div>
      </div>
    </div>
  )
}

export default Hero