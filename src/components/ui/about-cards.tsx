"use client"

import { Target, Eye, Heart } from "lucide-react";
import { useState } from "react";
import { AboutCard } from "./about-card";

export function AboutCards() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="grid grid-cols-1 gap-4 mb-8">
            <AboutCard 
                title="Missão"
                icon={Target}
                isOpen={isOpen}
                onToggle={handleToggle}
                content={
                    <p className="text-gray-700 text-justify">
                        Promover a autoestima e o bem-estar dos nossos pacientes através de procedimentos estéticos seguros, modernos e personalizados, realizados com excelência técnica, sensibilidade e respeito à individualidade de cada pessoa.
                    </p>
                }
            />

            <AboutCard 
                title="Visão"
                icon={Eye}
                isOpen={isOpen}
                onToggle={handleToggle}
                content={
                    <p className="text-gray-700 text-justify">
                        Ser referência em estética avançada e humanizada, reconhecida pela entrega de resultados naturais, baseados na ciência, atendimento de alto padrão e compromisso com a beleza consciente.
                    </p>
                }
            />

            <AboutCard 
                title="Valores"
                icon={Heart}
                isOpen={isOpen}
                onToggle={handleToggle}
                content={
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
                        <li>Profissionalismo e excelência em cada atendimento</li>
                        <li>Cuidado e respeito com a vontade de cada paciente</li>
                        <li>Resultados que valorizam a naturalidade e a beleza individual</li>
                        <li>Compromisso com segurança e humanização</li>
                        <li>Atualização científica contínua e responsabilidade ética</li>
                    </ul>
                }
            />
        </div>
    )
} 