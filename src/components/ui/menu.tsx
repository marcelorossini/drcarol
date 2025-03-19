'use client'

import { useEffect, useState } from 'react'

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsSticky(scrollPosition > 100) 
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`w-full bg-[#d2b9a5] p-4 transition-all duration-300 ${
            isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
        }`}>
            <ul className="flex justify-between items-center divide-x-2">
                <li className="flex-1 text-center px-4">HOME</li>
                <li className="flex-1 text-center px-4">TRATAMENTOS</li>
                <li className="flex-1 text-center px-4">CONTATO</li>
            </ul>
        </nav>
    )
}