'use client'
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

export function ProcedureCard({ procedure, index }: { procedure: { title: string; image: string; href: string }, index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
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
            className="w-full h-40 object-cover object-top lg:h-80"
          />
          <div className="flex items-center h-16 text-center justify-center gap-2 text-xl p-4 bg-[#a4826b]">
            <strong>{procedure.title}</strong> <div><FaArrowAltCircleRight size={26}/></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomeTypeProcedures() {
  const procedures = [
    {
      title: "FACIAIS",
      description: "Microagulhamento, Fios Lisos PDO, PDRN/Exossomos, Limpeza de pele Premium, Skinboosting",
      image: "/assets/images/home-procedures/face.jpg",
      href: "/tratamentos/faciais"
    },
    {
      title: "CORPORAIS",
      description: "Bioestimulador de colágeno, PEIM, ENZIMAS, HARMONIZAÇÃO DE GLÚTEOS",
      image: "/assets/images/home-procedures/corpo.jpg",
      href: "/tratamentos/corporal"
    },
    {
      title: "TECNOLOGIAS",
      description: "Ultraformer MTP, Laser Lavieen",
      image: "/assets/images/home-procedures/tecnologias.jpg",
      href: "/tratamentos/tecnologias"
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-500">Conheça nossos tratamentos</p>
      <ProcedureCardList procedures={procedures} />
    </div>
  );
} 

export function ProcedureCardList({ procedures }: { procedures: { title: string; image: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
      {procedures.map((procedure, index) => (
        <ProcedureCard key={index} procedure={procedure} index={index} />
      ))}
    </div>
  );
} 