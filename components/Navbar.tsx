import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={70}
          height={18}
          className='object-contain pt-2'
        />
      </Link>

      <CustomButton
        title='Sign In'
        btnType='button'
        containerStyles='text-black font-bold rounded bg-transparent border-[3px] border-black active:bg-black active:text-white hover:bg-white hover:text-black transition duration-200 ease-in-out sm:text-white sm:border-white'
      />
    </nav>
  </header>
);

export default NavBar;