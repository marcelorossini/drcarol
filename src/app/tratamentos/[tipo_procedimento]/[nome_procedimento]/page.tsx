import { FC } from 'react';
import { convertWordFileToHtml } from '@/utils/word-to-markdown';

interface TratamentoProps {
    params: {
        tipo_procedimento: string;
        nome_procedimento: string;
    }
}

const Tratamento: FC<TratamentoProps> = async ({ params }) => {
    const { tipo_procedimento, nome_procedimento } = params;
    const html = await convertWordFileToHtml(`/assets/texts/${decodeURIComponent(tipo_procedimento)}/${decodeURIComponent(nome_procedimento)}/texto.docx`);
    
    return (
        <div className="container mx-auto p-4">
            <div dangerouslySetInnerHTML={{ __html: html.html }} />
        </div>
    );
};

export default Tratamento; 