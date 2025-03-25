import { FaWhatsapp } from "react-icons/fa";
import Page from "@/components/ui/page";
import { ButtonOpenUrl } from "@/components/ui/button";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";

export default function HomeContact() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos";

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
                            <InstagramFeed username="dra.carolinamacedo" />
                            <TikTokFeed username="dra.carolinamacedo" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Horário de Atendimento</h2>
                        <div className="space-y-2">
                            <p>Segunda a Sexta: 12:00 - 20:00</p>
                            <p>Sábado: 09:00 - 14:00</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Localização</h2>
                        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=%40-23.6111845%2C-46.6641968&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
} 