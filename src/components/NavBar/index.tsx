"use client"

import React from 'react'
import Link from "next/link";
import Logo from '@/components/Logo/index'

const Index = () => {
    return (
        <>
            <nav className="card_navbar">
                <Logo />
                <ul className="box_links-navigation">
                    <li><Link href='' target="__blank">Home</Link></li>
                    <li><Link href='' target="__blank">Quem somos</Link></li>
                    <li><Link href='' target="__blank">Serviçes</Link></li>
                    <li><Link href='' target="__blank">Como fazer</Link></li>
                    <li><Link href='' target="__blank">Clientes</Link></li>
                </ul>
                <button className='btn_menu'>Menu</button>
            </nav>
        </>
    )
}

export default Index