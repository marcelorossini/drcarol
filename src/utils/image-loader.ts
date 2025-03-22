import fs from 'fs';
import path from 'path';

export interface ImageFile {
    url: string;
    alt: string;
}

export function loadImagesFromDirectory(directoryPath: string, altText: string): ImageFile[] {
    try {
        const publicPath = path.join(process.cwd(), 'public');
        const fullPath = path.join(publicPath, directoryPath);
        
        const files = fs.readdirSync(fullPath);
        
        return files
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
            .map(file => ({
                url: path.join(directoryPath, file),
                alt: altText
            }));
    } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        return [];
    }
} 