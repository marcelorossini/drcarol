'use client'
import { FaWhatsapp } from "react-icons/fa";
import Page from "@/components/ui/page";
import { ButtonOpenUrl } from "@/components/ui/button";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";

import { FaRegClock } from "react-icons/fa";
import { ClickableAddress } from "@/components/ui/clickable-address";

export default function HomeContact() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos";
    
    const address = "Avenida Moaci, 395, conjunto 44 - Moema, São Paulo - SP";
    const coordinates = "-23.5937,-46.6731"; // Coordenadas aproximadas de Moema, SP
    
    return (
        <section id="contato" className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <ClickableAddress size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {address}
                                </h3>
                                <p className="text-gray-600">Estamos localizados em Moema, São Paulo</p>
                                <p className="text-gray-600 mt-2">Possui estacionamento no local com manobrista.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-center">
                            <ButtonOpenUrl url={whatsappUrl} className="flex w-full max-w-128 items-center justify-center gap-2 px-4 !py-8 text-2xl text-white rounded-full drop-shadow-lg bg-primary">
                                <FaWhatsapp size={28} /> Agendar consulta
                            </ButtonOpenUrl>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Redes Sociais</h2>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <InstagramFeed username="dra.carolinamacedo" />
                                <TikTokFeed username="dra.carolinamacedo" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FaRegClock />Horário de Atendimento</h2>
                            <div className="space-y-2 text-lg">
                                <p>Terça a sexta-feira das 12:00 às 20:00</p>
                                <p>Sábado das 09:00 às 14:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 