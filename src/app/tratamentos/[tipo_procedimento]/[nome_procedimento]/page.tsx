import { FC } from 'react';
import { loadFilesFromDirectory, FileTreeInfo, readJsonFile } from '@/utils/file';
import { loadImagesFromDirectoryAlt } from '@/utils/image-loader';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { capitalizeText } from '@/utils/string';
import { CollapsibleList } from "@/components/ui/collapsible";
import Image from 'next/image';
import { CarouselDefault } from "@/components/ui/carousel";

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
        nome_procedimento: string;
    }>
}

interface FaqItem {
    title: string;
    content: string;
}

interface RawFaqItem {
    question: string;
    answer: string;
}

interface JsonContent {
    title: string;
    description: string;
    faq: RawFaqItem[];
    cover?: string;
}

export async function generateStaticParams() {
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos`,
        recursive: true,
        showType: 'directories',
        asTree: true
    }) as FileTreeInfo[];

    // Lista de tipos de procedimentos disponíveis
    const filesGeneratedFlat = files.flatMap(procedures => 
        procedures.children?.map(procedure => ({
            tipo_procedimento: procedures.name,
            nome_procedimento: procedure.name
        })) || []
    );
    
    return filesGeneratedFlat;
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento, nome_procedimento } = await params;
    const procedureType = tipo_procedimento
    const procedureName = nome_procedimento
    console.log(procedureType, procedureName)
    try {
        // Ler o conteúdo do arquivo JSON
        const jsonContent = await readJsonFile<JsonContent>(`/assets/content/tratamentos/${procedureType}/${procedureName}/content-br.json`);
        
        if (!jsonContent) {
            throw new Error('Conteúdo não encontrado');
        }
        
        // Extrair informações do JSON
        const { title, description, faq } = jsonContent;
        
        // Formatar os itens do FAQ
        const faqItems = faq.map((item: RawFaqItem) => ({
            title: item.question,
            content: item.answer
        }));
        
        // Carregar diretórios de fotos
        const photoDirectories = await loadFilesFromDirectory({
            directoryPath: `/assets/content/tratamentos/${procedureType}/${procedureName}/FOTOS`
        });
        
        let photoDirectoriesWithPhotosCarousel = photoDirectories.filter(i => i.type === "directory").map(i => ({
            ...i,
            photos: loadImagesFromDirectoryAlt(`/assets/content/tratamentos/${procedureType}/${procedureName}/FOTOS/${i.name}`, i.name)
        }));

        photoDirectoriesWithPhotosCarousel = photoDirectoriesWithPhotosCarousel.filter(i => i.photos.length > 0)

        const defaultPhotos = photoDirectories.filter(i => i.type === "file")
        const defaultPhotosCarousel = defaultPhotos.map(i => ({
            ...i,
            photos: [i]
        }))

        return (
            <Section id="home" className="min-h-[100vh] bg-[#E7E1D9]">
                <Page className="pt-8 lg:pt-10">
                    <div className="rounded-lg flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-bold font-caladea">{title || procedureName}</h1>
                                <div className="h-full flex flex-col gap-2 border-2 flex-1">
                                    <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
                                </div>
                            </div>
                            <div className='relative w-full h-fit flex items-center'>
                                <Image draggable={false} src={`/assets/content/tratamentos/${procedureType}/${procedureName}/${jsonContent.cover}`} alt={title || procedureName} width={1000} height={1000} className="bottom-0 w-full h-auto max-w-[400px] lg:max-w-[300px] object-contain mx-auto" />         
                                <div className="absolute -bottom-5 w-full h-20 bg-gradient-to-t from-[#E7E1D9] via-[#E7E1D9] to-transparent"/>                   
                            </div>
                        </div>
                        {defaultPhotosCarousel.length > 0 && (
                            <>
                                <h2 className="text-2xl">FOTOS</h2>
                                <CarouselDefault images={defaultPhotosCarousel} />                        
                            </>
                        )}
                        {photoDirectoriesWithPhotosCarousel.map(photoDirectory => (
                            <div key={photoDirectory.name}>
                                <h2 className="text-2xl">{photoDirectory.name}</h2>
                                <CarouselDefault images={photoDirectory.photos} />
                            </div>
                        ))}
                        <CollapsibleList items={faqItems} />
                    </div>
                </Page>
            </Section>
        );
    } catch (error) {
        console.error('Erro ao carregar o procedimento:', error);
        return <div>Não foi possível carregar o conteúdo do procedimento.</div>;
    }
};

export default Tratamento; 