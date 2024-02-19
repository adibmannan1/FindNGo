'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, containerStyles, btnType, handleClick}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType ||`button`}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
      <span>{title}</span>
    </button>
  )
}

export default CustomButton