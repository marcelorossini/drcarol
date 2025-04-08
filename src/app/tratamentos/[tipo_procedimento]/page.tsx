import { loadFilesFromDirectory, readJsonFile } from '@/utils/file';
import { capitalizeText } from '@/utils/string';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { ProcedureCard, ProcedureCardList   } from '@/components/pages/home-type-procedures';

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
    }>
}

interface JsonContent {
    title: string;
    description: string;
    cover: string;
    order?: number;
    faq: Array<{
        question: string;
        answer: string;
    }>;
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
    const procedureData = await readJsonFile<JsonContent>(`/assets/content/tratamentos/${tipo_procedimento}/content-br.json`);
    
    if (!procedureData) {
        throw new Error(`Conteúdo não encontrado para o procedimento: ${tipo_procedimento}`);
    }
    
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos/${tipo_procedimento}`  
    });
    
    const proceduresData = [];
    for await (const file of files) {
        if (file.type === 'directory') {
            const jsonPath = `${file.url}/content-br.json`;
            const content = await readJsonFile<JsonContent>(jsonPath);
            if (content) {
                proceduresData.push({
                    ...content,
                    image: `${file.url}/${content.cover}`,
                    href: `/tratamentos/${tipo_procedimento}/${file.name}`,
                    order: content.order || 999 // Valor padrão para itens sem ordem definida
                });
            }
        }
    }

    proceduresData.sort((a, b) => (a.order || 999) - (b.order || 999));

    return (
        <Section id="home" className="min-h-[100vh] relative bg-[#E7E1D9]">
            <Page className="pt-10" title={<h1>{capitalizeText(tipo_procedimento)}</h1>} subtitle={<p>{procedureData.description}</p>}  >
                <div>
                    <ProcedureCardList procedures={proceduresData} />
                </div>
            </Page>
        </Section>
    );
};

export default Tratamento; 