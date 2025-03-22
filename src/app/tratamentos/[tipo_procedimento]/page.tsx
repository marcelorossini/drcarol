import { FC } from 'react';
import { convertWordFileToHtml } from '@/utils/word-to-markdown';
import { loadFilesFromDirectory } from '@/utils/file';
import Link from 'next/link';
interface TratamentoProps {
    params: {
        tipo_procedimento: string;
    }
}

const Tratamento: FC<TratamentoProps> = async ({ params }) => {
    const { tipo_procedimento } = await Promise.resolve(params);
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