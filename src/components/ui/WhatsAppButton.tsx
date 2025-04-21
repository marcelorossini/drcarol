import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511933110909&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+procedimentos+est%C3%A9ticos!&fbclid=PAZXh0bgNhZW0CMTEAAaeZrCrbumq148QWpuwxKMRaw2uvV5Pl36fqcD458D1mdhFh5K-awTFKvBIArA_aem_YKRr-CR1DhQySwkgFsAASw";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={56} />
    </a>
  );
};

export default WhatsAppButton; 