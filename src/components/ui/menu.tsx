'use client'

import { useEffect, useState } from 'react'

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsSticky(scrollPosition > 10) 
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`w-full p-8 transition-all duration-300 fixed top-0 left-0 right-0 z-100 ${isSticky ? 'bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-50% to-[transparent]': ''}`}>
            <ul className="flex justify-between items-center divide-x-2 divide-black">
                <li className="flex-1 text-center px-4">HOME</li>
                <li className="flex-1 text-center px-4">TRATAMENTOS</li>
                <li className="flex-1 text-center px-4">CONTATO</li>
            </ul>
        </nav>
    )
}