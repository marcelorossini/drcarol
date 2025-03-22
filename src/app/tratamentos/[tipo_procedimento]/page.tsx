import { FC } from 'react';
import { loadFilesFromDirectory } from '@/utils/file';
import Link from 'next/link';

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
    }>
}

export async function generateStaticParams() {
    // Lista de tipos de procedimentos disponíveis
    return [
        { tipo_procedimento: 'face' },
        { tipo_procedimento: 'corpo' },
        { tipo_procedimento: 'tecnologias' }
    ];
}

const Tratamento = async ({ params }: TratamentoProps) => {
    const { tipo_procedimento } = await params;
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/texts/${decodeURIComponent(tipo_procedimento)}`,
        recursive: true,
        showType: 'directories'
    });
    //const html = await convertWordFileToHtml(`/assets/texts/face/TOXINA BOTULÍNICA.docx`);
    
    return (
        <div>
            {files.map((file) => (
                <div key={file.url}>
                    <Link href={`/tratamentos/${tipo_procedimento}/${file.name}`}>
                        <h1>{file.name}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Tratamento; 