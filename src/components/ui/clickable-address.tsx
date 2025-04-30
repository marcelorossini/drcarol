'use client'

import { FaMapMarkerAlt } from "react-icons/fa";
import { openMaps } from '@/utils/maps';

interface ClickableAddressProps {
    size?: number;
    className?: string;
    address?: string;
    coordinates?: string;
}

export function ClickableAddress({ 
    size = 22, 
    className = "", 
    address = " Moaci, 395, conjunto 44 - Moema, São Paulo - SP",
    coordinates = "-23.5937,-46.6731"
}: ClickableAddressProps) {
    return (
        <div 
            className={`flex items-center justify-center gap-2 cursor-pointer hover:opacity-70 transition-opacity ${className}`}
            onClick={() => openMaps(address, coordinates)}
        >
            <FaMapMarkerAlt size={size} />
            <p className="font-medium text-sm lg:text-lg">Moema, São Paulo</p>
        </div>
    );
} 