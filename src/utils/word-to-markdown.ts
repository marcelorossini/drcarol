import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

/**
 * Converte um arquivo Word (docx) para HTML
 * @param file - Arquivo Word a ser convertido (File ou Buffer)
 * @returns Promise com o HTML resultante e mensagens de aviso
 */
export async function convertWordToHtml(file: File | Buffer): Promise<{
  html: string;
  warnings: string[];
}> {
  try {
    // Se for um objeto File, converte para ArrayBuffer primeiro
    let buffer: Buffer;
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } else {
      buffer = file;
    }

    // Opções de conversão
    const options = {
      convertImage: mammoth.images.imgElement((image) => {
        return image.read().then((imageBuffer) => {
          // Converte a imagem para base64
          const base64 = imageBuffer.toString('base64');
          const mimeType = image.contentType;
          return {
            src: `data:${mimeType};base64,${base64}`,
          };
        });
      }),
    };

    // Converte o documento
    const result = await mammoth.convertToHtml({ buffer }, options);

    return {
      html: result.value,
      warnings: result.messages.map(msg => msg.message),
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao converter arquivo Word para HTML: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao converter arquivo Word para HTML');
  }
}

/**
 * Converte um arquivo Word (docx) para HTML a partir do caminho do arquivo
 * @param filePath - Caminho do arquivo Word a ser convertido
 * @returns Promise com o HTML resultante e mensagens de aviso
 */
export async function convertWordFileToHtml(filePath: string): Promise<{
  html: string;
  warnings: string[];
}> {
  try {
    const publicPath = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicPath, filePath);

    // Verifica se o arquivo existe
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Arquivo não encontrado: ${fullPath}`);
    }

    // Verifica se é um arquivo .docx
    if (!fullPath.toLowerCase().endsWith('.docx')) {
      throw new Error('O arquivo deve ser do tipo .docx');
    }

    // Lê o arquivo como Buffer
    const buffer = fs.readFileSync(fullPath);

    // Utiliza a função existente para converter o buffer em HTML
    return await convertWordToHtml(buffer);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao converter arquivo Word para HTML: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao converter arquivo Word para HTML');
  }
}

/**
 * Exemplo de uso:
 * 
 * // Com um objeto File (no navegador):
 * const file = event.target.files[0];
 * const { html, warnings } = await convertWordToHtml(file);
 * 
 * // Com um Buffer (no servidor):
 * const buffer = fs.readFileSync('documento.docx');
 * const { html, warnings } = await convertWordToHtml(buffer);
 */ 