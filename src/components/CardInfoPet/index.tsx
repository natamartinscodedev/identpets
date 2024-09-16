"use client"

import React from 'react'
import Logo from '@/components/Logo/index'
import ButtomRegister from '@/components/buttom/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface typeItems {
  description: string;
}

const Index = ({ description }: typeItems) => {
  return (
    <div className='card_info-pets'>
      <Logo />
      <p>{description}</p>
      <ButtomRegister />
    </div>
  )
}

export default Index