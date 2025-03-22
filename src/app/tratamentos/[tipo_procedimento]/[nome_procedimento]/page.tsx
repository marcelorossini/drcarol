import { FC } from 'react';
import { convertWordFileToHtml } from '@/utils/word-to-markdown';
import { loadFilesFromDirectory } from '@/utils/file';

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
        nome_procedimento: string;
    }>
}

export async function generateStaticParams() {
    const procedimentos = [
        { tipo_procedimento: 'face' },
        { tipo_procedimento: 'corpo' },
        { tipo_procedimento: 'tecnologias' }
    ];

    const params = [];

    for (const { tipo_procedimento } of procedimentos) {
        const files = await loadFilesFromDirectory({
            directoryPath: `/assets/texts/${tipo_procedimento}`,
            recursive: true,
            showType: 'directories'
        });

        for (const file of files) {
            params.push({
                tipo_procedimento,
                nome_procedimento: file.name
            });
        }
    }

    return params;
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento, nome_procedimento } = await params;
    const html = await convertWordFileToHtml(`/assets/texts/${decodeURIComponent(tipo_procedimento)}/${decodeURIComponent(nome_procedimento)}/texto.docx`);
    
    return (
        <div className="container mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: html.html }} />
        </div>
    );
};

export default Tratamento; 