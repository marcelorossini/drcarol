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

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            const offsetTop = section.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={`w-fit p-4 md:p-8 transition-all duration-300 fixed top-0 right-0 z-100 ${isSticky ? 'bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-50% to-[transparent]': ''}`}>
            <ul className="flex flex-col md:flex-row items-start divide-y md:divide-y-0 md:divide-x-2 divide-black">
                <li className="w-full md:w-auto text-left px-4">
                    <button onClick={() => scrollToSection('home')} className="hover:opacity-70 transition-opacity">
                        HOME
                    </button>
                </li>
                <li className="w-full md:w-auto text-left px-4">
                    <button onClick={() => scrollToSection('tratamentos')} className="hover:opacity-70 transition-opacity">
                        TRATAMENTOS
                    </button>
                </li>
                <li className="w-full md:w-auto text-left px-4">
                    <button onClick={() => scrollToSection('contato')} className="hover:opacity-70 transition-opacity">
                        CONTATO
                    </button>
                </li>
            </ul>
        </nav>
    )
}