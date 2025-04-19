import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";
import Page from "@/components/ui/page";
import { AboutCards } from "@/components/ui/about-cards";

export default function HomeAboutClinic() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about-clinic', 'Clínica Dra. Carolina Macedo');
    return (
        <Page title={<h1 className="text-primary">Sobre a Clínica</h1>}
            subtitle={<p className="text-justify">Fundada em 2020 pela Dra. Carolina Macedo, a Clínica nasceu do desejo de proporcionar uma experiência estética humanizada  e acolhedora. <br />
                Nossa Clínica está localizada na região de Moema (SP), próxima ao Aeroporto de Congonhas e Shopping Ibirapuera, facilitando o acesso para nossos pacientes. O ambiente foi cuidadosamente planejado para proporcionar conforto, tranquilidade e bem-estar, um verdadeiro refúgio para quem busca autocuidado.    Contamos com atendimento bilíngue em inglês e português, garantindo atendimento personalizado e acolhedor, também para nossos pacientes estrangeiros. <br />
                Aqui oferecemos tratamentos estéticos com foco em resultados compatíveis com os desejos e necessidades de quem nos procura, garantindo uma jornada maravilhosa e segura. <br />
            </p>}>
            <AboutCards />
            <div className="flex flex-col gap-8">
                <CarouselDefault images={images} />
            </div>
        </Page>
    )
}