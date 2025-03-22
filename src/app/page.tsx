import Image from "next/image";
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import Menu from '@/components/ui/menu';
import { FaWhatsapp } from "react-icons/fa";

import Asset1 from "@/assets/1.svg"
import Teste from "@/assets/2.svg"
import SwipperAnimation from "@/assets/others/swipper-animation.gif"
import HomeBackground from "@/assets/others/home-background.png"
import Logo from "@/assets/logo.svg"
import { GoogleReviews } from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";
import TikTokFeed from "@/components/TikTokFeed";
import HomeFAQ from "@/components/pages/home-faq";
import { ButtonOpenUrl } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import HomeAbout from "@/components/pages/home-about";
import HomeAboutClinic from "@/components/pages/home-about-clinic";
import HomeTypeProcedures from "@/components/pages/home-type-procedures";
import HomeResults from "@/components/pages/home-results";
export default function Home() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos"
  return (
    <div className="relative overflow-hidden">
      <Section id="home" className="relative bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
        <Menu />
        <Image src={Logo} alt="imagem" className="pt-20 px-4 z-10 relative" />
        <div className="absolute top-0 left-0 w-full h-full"><Image src={Asset1} alt="imagem" className="-mt-40 w-full h-full blur-md opacity-80" /></div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="w-full h-full flex items-end relative z-20 p-8 pb-16">
            <div className="flex flex-col gap-8">
              <p className="text-4xl text-white font-light drop-shadow-lg">
                <span>Você em harmonia<br /> com a </span><strong>sua beleza</strong>
              </p>
              <ButtonOpenUrl url={whatsappUrl} className="flex w-fit items-center gap-2 px-4 !py-6 text-2xl text-white border-2 rounded-full">
                <FaWhatsapp size={28} /> Agendar consulta
              </ButtonOpenUrl>
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#a9856d] via-35% to-[#a9856d]" />
        </div>
        <Image src={HomeBackground} alt="imagem" className="absolute bottom-0 left-0 z-0 w-full pb-16 lg:max-w-[80%]" />
      </Section>
      <Section id="tratamentos" className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Conheça nossos<br /><span className="text-primary">tratamentos</span></h1>}>
          <Image src={Teste} alt="teste" className="absolute -top-40 -right-50 z-10 w-80" />
          <div className="relative w-full h-full">
            <HomeTypeProcedures />
          </div>
        </Page>
      </Section>
      <Section id="resultados" className="bg-white">
        <Page title={<h1 className="text-3xl">Veja alguns <span className="text-primary">resultados</span></h1>}>
          <HomeResults />
        </Page>
      </Section>
      <Section id="faq" className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Conheça a <span className="text-primary">clínica</span></h1>}>
          <HomeAboutClinic />
        </Page>
      </Section>
      <Section id="faq" className="bg-white">
        <Page title={<h1 className="text-3xl">Perguntas <span className="text-primary">frequentes</span></h1>}>
          <HomeFAQ />
        </Page>
      </Section>
      <Section id="faq" className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Conheça a <span className="text-primary">Dra. Carolina Macedo</span></h1>}>
          <HomeAbout />
        </Page>
      </Section>
      <Section id="depoimentos" className="">
        <Page title={<h1 className="text-3xl">Depoimentos</h1>}>
          <GoogleReviews />
        </Page>
      </Section>
      <Section id="contato" className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Entre em <span className="text-primary">contato</span></h1>}>
          <div className="max-w-2xl mx-auto py-8">
            <div className="space-y-8">
              <div>
                <ButtonOpenUrl url={whatsappUrl} className="flex w-full items-center justify-center gap-2 px-4 !py-8 text-2xl text-white rounded-full drop-shadow-lg bg-primary">
                  <FaWhatsapp size={28} /> Agendar consulta
                </ButtonOpenUrl>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Redes Sociais</h2>
                <InstagramFeed username="dra.carolinamacedo" />
                <TikTokFeed username="dra.carolinamacedo" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Horário de Atendimento</h2>
                <div className="space-y-2">
                  <p>Segunda a Sexta: 12:00 - 20:00</p>
                  <p>Sábado: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </Section>
    </div>
  );
}
