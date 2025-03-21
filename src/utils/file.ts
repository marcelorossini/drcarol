import fs from 'fs';
import path from 'path';

export interface FileInfo {
    url: string;
    name: string;
    type: 'file' | 'directory';
}

export interface FileTreeInfo extends FileInfo {
    children?: FileTreeInfo[];
}

export interface LoadFilesConfig {
    directoryPath: string;
    recursive?: boolean;
    asTree?: boolean;
    fileExtensions?: string[];
    showType?: 'all' | 'files' | 'directories';
}

function createFileInfo(relativePath: string, fileName: string, type: 'file' | 'directory'): FileInfo {
    return {
        url: relativePath.replace(/\\/g, '/'),
        name: fileName,
        type
    };
}

export function loadFilesFromDirectory(config: LoadFilesConfig): FileInfo[] | FileTreeInfo[] {
    const {
        directoryPath,
        recursive = false,
        asTree = false,
        fileExtensions = [],
        showType = 'all'
    } = config;

    try {
        const publicPath = path.join(process.cwd(), 'public');
        const fullPath = path.join(publicPath, directoryPath);
        
        const files = fs.readdirSync(fullPath);
        const results: (FileInfo | FileTreeInfo)[] = [];
        
        for (const file of files) {
            const filePath = path.join(fullPath, file);
            const relativePath = path.join(directoryPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                const baseInfo = createFileInfo(relativePath, file, 'directory');
                const shouldAddDirectory = showType !== 'files';
                let subDirFiles: (FileInfo | FileTreeInfo)[] = [];
                
                if (recursive) {
                    subDirFiles = loadFilesFromDirectory({
                        directoryPath: relativePath,
                        recursive,
                        asTree,
                        fileExtensions,
                        showType
                    });
                }

                if (shouldAddDirectory) {
                    if (asTree) {
                        results.push({
                            ...baseInfo,
                            children: subDirFiles as FileTreeInfo[]
                        });
                    } else {
                        results.push(baseInfo);
                        if (recursive) {
                            results.push(...subDirFiles);
                        }
                    }
                } else if (recursive) {
                    results.push(...subDirFiles);
                }
            } else if (stats.isFile() && showType !== 'directories') {
                const extension = path.extname(file).toLowerCase().slice(1);
                if (fileExtensions.length === 0 || fileExtensions.includes(extension)) {
                    results.push(createFileInfo(relativePath, file, 'file'));
                }
            }
        }
        
        return results;
    } catch (error) {
        console.error('Erro ao carregar arquivos:', error);
        return [];
    }
} 