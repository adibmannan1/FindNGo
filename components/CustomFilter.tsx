'use client'
import React, {useState, Fragment} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps, OptionProps } from '@/types'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title, options, setFilter}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {
        setSelected(e)
        setFilter(e.value)
      }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-[#121619da]"
              aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in-out duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            enter="transition ease-in-out duration-250"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <Listbox.Options style={{ scrollbarWidth: 'none'}} className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-sm ring-1 ring-[#121619da] ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-cyan-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-[#121619da]' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter