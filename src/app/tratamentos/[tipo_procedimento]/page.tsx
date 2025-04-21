import { loadFilesFromDirectory, readMarkdownFile } from '@/utils/file';
import { capitalizeText } from '@/utils/string';
import Section from "@/components/ui/section";
import Page from "@/components/ui/page";
import { ProcedureCard, ProcedureCardList   } from '@/components/pages/home-type-procedures';
import path from 'path';
import fs from 'fs';
import { processImage } from '@/utils/image-processor';

interface TratamentoProps {
    params: Promise<{
        tipo_procedimento: string;
    }>
}

interface MarkdownContent {
    title: string;
    description: string;
    cover: string;
    order?: number;
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
    
    // Ler o conteúdo do arquivo Markdown
    const markdownContent = await readMarkdownFile(`/assets/content/tratamentos/${tipo_procedimento}/content-br.md`);
    
    if (!markdownContent) {
        throw new Error(`Conteúdo não encontrado para o procedimento: ${tipo_procedimento}`);
    }
    
    // Extrair título usando a tag title
    const titleMatch = markdownContent.match(/<!-- title:start -->\s*([\s\S]*?)\s*<!-- title:end -->/);
    const title = titleMatch ? titleMatch[1].trim().replaceAll('#', '') : capitalizeText(tipo_procedimento);
    
    // Extrair descrição usando a tag description
    const descriptionMatch = markdownContent.match(/<!-- description:start -->\s*([\s\S]*?)\s*<!-- description:end -->/);
    const description = descriptionMatch ? descriptionMatch[1].trim().replaceAll('#', '') : '';
    
    // Extrair cover usando a tag cover
    const coverMatch = markdownContent.match(/<!-- cover:start -->\s*([\s\S]*?)\s*<!-- cover:end -->/);
    const cover = coverMatch ? coverMatch[1].trim() : '';
    
    // Extrair ordem usando a tag order
    const orderMatch = markdownContent.match(/<!-- order:(\d+) -->/);
    const order = orderMatch ? parseInt(orderMatch[1].trim()) : undefined;
    
    const procedureData: MarkdownContent = {
        title,
        description,
        cover,
        order
    };
    
    const files = await loadFilesFromDirectory({
        directoryPath: `/assets/content/tratamentos/${tipo_procedimento}`  
    });
    
    const proceduresData = [];
    for await (const file of files) {
        if (file.type === 'directory') {
            const markdownPath = `${file.url}/content-br.md`;
            const content = await readMarkdownFile(markdownPath);
            
            if (content) {
                // Extrair título
                const itemTitleMatch = content.match(/<!-- title:start -->\s*([\s\S]*?)\s*<!-- title:end -->/);
                const itemTitle = itemTitleMatch ? itemTitleMatch[1].trim().replaceAll('#', '').toUpperCase() : file.name;
                
                // Extrair descrição
                const itemDescriptionMatch = content.match(/<!-- description:start -->\s*([\s\S]*?)\s*<!-- description:end -->/);
                const itemDescription = itemDescriptionMatch ? itemDescriptionMatch[1].trim().replaceAll('#', '') : '';
                
                // Extrair cover
                const itemCoverMatch = content.match(/<!-- cover:start -->\s*([\s\S]*?)\s*<!-- cover:end -->/);
                const itemCover = itemCoverMatch ? itemCoverMatch[1].trim() : '';
                
                // Processar a imagem se existir
                let optimizedImagePath = '';
                if (itemCover) {
                    const fullImagePath = path.join(process.cwd(), 'public', file.url, itemCover);
                    optimizedImagePath = await processImage(fullImagePath, 512);
                }
                
                // Extrair ordem
                const itemOrderMatch = content.match(/<!-- order:(\d+) -->/);
                const itemOrder = itemOrderMatch ? parseInt(itemOrderMatch[1].trim()) : 999;
                
                proceduresData.push({
                    title: itemTitle,
                    description: itemDescription,
                    cover: itemCover,
                    image: optimizedImagePath || `${file.url}/${itemCover}`,
                    href: `/tratamentos/${tipo_procedimento}/${file.name}`,
                    order: itemOrder
                });
            }
        }
    }

    // Ordenar os procedimentos com base no campo order
    proceduresData.sort((a, b) => (a.order || 999) - (b.order || 999));

    return (
        <Section id="home" className="min-h-[100vh] relative bg-[#E7E1D9]">
            <Page className="pt-10" title={<h1>{capitalizeText(tipo_procedimento)}</h1>} subtitle={<p>{procedureData.description}</p>}  >
                <div>
                    <ProcedureCardList procedures={proceduresData} animation={false}/>
                </div>
            </Page>
        </Section>
    );
};

export default Tratamento; 