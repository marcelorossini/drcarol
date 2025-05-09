import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";
import Page from "@/components/ui/page";
import { AboutCards } from "@/components/ui/about-cards";
import LazyLoad from "@/components/ui/lazy-load";

export default async function HomeAboutClinic() {
    const images = await loadImagesFromDirectoryAlt('/assets/images/home-about-clinic', 'Clínica Dra. Carolina Macedo');
    return (
        <Page title={<h1 className="text-primary">Sobre a Clínica</h1>}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
                <div className="flex flex-col gap-8">
                    <p className="lg:text-justify lg:text-xl">Fundada em 2020 pela Dra. Carolina Macedo, a Clínica nasceu do desejo de proporcionar uma experiência estética humanizada  e acolhedora. <br />
                        Nossa Clínica está localizada na região de Moema (SP), próxima ao Aeroporto de Congonhas e Shopping Ibirapuera, facilitando o acesso para nossos pacientes. O ambiente foi cuidadosamente planejado para proporcionar conforto, tranquilidade e bem-estar, um verdadeiro refúgio para quem busca autocuidado.    Contamos com atendimento bilíngue em inglês e português, garantindo atendimento personalizado e acolhedor, também para nossos pacientes estrangeiros. <br />
                        Aqui oferecemos tratamentos estéticos com foco em resultados compatíveis com os desejos e necessidades de quem nos procura, garantindo uma jornada maravilhosa e segura. <br />
                    </p>
                    <AboutCards />
                </div>
                <div className="w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end rounded-lg overflow-hidden">
                    <div className="relative pb-[177.78%] h-0">
                        <LazyLoad className="absolute top-0 left-0 w-full h-full">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/JR3iOU_B7lo?controls=0&modestbranding=1&rel=0&showinfo=0"
                                title="Vídeo da Clínica Dra. Carolina Macedo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </LazyLoad>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-8">
                <CarouselDefault images={images} />
            </div>
        </Page>
    )
}