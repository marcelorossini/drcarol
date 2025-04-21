import { FC } from 'react';
import { loadFilesFromDirectory, FileTreeInfo, readMarkdownFile } from '@/utils/file';
import { loadImagesFromDirectoryAlt } from '@/utils/image-loader';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { capitalizeText } from '@/utils/string';
import { CollapsibleList } from "@/components/ui/collapsible";
import Image from 'next/image';
import { CarouselDefault } from "@/components/ui/carousel";
import { MarkdownContent } from "@/components/ui/markdown-content";
import fs from 'fs';
import path from 'path';
import { processImage } from '@/utils/image-processor';

// Definir o tipo CarouselImage para usar no componente
interface CarouselImage {
    url: string;
    alt: string;
}

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

    try {
        // Ler o conteúdo do arquivo Markdown
        const markdownContent = await readMarkdownFile(`/assets/content/tratamentos/${procedureType}/${procedureName}/content-br.md`);

        if (!markdownContent) {
            throw new Error('Conteúdo não encontrado');
        }

        // Extrair título usando a tag title
        const titleMatch = markdownContent.match(/<!-- title:start -->\s*([\s\S]*?)\s*<!-- title:end -->/);
        const title = titleMatch ? titleMatch[1].trim().replaceAll('#', '').toUpperCase() : procedureName;

        // Extrair subtítulo usando a tag subtitle
        const subtitleMatch = markdownContent.match(/<!-- subtitle:start -->\s*([\s\S]*?)\s*<!-- subtitle:end -->/);
        const subtitle = subtitleMatch ? subtitleMatch[1].trim().replaceAll('#', '') : '';

        // Extrair descrição usando a tag description
        const descriptionMatch = markdownContent.match(/<!-- description:start -->\s*([\s\S]*?)\s*<!-- description:end -->/);
        const description = descriptionMatch ? descriptionMatch[1].trim().replaceAll('#', '') : '';

        // Extrair photo1 usando a tag photo1
        const photo1Match = markdownContent.match(/<!-- photo1:start -->\s*([\s\S]*?)\s*<!-- photo1:end -->/);
        const photo1Path = photo1Match && photo1Match[1].trim() !== '' ? photo1Match[1].trim() : '';
        const photo1 = photo1Path ? `/assets/content/tratamentos/${procedureType}/${procedureName}/${photo1Path}` : '';

        // Extrair cover usando a tag cover
        const coverMatch = markdownContent.match(/<!-- cover:start -->\s*([\s\S]*?)\s*<!-- cover:end -->/);
        const coverPath = coverMatch ? coverMatch[1].trim() : '';
        const cover = coverPath ? `/assets/content/tratamentos/${procedureType}/${procedureName}/${coverPath}` : '';

        // Processar a imagem photo1
        let optimizedPhoto1 = null;

        if (photo1Path) {
            const fullPhoto1Path = path.join(process.cwd(), 'public', photo1);
            if (fs.existsSync(fullPhoto1Path)) {
                optimizedPhoto1 = await processImage(fullPhoto1Path, 1024);
            } else {
                console.warn(`Arquivo não encontrado: ${fullPhoto1Path}`);
            }
        }

        // Processar a imagem de capa
        let optimizedCover = null;

        if (coverPath) {
            const fullCoverPath = path.join(process.cwd(), 'public', cover);
            if (fs.existsSync(fullCoverPath)) {
                optimizedCover = await processImage(fullCoverPath, 1024);
                console.log(optimizedCover);
            } else {
                console.warn(`Arquivo não encontrado: ${fullCoverPath}`);
            }
        }

        const finalPhoto1 = optimizedPhoto1 ? optimizedPhoto1 : optimizedCover;

        // Extrair carrosséis usando a tag carousel
        const carouselMatches = markdownContent.match(/<!-- carousel:start -->\s*([\s\S]*?)\s*<!-- carousel:end -->/g) || [];
        const carousels: { title: string, path: string, description?: string }[] = [];

        for (const match of carouselMatches) {
            const content = match.replace(/<!-- carousel:start -->|<!-- carousel:end -->/g, '').trim();
            const lines = content.split('\n');
            if (lines.length >= 2) {
                const title = lines[0].replaceAll('#', '').trim();
                const path = lines[1].trim();
                const description = lines.length >= 3 ? lines[2].trim() : undefined;
                carousels.push({ title, path, description });
            }
        }

        // Extrair FAQ usando a tag faq
        const faqMatches = markdownContent.match(/<!-- faq:start -->\s*([\s\S]*?)\s*<!-- faq:end -->/g) || [];
        const faqItems: FaqItem[] = [];

        for (const match of faqMatches) {
            const content = match.replace(/<!-- faq:start -->|<!-- faq:end -->/g, '').trim();

            // Verificar se é uma pergunta (começa com ###)
            if (content.startsWith('###')) {
                const lines = content.split('\n');
                const question = lines[0].replace(/^###\s+/, '').trim();
                const answer = lines.slice(1).join('\n').trim();
                faqItems.push({ title: question, content: answer });
            } else {
                // Se não começar com ###, é provavelmente uma seção de FAQ sem título específico
                // Vamos usar o primeiro parágrafo como título
                const paragraphs = content.split('\n\n');
                if (paragraphs.length > 0) {
                    const firstParagraph = paragraphs[0].trim();
                    const restOfContent = paragraphs.slice(1).join('\n\n').trim();
                    faqItems.push({ title: firstParagraph, content: restOfContent });
                }
            }
        }


        // Processar carrosséis personalizados
        const photoDirectoriesWithPhotosCarousel: { name: string, description?: string, photos: CarouselImage[] }[] = [];

        // Só carregar imagens se houver carrosséis definidos no markdown
        if (carousels.length > 0) {
            // Carregar diretórios de fotos apenas se houver carrosséis
            const photoDirectories = await loadFilesFromDirectory({
                directoryPath: `/assets/content/tratamentos/${procedureType}/${procedureName}/photos`
            });

            for (const carousel of carousels) {
                const photos = await loadImagesFromDirectoryAlt(
                    `/assets/content/tratamentos/${procedureType}/${procedureName}/${carousel.path}`,
                    carousel.title
                );

                // Processar cada imagem do carrossel
                const processedPhotos = await Promise.all(photos.map(async (photo) => {
                    const fullPhotoPath = path.join(process.cwd(), 'public', photo.url);
                    const optimizedPath = await processImage(fullPhotoPath, 1024);
                    return {
                        ...photo,
                        url: optimizedPath
                    };
                }));

                if (processedPhotos.length > 0) {
                    photoDirectoriesWithPhotosCarousel.push({
                        name: carousel.title.toUpperCase(),
                        description: carousel.description,
                        photos: processedPhotos as CarouselImage[]
                    });
                }
            }
        }

        return (
            <Section id="home" className="min-h-[100vh] bg-[#E7E1D9]">
                <Page className="pt-10 lg:pt-10">
                    <div className="rounded-lg flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-xl shadow-xs pl-6 overflow-hidden">
                            <div className="flex flex-col gap-4 py-6">
                                <h1 className="text-4xl font-bold font-caladea text-primary">{title}</h1>
                                {subtitle && <h2 className="text-xl font-medium">{subtitle}</h2>}
                                <div className="h-full flex flex-col gap-2 flex-1 lg:text-justify">
                                    <MarkdownContent content={description} />
                                </div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <div className='relative w-full h-fit flex items-center justify-end'>
                                    {finalPhoto1 && (
                                        <Image draggable={false} src={finalPhoto1} alt={title || procedureName} width={1000} height={1000} className="bottom-0 w-full h-auto max-w-[300px] lg:max-w-[400px] object-contain" />
                                    )}
                                    {optimizedPhoto1 && (
                                        <div className='w-12 h-full '/>
                                    ) }
                                </div>
                            </div>
                        </div>
                        {photoDirectoriesWithPhotosCarousel.map(photoDirectory => (
                            <div key={photoDirectory.name}>
                                <h2 className="text-4xl font-caladea font-bold">{photoDirectory.name}</h2>
                                {photoDirectory.description && (
                                    <p className="mb-4 text-xl">{photoDirectory.description}</p>
                                )}
                                <CarouselDefault images={photoDirectory.photos} />
                            </div>
                        ))}
                        <div className="bg-white rounded-xl shadow-xs p-6">
                            <CollapsibleList items={faqItems} />
                        </div>
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