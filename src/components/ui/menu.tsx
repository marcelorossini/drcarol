'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollPosition = window.scrollY

            // Determina se o menu deve ser sticky
            setIsSticky(scrollPosition > 300)

            // Esconde/mostra baseado na direção da rolagem
            if (currentScrollY > lastScrollY) {
                // Rolando para baixo
                setIsVisible(false)
            } else {
                // Rolando para cima
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

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
        <nav className={`w-full lg:text-xl p-8 transition-all duration-300 fixed top-0 right-0 z-100 
            ${isSticky ? 'bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-100% to-[transparent]' : 'bg-transparent'}
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="hidden lg:flex">
                    <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
                </div>
                <ul className="flex flex-row items-start divide-y-0 divide-x-2 divide-black">
                    <li className="w-full px-4">
                        <button onClick={() => scrollToSection('home')} className="hover:opacity-70 transition-opacity">
                            HOME
                        </button>
                    </li>
                    <li className="w-full px-4">
                        <button onClick={() => scrollToSection('tratamentos')} className="hover:opacity-70 transition-opacity">
                            TRATAMENTOS
                        </button>
                    </li>
                    <li className="w-full px-4">
                        <button onClick={() => scrollToSection('contato')} className="hover:opacity-70 transition-opacity">
                            CONTATO
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}