import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';

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
 * Converte HTML para Markdown usando o Turndown
 * @param html - String HTML a ser convertida
 * @returns String contendo o markdown gerado
 */
export function convertHtmlToMarkdown(html: string): string {
  try {
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      emDelimiter: '_',
      strongDelimiter: '**'
    });
    
    return turndownService.turndown(html);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erro ao converter HTML para Markdown: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao converter HTML para Markdown');
  }
}

/**
 * Converte um arquivo Word (docx) diretamente para Markdown
 * @param file - Arquivo Word a ser convertido (File ou Buffer)
 * @returns Promise com o Markdown resultante e mensagens de aviso
 */
export async function convertWordToMarkdown(file: File | Buffer): Promise<{
  markdown: string;
  warnings: string[];
}> {
  const { html, warnings } = await convertWordToHtml(file);
  const markdown = convertHtmlToMarkdown(html);
  return { markdown, warnings };
}

/**
 * Converte um arquivo Word (docx) para Markdown a partir do caminho do arquivo
 * @param filePath - Caminho do arquivo Word a ser convertido
 * @returns Promise com o Markdown resultante e mensagens de aviso
 */
export async function convertWordFileToMarkdown(filePath: string): Promise<{
  markdown: string;
  warnings: string[];
}> {
  const { html, warnings } = await convertWordFileToHtml(filePath);
  const markdown = convertHtmlToMarkdown(html);
  return { markdown, warnings };
}

/**
 * Exemplo de uso:
 * 
 * // Com um objeto File (no navegador):
 * const file = event.target.files[0];
 * const { markdown, warnings } = await convertWordToMarkdown(file);
 * 
 * // Com um Buffer (no servidor):
 * const buffer = fs.readFileSync('documento.docx');
 * const { markdown, warnings } = await convertWordToMarkdown(buffer);
 * 
 * // Com um caminho de arquivo:
 * const { markdown, warnings } = await convertWordFileToMarkdown('caminho/do/arquivo.docx');
 * 
 * // Apenas conversão de HTML para Markdown:
 * const markdown = convertHtmlToMarkdown('<h1>Título</h1><p>Parágrafo</p>');
 */ 

interface Section {
  title: string;
  content: string;
}

export function convertMarkdownToJson(markdown: string): Section[] {
  // Divide o markdown em blocos separados por linhas em branco
  const blocks = markdown?.split(/\n\s*\n/);
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  blocks.forEach((block) => {
    // Remove espaços em branco do início e fim
    block = block.trim();
    if (!block) return;

    // Verifica se o bloco é um cabeçalho markdown (ex: #### **Título**)
    if (/^#{1,6}\s/.test(block)) {
      // Remove os marcadores de heading e os marcadores de negrito
      const title = block.replace(/^#{1,6}\s*/, '').replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
      currentSection = { title, content: "" };
      sections.push(currentSection);
    }
    // Verifica se o bloco é uma linha em negrito (ex: **Pergunta?**) sem quebre de linha
    else if (/^\*\*.*\*\*$/.test(block) && !block.includes("\n")) {
      const title = block.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
      currentSection = { title, content: "" };
      sections.push(currentSection);
    }
    // Caso contrário, trata o bloco como conteúdo
    else {
      // Se o bloco contiver quebras de linha, converte-as em espaços
      let content = block.replace(/\n/g, " ").trim();
      // Caso o conteúdo seja uma lista, remove os marcadores (*) e excesso de espaços
      content = content.replace(/^\*\s+/gm, "").replace(/ {2,}/g, " ").trim();

      // Se já existe uma seção atual, anexa o conteúdo nela;
      // caso contrário, cria uma nova seção sem título.
      if (currentSection) {
        currentSection.content += (currentSection.content ? " " : "") + content;
      } else {
        currentSection = { title: "", content };
        sections.push(currentSection);
      }
    }
  });

  return sections;
}