import { loadFilesFromDirectory, FileInfo } from './file';

const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

export function loadImagesFromDirectory(directoryPath: string): FileInfo[] {
    const files = loadFilesFromDirectory({
        directoryPath,
        fileExtensions: imageExtensions
    });
    return files as FileInfo[];
}

export interface ImageFile {
    url: string;
    alt: string;
}

export function loadImagesFromDirectoryAlt(directoryPath: string, altText: string): ImageFile[] {
    const files = loadFilesFromDirectory({
        directoryPath,
        fileExtensions: imageExtensions
    });

    return (files as FileInfo[]).map(file => ({
        url: file.url,
        alt: altText
    }));
} 