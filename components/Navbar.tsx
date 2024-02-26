import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full mt-5 absolute z-10'>
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
        containerStyles='text-[#121619da] font-bold rounded bg-transparent border-[3px] border-[#121619da] hover:bg-[#121619da] hover:text-white transition duration-200 ease-in-out'
      />
    </nav>
  </header>
);

export default NavBar;