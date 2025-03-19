import Image from "next/image";
import Page from "../components/ui/page";
import Menu from '@/components/ui/menu';
import AfterBefore from "@/components/ui/after-before";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Page className="bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
        <div className="w-full h-full">
          <Menu />
          <div className="flex flex-col gap-4">
            <p className="text-4xl text-white font-light">
              <span className="text-w">Você em harmonia<br /> com a </span><strong>sua beleza</strong>
            </p>
            <button className="w-fit text-white rounded-full border-2 py-2 px-4 flex items-center gap-2 text-2xl"><FaWhatsapp size={28} /> Agendar consulta</button>
          </div>
        </div>
      </Page>
      <Page className="bg-[#eee9e3]">
        <h1 className="text-3xl">Conheça nossos<br/><span className="text-primary">procedimentos</span></h1>
        <div className="py-8">
          <AfterBefore />
        </div>
      </Page>
    </div>
  );
}
