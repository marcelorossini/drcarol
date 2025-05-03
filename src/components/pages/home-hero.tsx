'use client'

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonOpenUrl } from "@/components/ui/button";
import { ClickableAddress } from "@/components/ui/clickable-address";

export default function HomeHero() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos";

    return (
        <>
            <div className="w-full pt-6 z-10 relative lg:hidden">
                <ClickableAddress className="text-xl lg:text-2xl text-black" />
            </div>
            <div className="flex flex-col items-center gap-8 p-4 pt-4 m-auto w-full relative md:max-w-100 lg:pt-0 lg:absolute lg:max-w-128 xl:max-w-160 lg:top-1/2 lg:-translate-y-1/2 lg:right-12 z-5">
                <Image draggable={false} src="/assets/logo-black.svg" alt="imagem" width={500} height={500} className="w-full h-auto" loading="lazy" />
                <p className="text-6xl text-center text-white font-light drop-shadow-md font-caladea font-bold hidden lg:block">
                    <span>Você em harmonia<br /> com a </span><strong>sua beleza</strong>
                </p>
                <ButtonOpenUrl url={whatsappUrl} className="w-fit items-center gap-2 px-4 !py-6 text-2xl text-white border-2 border-white lg:!py-8 lg:text-3xl lg:text-white lg:border-3 hidden md:flex rounded-full">
                    <FaWhatsapp size={28} className="lg:hidden" />
                    <FaWhatsapp size={36} className="hidden lg:block" /> Agendar consulta
                </ButtonOpenUrl>
            </div>
            <div className="absolute top-0 left-0 w-full h-full md:w-auto overflow-hidden">
                <Image draggable={false} src="/assets/1.svg" alt="imagem" width={1000} height={1000} className="rotate-slow -mt-40 w-full h-full blur-md opacity-80" loading="lazy" />
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <div className="w-full h-full flex items-end relative z-20 p-8 md:p-20 pb-8">
                    <div className="flex flex-col gap-8 h-1/5">
                        <p className="text-4xl md:text-6xl text-white font-light drop-shadow-md font-caladea font-bold lg:hidden">
                            <span>Você em harmonia<br /> com a </span><strong>sua beleza</strong>
                        </p>
                        <ButtonOpenUrl url={whatsappUrl} className="flex w-fit items-center gap-2 px-4 !py-6 text-2xl text-white border-2 md:hidden rounded-full">
                            <FaWhatsapp size={28} /> Agendar consulta
                        </ButtonOpenUrl>
                    </div>
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#a9856d] via-60% to-[#a9856d]" />
            </div>
            <Image draggable={false} src="/assets/home-carol.webp" alt="imagem" width={1000} height={1000} className="transition-all duration-300 absolute bottom-16 sm:bottom-0 md:bottom-8 -left-[3%] z-1 h-full max-h-[70vh] md:max-h-[60vh] xl:max-h-[90vh] w-auto object-contain object-left-bottom pb-24 md:pb-0 md:left-10 xl:left-30" loading="lazy" />
            <Image draggable={false} src="/assets/home-background.webp" alt="imagem" fill className="absolute opacity-50 blur-sm bottom-0 -left-10 z-0 h-full w-auto object-cover object-right-bottom pb-24 md:pb-0 md:left-30" loading="lazy" />
        </>
    )
} 