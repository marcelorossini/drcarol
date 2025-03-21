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
import { GoogleReviews } from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";

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
          <div className="relative w-full h-full py-8">
            <div className="pt-4 absolute -left-4 top-0 w-screen z-20">
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
                <CarouselPrevious className="-left-5" />
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
      <GoogleReviews />
      <Section className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Entre em <span className="text-primary">contato</span></h1>}>
          <div className="max-w-2xl mx-auto py-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <FaWhatsapp className="text-primary" size={20} />
                    <span>(XX) XXXXX-XXXX</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Endereço da clínica</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>email@exemplo.com</span>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Horário de Atendimento</h2>
                <div className="space-y-2">
                  <p>Segunda a Sexta: 09:00 - 18:00</p>
                  <p>Sábado: 09:00 - 13:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Redes Sociais</h2>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.047-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <InstagramFeed username="dra.carolinamacedo" />
              </div>
            </div>
          </div>
        </Page>
      </Section>
    </div>
  );
}
