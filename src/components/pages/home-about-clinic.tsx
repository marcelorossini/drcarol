import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";
import Page from "@/components/ui/page";

export default function HomeAboutClinic() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about-clinic', 'Clínica Dra. Carolina Macedo');
    return (
        <Page title={<h1 className="text-primary">Nossa Clínica fica em São Paulo, no bairro de Moema</h1>}
            subtitle={<p className="text-justify">Com uma localização privilegiada, estamos próximos ao Aeroporto de Congonhas e ao Shopping Ibirapuera, facilitando o acesso para nossos pacientes. Nosso ambiente foi cuidadosamente planejado para proporcionar conforto e bem-estar, tornando cada visita uma experiência única. Além disso, contamos com atendimento bilíngue em inglês, garantindo um atendimento personalizado e acolhedor também para pacientes estrangeiros.</p>}>
            <div className="flex flex-col gap-8">
                <CarouselDefault images={images} />
            </div>
        </Page>
    )
}