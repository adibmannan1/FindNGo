'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchBar = ({setManufacturer, setModel}:{setManufacturer:(manufacturer:string)=>void, setModel:(model:string)=>void}) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const router = useRouter()

    const SearchButton = ({otherSearchClasses}:{otherSearchClasses:string}) => (
      <button type='submit' className={`-ml-3 z-10 ${otherSearchClasses}`}>
        <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain' />
      </button>
    )
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(searchModel === '' && searchManufacturer === ''){
        return alert('Nothing typed in the seach bar.')
      }
      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer}/>
          <SearchButton otherSearchClasses='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image src='/model-icon.png' alt='model icon' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' />
          <input type='text' name='model' value={searchModel} 
          onChange={e => setSearchModel(e.target.value)} placeholder='Benz' className='searchbar__input'/>
          <SearchButton otherSearchClasses='sm:hidden'/>
        </div>
          <SearchButton otherSearchClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar
