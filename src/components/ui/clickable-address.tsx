'use client'

import { FaMapMarkerAlt } from "react-icons/fa";
import { openMaps } from "@/utils/maps";

interface ClickableAddressProps {
    size?: number;
    className?: string;
    address?: string;
    coordinates?: string;
    mapUrl?: string;
}

export function ClickableAddress({ 
    size = 22, 
    className = "", 
    address = "Avenida Moaci, 395 - Conj. 44 - Moema, São Paulo - SP (Edifício Mundeo Moema Business)",
    coordinates = "-23.5937,-46.6731",
    mapUrl = "https://www.google.com/maps/place/Clínica+de+Estética+Avançada+Carolina+Macedo+-+Moema+•+Botox+•+Preenchimentos+Faciais+•+Bioestimuladores+de+Colágeno/@-23.6110294,-46.6640066,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b0bff046591:0x860df1209a40a93b!8m2!3d-23.6110294!4d-46.6640066!16s%2Fg%2F11rzszdgdb?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
}: ClickableAddressProps) {
    return (
        <div 
            className={`flex items-center justify-center gap-2 cursor-pointer hover:opacity-70 transition-opacity ${className}`}
            onClick={() => openMaps(address, coordinates, mapUrl)}
        >
            <FaMapMarkerAlt size={size} />
            <p className="font-medium text-sm lg:text-lg">Moema, São Paulo</p>
        </div>
    );
} 