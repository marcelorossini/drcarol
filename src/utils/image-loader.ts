import { loadFilesFromDirectory, FileInfo } from './file';

const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'heic'];

export async function loadImagesFromDirectory(directoryPath: string): Promise<FileInfo[]> {
    const files = await loadFilesFromDirectory({
        directoryPath,
        fileExtensions: imageExtensions
    });
    return files as FileInfo[];
}

export interface ImageFile {
    url: string;
    alt: string;
}

export async function loadImagesFromDirectoryAlt(directoryPath: string, altText: string): Promise<ImageFile[]> {
    const files = await loadFilesFromDirectory({
        directoryPath,
        fileExtensions: imageExtensions
    });

    return (files as FileInfo[]).map(file => ({
        url: file.url,
        alt: altText
    }));
} 