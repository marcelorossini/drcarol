import Image from "next/image";
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import Menu from '@/components/ui/menu';
import AfterBefore from "@/components/ui/after-before";
import { FaWhatsapp } from "react-icons/fa";
import { CollapsibleItem } from "@/components/ui/collapsible";
import Asset1 from "@/assets/1.svg"
import Teste from "@/assets/2.svg"
import SwipperAnimation from "@/assets/others/swipper-animation.gif"
import HomeBackground from "@/assets/others/home-background.png"
import Logo from "@/assets/logo.svg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Section className="relative bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
        <Menu />
        <Image src={Logo} alt="imagem" className="pt-20 px-4 z-10 relative" />
        <div className="absolute top-0 left-0 w-full h-full"><Image src={Asset1} alt="imagem" className="-mt-40 w-full h-full blur-md opacity-80" /></div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="w-full h-full flex items-end relative z-20 p-8 pb-20">
            <div className="flex flex-col gap-4">
              <p className="text-4xl text-white font-light drop-shadow-lg">
                <span>Você em harmonia<br /> com a </span><strong>sua beleza</strong>
              </p>
              <button className="flex w-fit items-center gap-2 px-4 py-2 text-2xl text-white border-2 rounded-full drop-shadow-lg">
                <FaWhatsapp size={28} /> Agendar consulta
              </button>
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#a9856d] via-35% to-[#a9856d]" />
        </div>
        <Image src={HomeBackground} alt="imagem" className="absolute bottom-0 left-0 z-0 w-full pb-16 lg:max-w-[80%]" />
      </Section>
      <Section className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Conheça nossos<br /><span className="text-primary">procedimentos</span></h1>}>
          <Image src={Teste} alt="teste" className="absolute -top-40 -right-50 z-10 w-80" />
          <div className="relative w-full h-full py-8 border-2 border-[#a9856d]">
            <div className="absolute -left-4 top-0 w-screen">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="w-full">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <img src={`https://placehold.co/400`} alt="teste" className="w-full h-full object-cover" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </Page>
      </Section>
      <Section className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Toxina Botulínica</h1>}>
          <div className="py-8 space-y-2">
            <div className="grid grid-cols-1 gap-2 divide-y divide-gray-300">
              <CollapsibleItem
                title="O que é Botox?"
                content="O botox é um procedimento que utiliza uma toxina bacteriana para reduzir a aparência de rugas e linhas de expressão."
              />
              <CollapsibleItem
                title="Como funciona o procedimento?"
                content="O procedimento é realizado através de injeções precisas da toxina botulínica nos músculos faciais, causando um relaxamento temporário que suaviza as rugas."
              />
              <CollapsibleItem
                title="Quanto tempo dura o efeito?"
                content="Os efeitos do botox geralmente duram de 3 a 6 meses, dependendo de cada pessoa e da área tratada."
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="w-28 h-28 bg-[#a9856d] rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-[#a9856d] rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-[#a9856d] rounded-xl">
              a
            </div>
          </div>
        </Page>
      </Section>
    </div>
  );
}
