import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonOpenUrl } from "@/components/ui/button";
import Menu from '@/components/ui/menu';

export default function HomeHero() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos";

    return (
        <>
            <Menu />
            <div className="flex flex-col items-center gap-8 p-4 pt-20 w-full lg:pt-0 lg:absolute lg:max-w-160 lg:top-1/2 lg:-translate-y-1/2 lg:right-12 z-15">
                <Image src="/assets/logo.svg" alt="imagem" width={500} height={500} className="w-full h-auto" />
                <ButtonOpenUrl url={whatsappUrl} className="w-fit items-center gap-2 px-4 !py-6 text-2xl text-black border-2 border-black hidden lg:flex rounded-full">
                    <FaWhatsapp size={28} /> Agendar consulta
                </ButtonOpenUrl>
            </div>
            <div className="absolute top-0 left-0 w-full h-full lg:w-auto">
                <Image src="/assets/1.svg" alt="imagem" width={1000} height={1000} className="rotate-slow -mt-40 w-full h-full blur-md opacity-80" />
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <div className="w-full h-full flex items-end relative z-20 p-8 lg:p-20 pb-20">
                    <div className="flex flex-col gap-8">
                        <p className="text-4xl lg:text-6xl text-white font-light drop-shadow-lg font-caladea font-bold">
                            <span>Você em harmonia<br className="lg:hidden" /> com a </span><strong>sua beleza</strong>
                        </p>
                        <ButtonOpenUrl url={whatsappUrl} className="flex w-fit items-center gap-2 px-4 !py-6 text-2xl text-white border-2 lg:hidden rounded-full">
                            <FaWhatsapp size={28} /> Agendar consulta
                        </ButtonOpenUrl>
                    </div>
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#a9856d] via-30% to-[#a9856d] lg:opacity-80" />
            </div>
            <Image src="/assets/others/home-background.png" alt="imagem" width={1000} height={1000} className="absolute bottom-0 -left-10 z-0 h-full w-auto object-contain object-left-bottom pb-24 lg:pb-0 lg:left-30" />
            <div className="absolute bottom-0 left-0 w-full h-4 z-10 bg-[#eee9e3]"/>
        </>
    )
} 