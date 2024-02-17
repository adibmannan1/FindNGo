import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className=' flex-center flex-between flex-col sm:flex-row gap-4 p-5 text-center'>
        <Link href='/'>
          <Image src="/assets/images/logo.svg" alt="FindNGo logo" width={30} height={30}/>
        </Link>
        <p>© 2024 FindNGo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer