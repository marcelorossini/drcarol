'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ClickableAddress } from '@/components/ui/clickable-address'

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsSticky(currentScrollY > 500)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function goHome() {
        window.location.href = '/'
    }

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'home') {
            // Verifica se já está na página inicial
            if (window.location.pathname === '/') {
                // Se já estiver na página inicial, apenas rola para o topo
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else {
                // Se não estiver na página inicial, redireciona para /
                goHome()
            }
        } else {
            // Para outras seções, mantém o comportamento atual
            const section = document.getElementById(sectionId)
            if (section) {
                const offsetTop = section.offsetTop - 80
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                })
            }
        }
    }

    return (
        <nav className={`w-full lg:text-xl py-4 md:px-8 transition-all duration-300 fixed top-0 right-0 z-100 
            ${isSticky ? 'bg-black text-white' : 'bg-transparent text-black'}
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex flex-row items-center justify-center lg:justify-between relative w-full">
                <div className="hidden lg:flex cursor-pointer" onClick={goHome}>
                    {isSticky ? (
                        <Image draggable={false} src="/assets/logo-white.svg" alt="logo" width={128} height={100} />
                    ) : (
                        <Image draggable={false} src="/assets/logo-black.svg" alt="logo" width={128} height={100} />
                    )}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex">
                    <ClickableAddress className="text-xl" size={16} />
                </div>
                <ul className="flex flex-row items-start divide-y-0 divide-x-2 divide-current cursor-pointer">
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