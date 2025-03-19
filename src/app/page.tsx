import Image from "next/image";
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import Menu from '@/components/ui/menu';
import AfterBefore from "@/components/ui/after-before";
import { FaWhatsapp } from "react-icons/fa";
import { CollapsibleItem } from "@/components/ui/collapsible";

export default function Home() {
  return (
    <div>
      <Section className="bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
        <div className="w-full h-full">
          <Menu />
          <div className="flex flex-col gap-4">
            <p className="text-4xl text-white font-light">
              <span className="text-w">Você em harmonia<br /> com a </span><strong>sua beleza</strong>
            </p>
            <button className="w-fit text-white rounded-full border-2 py-2 px-4 flex items-center gap-2 text-2xl"><FaWhatsapp size={28} /> Agendar consulta</button>
          </div>
        </div>
      </Section>
      <Section className="bg-[#eee9e3]">
        <Page title={<h1 className="text-3xl">Conheça nossos<br /><span className="text-primary">procedimentos</span></h1>}>
          <div className="py-8">
            <a href="/procedimentos/botox">
              teste
            </a>
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
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>            
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>            
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>
            <div className="w-28 h-28 bg-red-500 rounded-xl">
              a
            </div>            
          </div>
        </Page>
      </Section>
    </div>
  );
}
