'use client'
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import AnimatedWrapper from "@/components/ui/animated-wrapper";

export function ProcedureCard({ procedure, index, animation = true }: { procedure: { title: string; image: string; href: string }, index: number, animation?: boolean }) {
  const content = (
    <Link
      href={procedure.href}
      className="flex cursor-pointer flex-col gap-4 relative cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="rounded-4xl z-10 drop-shadow-sm overflow-hidden border-2 border-[#a4826b] text-white bg-white">
        <Image
          src={procedure.image}
          alt={"imagem do procedimento"}
          width={400}
          height={160}
          className="w-full h-56 object-cover object-top lg:h-80"
          loading="lazy"
        />
        <div className="flex items-center min-h-16 text-center justify-center gap-2 text-md md:text-lg lg:text-xl p-4 bg-[#a4826b]">
          <strong>{procedure.title}</strong> <div><FaArrowAltCircleRight size={26}/></div>
        </div>
      </div>
    </Link>
  );

  if (!animation) {
    return content;
  }

  return (
    <AnimatedWrapper index={index}>
      {content}
    </AnimatedWrapper>
  );
}

export default function HomeTypeProcedures() {
  const procedures = [
    {
      title: "FACIAIS",
      description: "Microagulhamento, Fios Lisos PDO, PDRN/Exossomos, Limpeza de pele Premium, Skinboosting",
      image: "/assets/images/home-procedures/face.webp",
      href: "/tratamentos/faciais"
    },
    {
      title: "CORPORAIS",
      description: "Bioestimulador de colágeno, PEIM, ENZIMAS, HARMONIZAÇÃO DE GLÚTEOS",
      image: "/assets/images/home-procedures/corpo.webp",
      href: "/tratamentos/corporal"
    },
    {
      title: "TECNOLOGIAS",
      description: "Ultraformer MTP, Laser Lavieen",
      image: "/assets/images/home-procedures/tecnologias.webp",
      href: "/tratamentos/tecnologias"
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <ProcedureCardList procedures={procedures} />
    </div>
  );
} 

export function ProcedureCardList({ procedures, animation = true }: { procedures: { title: string; image: string; href: string }[], animation?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
      {procedures.map((procedure, index) => (
        <ProcedureCard key={index} procedure={procedure} index={index} animation={animation} />
      ))}
    </div>
  );
} 