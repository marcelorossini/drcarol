import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

/**
 * Processa uma imagem, convertendo-a para WebP e redimensionando-a para o tamanho máximo especificado.
 * Se a imagem já foi processada anteriormente, retorna o caminho da imagem já processada.
 * 
 * @param imagePath Caminho completo da imagem a ser processada
 * @param maxSize Tamanho máximo da imagem (largura e altura)
 * @param quality Qualidade da imagem WebP (0-100)
 * @returns Caminho da imagem processada
 */
export async function processImage(
  imagePath: string, 
  maxSize: number = 512, 
  quality: number = 80
): Promise<string> {
  // Verificar se o arquivo existe
  if (!fs.existsSync(imagePath)) {
    console.warn(`Imagem não encontrada: ${imagePath}`);
    return imagePath;
  }

  // Obter informações do arquivo
  const fileInfo = path.parse(imagePath);
  const outputDir = path.join(process.cwd(), 'public', 'assets', 'optimized-images');
  
  // Criar diretório de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Nome do arquivo de saída (usando hash do caminho original para evitar colisões)
  const outputFileName = `${Buffer.from(imagePath).toString('base64').replace(/[^a-zA-Z0-9]/g, '')}.webp`;
  const outputPath = path.join(outputDir, outputFileName);

  // Verificar se já foi processado anteriormente
  if (fs.existsSync(outputPath)) {
    console.log(`Imagem já processada anteriormente: ${imagePath}`);
    return `/assets/optimized-images/${outputFileName}`;
  }

  try {
    // Verificar se é uma imagem HEIC
    const isHeic = fileInfo.ext.toLowerCase() === '.heic';
    let imageBuffer: Buffer;

    if (isHeic) {
      console.log(`Convertendo imagem HEIC: ${imagePath}`);
      // Ler o arquivo HEIC
      const inputBuffer = await fs.promises.readFile(imagePath);
      // Converter HEIC para JPEG
      imageBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
      });
    } else {
      // Para outros formatos, usar o buffer original
      imageBuffer = await fs.promises.readFile(imagePath);
    }

    // Processar a imagem com Sharp
    await sharp(imageBuffer)
      .resize(maxSize, maxSize, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);

    console.log(`Imagem processada com sucesso: ${imagePath}`);
    return `/assets/optimized-images/${outputFileName}`;
  } catch (error) {
    console.error(`Erro ao processar imagem ${imagePath}:`, error);
    return imagePath; // Retorna o caminho original em caso de erro
  }
} 