"use client"
import React, { useState, useEffect } from 'react';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarUrl } from '@/utils';
import Image from 'next/image';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, city_mpg, make, model, fuel_type, transmission, drive } = car;
  const [carRent, setCarRent] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Calculate car rent after initial render
    const calculatedRent = calculateCarRent(city_mpg, year);
    setCarRent(calculatedRent);
  }, [])

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>{make} {model}</h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
        €
        </span>
          {carRent}
        <span className='self-end text-[14px] font-semibold'>
          / Month
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateCarUrl(car)} alt='car image' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray-500'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='tire' />
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='gas' />
            <p className='text-[14px]'>
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-md bg-[#ffa552]'
            textStyles='text-white font-medium text-[14px] leading-[17px] font-bold poppins'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;