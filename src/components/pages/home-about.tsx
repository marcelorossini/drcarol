import Page from "@/components/ui/page";
import { CarouselHighlight } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";
import Image from "next/image";
import { DEFAULT_PADDING } from "@/components/ui/section";

export default function HomeAboutDoctor() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about', 'Dra Carolina Macedo');
    return (
        <div className="relative">
            <div className="w-full h-10 lg:h-16 bg-[#957665]" />
            <div className="absolute w-full h-full lg:max-h-120 top-0">
                <Image draggable={false} src="/assets/carolpg.webp" alt="Dra. Carolina Macedo" fill className="object-contain object-top absolute top-0 left-0 z-5" />
            </div>
            <Page className={`bg-[#121212] ${DEFAULT_PADDING} pt-50 lg:pt-100`} title={<h1 className="text-white">Conheça a Dra. <span className="text-primary"><br />Carolina Macedo</span></h1>}>
                <div className="flex flex-col gap-8 relative">
                    <div className="absolute -top-60 md:-top-20 lg:-top-60 z-10 left-0 w-full h-3/4 flex flex-col">
                        <div className="relative w-full h-1/2 bg-gradient-to-b from-transparent via-[#121212] via-50% to-[#121212]" />
                        <div className="w-full h-full bg-[#121212]" />
                    </div>
                    <div className="flex flex-col gap-6 text-lg text-white relative z-15">
                        <p>
                            <strong>Dra. Carolina Macedo</strong> é <strong>Biomédica Esteta</strong>, <strong>Mestre pela USP</strong>, <strong>Pós-Graduada em Saúde Estética</strong>. Sempre em constante atualização, vem trilhando uma carreira repleta de aperfeiçoamento para melhor atender seus pacientes. Já participou de diversos <strong>congressos nacionais e internacionais</strong>, bem como se especializou em inúmeros cursos voltados para conteúdos inovadores da sua área de atuação.
                        </p>

                        <p>
                            Como <strong>empresária e referência no segmento</strong>, ela se dedica a realizar procedimentos estéticos seguros e confortáveis, assim como protocolos individualizados e assertivos, sempre com o objetivo de elevar a autoestima e proporcionar satisfação e felicidade aos seus pacientes.
                        </p>

                        <p>
                            Sua abordagem, baseada na <strong>&ldquo;Beleza Consciente com Naturalidade&rdquo;</strong>, prioriza resultados sutis e elegantes, alinhados às necessidades e desejos de cada paciente.
                        </p>
                    </div>

                    <h1 className="text-primary text-3xl font-caladea relative z-15 py-10">Atualização constante, <br /><span className="text-white">nos maiores eventos e congressos da área</span></h1>
                    <div className="pt-10 pb-20 relative z-10">
                        <CarouselHighlight images={images} />
                    </div>
                </div>
            </Page>
        </div>
    )
} 