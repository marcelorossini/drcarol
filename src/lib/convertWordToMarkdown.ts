import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

interface ConversionResult {
    markdown: string;
    images: Array<{
        contentType: string;
        read: () => Promise<Buffer>;
    }>;
}

export async function convertWordToMarkdown(filePath: string): Promise<ConversionResult> {
    try {
        const buffer = fs.readFileSync(filePath);
        
        // @ts-expect-error mammoth não possui tipos TypeScript completos para convertToMarkdown
        const result = await mammoth.convertToMarkdown({ buffer }, {
            // @ts-expect-error mammoth não possui tipos TypeScript para transformDocument
            transformDocument: (document) => {
                return document;
            },
            includeDefaultStyleMap: true,
            styleMap: [
                "p[style-name='Section Title'] => h1:fresh",
                "p[style-name='Subsection Title'] => h2:fresh",
                "b => b",
                "i => i",
                "u => u",
                "strike => del",
                "p => p:fresh"
            ]
        });

        return {
            markdown: result.value,
            images: result.messages 
                // @ts-expect-error mammoth não possui tipos para message.type
                .filter(message => message.type === 'image')
                // @ts-expect-error mammoth não possui tipos para message.image
                .map(message => message.image)
        };
    } catch (error) {
        console.error('Erro ao converter arquivo Word para Markdown:', error);
        throw error;
    }
} 