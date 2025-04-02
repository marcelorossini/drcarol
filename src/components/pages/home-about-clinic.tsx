import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";
import Page from "@/components/ui/page";

export default function HomeAboutClinic() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about-clinic', 'Clínica Dra. Carolina Macedo');
    return (
        <Page title={<h1 className="text-primary">Nossa Clínica fica em São Paulo, no bairro de Moema</h1>}
            subtitle={<p className="text-justify">Excelente localização, próximo ao aeroporto, ao Shopping Ibirapuera, com total conforto, tanto para brasileiros, quanto para estrangeiros, com atendimento bilíngue (português e inglês).</p>}>
            <div className="flex flex-col gap-8">
                <CarouselDefault images={images} />
            </div>
        </Page>
    )
}