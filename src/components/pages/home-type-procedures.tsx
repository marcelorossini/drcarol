import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function HomeTypeProcedures() {
  const procedures = [
    {
      title: "Face",
      description: "Microagulhamento, Fios Lisos PDO, PDRN/Exossomos, Limpeza de pele Premium, Skinboosting",
      image: "/assets/images/home-procedures/face.jpg",
      href: "/tratamentos/face"
    },
    {
      title: "Corpo",
      description: "Bioestimulador de colágeno, PEIM, ENZIMAS, HARMONIZAÇÃO DE GLÚTEOS",
      image: "/assets/images/home-procedures/corpo.jpg",
      href: "/tratamentos/corpo"
    },
    {
      title: "Tecnologias",
      description: "Ultraformer MTP, Laser Lavieen",
      image: "/assets/images/home-procedures/tecnologias.jpg",
      href: "/tratamentos/tecnologias"
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-500">Clique sobre o tratamento para saber mais</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {procedures.map((procedure, index) => (
          <Link
            href={procedure.href}
            key={index}
            className="flex flex-col gap-4 relative pb-20 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={procedure.image}
              alt={"imagem do procedimento"}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-4xl z-10 drop-shadow-sm lg:h-80"
            />
            <div className="absolute flex flex-col gap-2 -bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-24 bg-white flex items-center justify-center z-10 rounded-md drop-shadow-lg hover:drop-shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-bold">{procedure.title}</h2>
              <p className="text-sm text-center text-gray-500">{procedure.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 