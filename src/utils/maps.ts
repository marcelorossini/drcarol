import { isMobile } from 'react-device-detect';

export const openMaps = (address: string, coordinates: string, mapUrl: string) => {
    // Verifica se é um dispositivo móvel
    /*
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Tenta abrir o aplicativo nativo de mapas
        const nativeMapUrl = `geo:${coordinates}?q=${encodeURIComponent(address)}`;
        const fallbackMapUrl = mapUrl;
        
        // Cria um link temporário para testar se o protocolo geo: é suportado
        const link = document.createElement('a');
        link.href = nativeMapUrl;
        
        // Tenta abrir o aplicativo nativo
        const timeout = setTimeout(() => {
            // Se o timeout for atingido, assume que o aplicativo nativo não abriu
            window.open(fallbackMapUrl, '_blank');
        }, 2000);
        
        // Se o link for clicado, limpa o timeout
        link.onclick = () => clearTimeout(timeout);
        
        // Tenta abrir o link
        link.click();
    } else {
        // Para desktop, abre o Google Maps no navegador
        window.open(mapUrl, '_blank');
    }
    */
    window.open(mapUrl, '_blank');
}; 