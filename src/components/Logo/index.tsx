'use client'

import Image from 'next/image'
import React from 'react'
import StartIcon from '@/images/IconStartLogo.png'

const Logo = () => {
    return (
        <div className='card_logo'>
            Identi
            <span>patas</span>
            <Image src={StartIcon} alt='' />
        </div>
    )
}

export default Logo