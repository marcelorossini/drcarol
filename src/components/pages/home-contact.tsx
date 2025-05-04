'use client'
import { FaWhatsapp } from "react-icons/fa";
import Page from "@/components/ui/page";
import { ButtonOpenUrl } from "@/components/ui/button";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";
import LazyLoad from "@/components/ui/lazy-load";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { openMaps } from "@/utils/maps";

export default function HomeContact() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos";
    
    const address = "Avenida Moaci, 395 - Conj. 44 - Moema, São Paulo - SP (Edifício Mundeo Moema Business)";
    const mapUrl = "https://www.google.com/maps/place/Clínica+de+Estética+Avançada+Carolina+Macedo+-+Moema+•+Botox+•+Preenchimentos+Faciais+•+Bioestimuladores+de+Colágeno/@-23.6110294,-46.6640066,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b0bff046591:0x860df1209a40a93b!8m2!3d-23.6110294!4d-46.6640066!16s%2Fg%2F11rzszdgdb?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
    const coordinates = "-23.5937,-46.6731"; // Coordenadas aproximadas de Moema, SP

    return (
        <Page title={<h1>Entre em <span className="text-primary">contato</span></h1>}>
            <div className="py-8">
                <div className="space-y-8">
                    <div className="flex items-center justify-center">
                        <ButtonOpenUrl url={whatsappUrl} className="flex w-full max-w-128 items-center justify-center gap-2 px-4 !py-8 text-2xl text-white rounded-full drop-shadow-lg bg-primary">
                            <FaWhatsapp size={28} /> Agendar consulta
                        </ButtonOpenUrl>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Redes Sociais</h2>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <LazyLoad className="flex-1">
                                <InstagramFeed username="dra.carolinamacedo" />
                            </LazyLoad>
                            <LazyLoad className="flex-1">
                                <TikTokFeed username="dra.carolinamacedo" />
                            </LazyLoad>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FaRegClock />Horário de Atendimento</h2>
                        <div className="space-y-2 text-lg">
                            <p>Terça a sexta-feira das 12:00 às 20:00</p>
                            <p>Sábado das 09:00 às 14:00</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FaMapMarkerAlt />Localização</h2>
                        <h3 
                            className="text-lg font-semibold mb-2 cursor-pointer hover:text-primary transition-colors"
                            onClick={() => openMaps(address, coordinates, mapUrl)}
                        >
                            {address}
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">Possui estacionamento no local com manobrista.</h3>
                        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.197587029925!2d-46.6661953!3d-23.6110294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0bff046591%3A0x860df1209a40a93b!2sCl%C3%ADnica%20de%20Est%C3%A9tica%20Avan%C3%A7ada%20Carolina%20Macedo%20-%20Moema%20%E2%80%A2%20Botox%20%E2%80%A2%20Preenchimentos%20Faciais%20%E2%80%A2%20Bioestimuladores%20de%20Col%C3%A1geno!5e0!3m2!1spt-BR!2sbr!4v1710861234567!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa da localização da Clínica de Estética Avançada Carolina Macedo em Moema, São Paulo"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
} 