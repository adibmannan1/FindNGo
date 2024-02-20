'use client'
import React from 'react'
import CustomButton from './CustomButton'
import '../app/globals.css';
import { Raleway } from 'next/font/google'
import Image from 'next/image';
 
const raleway = Raleway({
  weight: ['500', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const Hero = () => {
  const handleScroll = () => {
    
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className={`hero__title mb-5 ${raleway.className}`}>Trade horsepower, <br/> not headaches.</h1>
        <p className='Hero__subtitle'>Whether chasing a used gem or letting go of your trusty steed, GearShow is your one-stop shop for seamless car transitions. Find your dream car amidst our diverse listings, all vetted for quality and value. Sell your current ride with ease, reaching an engaged pool of potential buyers. From financing tools to secure transactions, we empower you to buy and sell with confidence. So, buckle up and discover the freedom of the open road — your perfect match awaits!</p>
        <CustomButton
          title='Explore'
          containerStyles='bg-[#0043FF] text-white rounded font-bold transition-all duration-200 ease-in-out hover:bg-blue-600 active:bg-blue-300 mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container hidden'>
        <div className='hero__image'>
          <Image src='/car.png' className='object-contain' alt='hero image' 
          fill  sizes="(max-width: 640px)"/>
        </div>
        <div className='hero__image-overlay'/>
      </div>
    </div>
  )
}

export default Hero