import Page from "@/components/ui/page";
import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";

export default function HomeAbout() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about', 'Dra Carolina Macedo');
    return (
        <Page title={<h1>Conheça a <span className="text-primary text-white">Dra. Carolina Macedo</span></h1>}>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 text-lg text-white">
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

                <CarouselDefault images={images} />
            </div>
        </Page>
    )
} 