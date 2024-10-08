"use client"

import Image, { StaticImageData } from 'next/image'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface typeItemsStep {
    img: string | StaticImageData,
    title: string,
    description: string
}

const Index = ({ img, title, description }: typeItemsStep) => {
    return (
        <div className='card_steps'>
            <Image src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Index