import { loadFilesFromDirectory } from '@/utils/file';
import { capitalizeText } from '@/utils/string';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { ProcedureCard, ProcedureCardList   } from '@/components/pages/home-type-procedures';

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
    }>
}

export async function generateStaticParams() {
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos`    
    });

    // Lista de tipos de procedimentos disponíveis
    return files.filter(i => i.type === 'directory').map((file) => ({
        tipo_procedimento: file.name
    }));
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento } = await params;
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos/${decodeURIComponent(tipo_procedimento)}`  
    });

    return (
        <Section id="home" className="min-h-[100vh] relative bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
            <Page className="pt-18" title={<h1>{capitalizeText(tipo_procedimento)}</h1>}>
                <div>
                    <ProcedureCardList procedures={files.filter(i => i.type === 'directory').map((file, index) => ({
                        title: file.name,
                        image: `/assets/content/tratamentos/${decodeURIComponent(tipo_procedimento)}/${decodeURIComponent(file.name)}/cover.webp`,
                        href: `/tratamentos/${encodeURIComponent(tipo_procedimento)}/${encodeURIComponent(file.name)}`
                    }))} />
                </div>
            </Page>
        </Section>
    );
};

export default Tratamento; 