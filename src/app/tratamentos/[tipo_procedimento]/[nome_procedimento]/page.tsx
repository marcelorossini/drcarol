import { FC } from 'react';
import { convertWordFileToMarkdown, convertMarkdownToJson } from '@/utils/word-to-markdown';
import { loadFilesFromDirectory, FileTreeInfo } from '@/utils/file';
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

export async function generateStaticParams() {
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos`,
        recursive: true,
        showType: 'directories',
        asTree: true
    }) as FileTreeInfo[];

    // Lista de tipos de procedimentos disponíveis
    const filesGenerated = files.map(procedures => {
        return procedures.children?.map(procedure => {
            return {
                tipo_procedimento: encodeURIComponent(procedures.name),
                nome_procedimento: encodeURIComponent(procedure.name)
            }
        }) || []
    })
    const filesGeneratedFlat = filesGenerated.flat()
    //console.log(filesGeneratedFlat)
    return filesGeneratedFlat
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento, nome_procedimento } = await params;
    const procedureType = decodeURIComponent(tipo_procedimento)
    const procedureName = decodeURIComponent(nome_procedimento)
    const html = await convertWordFileToMarkdown(`/assets/content/tratamentos/${procedureType}/${procedureName}/text.docx`);

    const [title, description, ...faq] = convertMarkdownToJson(html.markdown)
    const faqItems = faq.map(item => ({
        title: item.title,
        content: item.content.replace(/\n/g, '<br />').replaceAll('*', '<br/>*')
    }))
    const photoDirectories1 = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos/${procedureType}/${procedureName}/photos`
    });
    const photoDirectories = photoDirectories1.map(i => ({
        ...i,
        photos: loadImagesFromDirectoryAlt(`/assets/content/tratamentos/${procedureType}/${procedureName}/photos/${i.name}`, i.name)
    }))

    return (
        <Section id="home" className="min-h-[100vh] bg-[#E7E1D9]">
            <Page className="pt-8 lg:pt-10">
                <div className="rounded-lg flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4">
                        <div className='relative order-1 md:row-span-2 w-full h-fit flex items-center'>
                            <Image draggable={false} src={`/assets/content/tratamentos/${procedureType}/${procedureName}/cover.webp`} alt={title.title || procedureName} width={1000} height={1000} className="bottom-0 w-full h-auto max-w-[400px] lg:max-w-[256px] object-contain mx-auto" />         
                            <div className="absolute -bottom-5 w-full h-20 bg-gradient-to-t from-[#E7E1D9] via-[#E7E1D9] to-transparent"/>                   
                        </div>
                        <h1 className="text-4xl font-bold font-caladea order-2">{title?.title || procedureName}</h1>
                        <div className="h-full flex flex-col gap-2 border-2 flex-1 order-3">
                            <p dangerouslySetInnerHTML={{ __html: description.content.replace(/\n/g, '<br />') }} />
                        </div>
                    </div>
                    {photoDirectories.map(photoDirectory => (
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
};

export default Tratamento; 