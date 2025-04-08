export const openMaps = (address: string, coordinates: string) => {
    // Verifica se é um dispositivo móvel
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Para dispositivos móveis, abre o aplicativo de mapas nativo
        window.location.href = `geo:${coordinates}?q=${encodeURIComponent(address)}`;
    } else {
        // Para desktop, abre o Google Maps no navegador
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    }
}; 