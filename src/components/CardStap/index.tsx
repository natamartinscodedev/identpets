"use client"

import Image from 'next/image'
import React from 'react'

interface typeItems {
    img: any,
    title: string,
    description: string
}

const Index = ({ img, title, description }: typeItems) => {
    return (
        <div className='card_steps'>
            <Image src={img} alt='' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Index