import { FC } from 'react';
import { convertWordFileToHtml } from '@/utils/word-to-markdown';
import { loadFilesFromDirectory, FileTreeInfo } from '@/utils/file';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { capitalizeText } from '@/utils/string';

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
                tipo_procedimento: procedures.name,
                nome_procedimento: procedure.name
            }
        }) || []
    })
    const filesGeneratedFlat = filesGenerated.flat()
    console.log(filesGeneratedFlat)
    return filesGeneratedFlat
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento, nome_procedimento } = await params;
    const html = await convertWordFileToHtml(`/assets/content/tratamentos/${decodeURIComponent(tipo_procedimento)}/${decodeURIComponent(nome_procedimento)}/texto.docx`);

    return (
        <Section id="home" className="min-h-[100vh] relative bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
            <Page className="pt-18" title={<h1>{capitalizeText(nome_procedimento)}</h1>}>
                <div className="bg-white rounded-lg p-4">
                    <div dangerouslySetInnerHTML={{ __html: html.html }} />
                </div>
            </Page>
        </Section>
    );
};

export default Tratamento; 